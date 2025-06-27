<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./public/icons/logo_black.png">
  <source media="(prefers-color-scheme: light)" srcset="./public/icons/logo_white.png">
  <img alt="Logo" src="./public/icons/logo_white.png" width="150">
</picture>

# GH2MD: GitHub to Markdown

GH2MD is a web service that converts any public GitHub repository into a single, easy-to-read Markdown file.

## How to use

Simply construct a URL with the following format:

`https://gittomd.com/<github-user>/<github-repo>`

For example, to get the Markdown for the `expressjs/express` repository, you would use the following URL:

`https://gittomd.com/expressjs/express`

The service will then fetch the repository and return a Markdown file.

## How it works

The service uses the GitHub API to fetch the file tree of the repository. It then reads the content of each file and concatenates them into a single Markdown file, with each file's content in a separate code block, annotated with the file path.

## Known Issues

- Very large repositories might take a long time to process or might fail.
- Binary files are not supported and will be ignored.
- The service is rate-limited by the GitHub API.
