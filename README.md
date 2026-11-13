# HTML Hello

The most basic boilerplate for any 4Geeks Academy student, start your very first website from scratch.

> There is a video tutorial on [how to use this template to create your very first website here](https://youtu.be/dfbDCMu_p-0).

## What to do next?

Create an `index.html` file with the [basic HTML structure](http://4geeks.com/lesson/what-is-html-learn-html#page-structure). To open this page **on your own computer**, download `index.html` and `styles.css` into the same folder and double-click `index.html`. Close the browser tab when finished. No Python or Flask is needed for this option.

If you are working in a **remote GitHub Codespace**, open a terminal there, go to the folder containing `index.html` and run:

```bash
python3 -m http.server 8000 --bind 0.0.0.0
```

In VS Code, open the **Ports** tab and use the **Open in Browser** button for port 8000. If the port does not appear, forward port 8000 from that tab. The browser on your computer cannot access the Codespace through your computer's `localhost:8000`; use the forwarded URL instead. To finish, close the browser tab **and press Ctrl+C in the Codespace terminal** to stop the server. If port 8000 is occupied, use 8001 in both the command and Ports tab.

- You can create as many HTML files as you want.
- You can also create CSS files and import them into your website using a `<link>` tag placed between the `<head></head>` tags, like this:

```html
<head>
  ...
  <link rel="stylesheet" type="text/css" href="styles.css">
  ...
</head>
```

- If you want to use Tailwind CSS, add it optionally via the official Tailwind CSS v4 CDN inside the same `<head>`:

```html
<head>
  ...
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  <link rel="stylesheet" type="text/css" href="styles.css">
  ...
</head>
```

### Contributors

This template was built as part of the [Full Stack Developer course](https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer) at [4Geeks Academy Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) by [Alejandro Sanchez](https://twitter.com/alesanchezr) and [many other contributors](https://github.com/4GeeksAcademy/html-hello/graphs/contributors).

You can find other templates and resources like this at the [school's GitHub page](https://github.com/4geeksacademy/).
