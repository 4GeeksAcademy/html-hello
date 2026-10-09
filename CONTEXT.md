# Personal Profile Project Context

## Purpose and audience

This project is a personal profile page within the Chic Parisien storefront starter project. The page is intended to introduce its owner to professional contacts, collaborators, and prospective employers. Personal details are deliberately placeholders until the owner supplies them.

## Profile content

- **Name:** [Your Name]
- **Role:** [Your Role or Professional Title]
- **Short bio:** [Write a short introduction about yourself, your work, and what you care about.]
- **About:** [Add background, interests, and the work or collaborations you are open to.]
- **Skills:** [Skill one], [Skill two], [Skill three], [Add another skill]
- **Projects:** [Add project names, descriptions, contributions, and optional valid project URLs.]
- **Contact and social links:** [Add a valid email address], [Add a LinkedIn profile URL], [Add a GitHub profile URL]. Links should only be rendered after valid destinations are provided.
- **Photo:** Replace the accessible portrait placeholder with an owner-provided image when available.

Do not invent personal details, qualifications, achievements, project work, or contact information. All profile copy and placeholders are kept together in `profile.html` so the page remains editable without a data-fetching script or additional dependency.

## Technology stack

- Semantic HTML5
- Tailwind CSS v4 via its official browser CDN
- Flask development server provided by `server.py`
- No custom CSS, JavaScript, or additional frameworks or libraries

## Design guidelines

- Follow the existing Chic Parisien black, charcoal, gold, ivory, and restrained red palette documented in `context.md`.
- Preserve the shared storefront header, navigation, and footer conventions.
- Keep the layout responsive, with readable spacing and typography at mobile and desktop widths.
- Use semantic landmarks and headings, meaningful accessible names, and visible keyboard focus styles.
- Only add links when their destinations are valid; do not use fake `#` URLs for contact or social profiles.
- Use the existing Tailwind CDN and palette. Do not add custom stylesheets, style blocks, inline style attributes, or JavaScript.

## Page requirements

`profile.html` contains a photo placeholder, name, role, short introduction, About section, skill badges, project cards, and a Contact section. Replace the bracketed values in that file with the owner's verified information. If a link is not provided, keep it as plain placeholder text rather than creating a nonfunctional link.

## Running the project

Install Flask if needed and start the existing local server:

```bash
pip3 install flask
python3 server.py
```

Open <http://localhost:3000/profile.html>. This project has no frontend build step; Tailwind's browser CDN requires an internet connection when loading the page.