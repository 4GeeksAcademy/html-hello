try:
    # try to import flask, or return error if has not been installed
    from flask import Flask
    from flask import send_from_directory
    from flask import request
except ImportError:
    print("You don't have Flask installed, run `$ pip3 install flask` and try again")
    exit(1)

import gzip
import os
import subprocess

static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), './')
app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 31536000

LONG_CACHE_EXTENSIONS = {
    ".avif", ".css", ".gif", ".ico", ".jpg", ".jpeg", ".js", ".png", ".svg", ".webp", ".woff", ".woff2",
}

TEXT_MIME_TYPES = {
    "application/javascript",
    "application/json",
    "application/xml",
    "image/svg+xml",
}


def apply_cache_headers(response, path):
    extension = os.path.splitext(path)[1].lower()
    if path == "index.html":
        response.headers["Cache-Control"] = "no-cache, max-age=0"
        return response

    if extension in LONG_CACHE_EXTENSIONS:
        response.headers["Cache-Control"] = "public, max-age=31536000, immutable"
    else:
        response.headers["Cache-Control"] = "public, max-age=3600"
    return response


def maybe_compress_response(response):
    accept_encoding = request.headers.get("Accept-Encoding", "")
    if "gzip" not in accept_encoding.lower():
        return response

    if response.status_code != 200:
        return response

    if response.headers.get("Content-Encoding"):
        return response

    content_type = (response.mimetype or "").lower()
    is_text_response = content_type.startswith("text/") or content_type in TEXT_MIME_TYPES
    if not is_text_response:
        return response

    response.direct_passthrough = False
    raw_content = response.get_data()
    if len(raw_content) < 1024:
        return response

    compressed = gzip.compress(raw_content, compresslevel=6)
    response.set_data(compressed)
    response.headers["Content-Encoding"] = "gzip"
    response.headers["Content-Length"] = str(len(compressed))
    response.headers["Vary"] = "Accept-Encoding"
    return response

# Serving the index file
@app.route('/', methods=['GET'])
def serve_dir_directory_index():
    if os.path.exists("app.py"):
        # if app.py exists we use the render function
        out = subprocess.Popen(['python3','app.py'], stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
        stdout,stderr = out.communicate()
        return stdout if out.returncode == 0 else f"<pre style='color: red;'>{stdout.decode('utf-8')}</pre>"
    if os.path.exists("index.html"):
        response = send_from_directory(static_file_dir, "index.html")
        response = apply_cache_headers(response, "index.html")
        return maybe_compress_response(response)
    else:
        return "<h1 align='center'>404</h1><h2 align='center'>Missing index.html file</h2><p align='center'><img src='https://github.com/4GeeksAcademy/html-hello/blob/main/.vscode/rigo-baby.jpeg?raw=true' /></p>"

# Serving any other image
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = os.path.join(path, 'index.html')
    response = send_from_directory(static_file_dir, path)
    response = apply_cache_headers(response, path)
    return maybe_compress_response(response)

app.run(host='0.0.0.0', port=3000, debug=True, extra_files=['./'])
