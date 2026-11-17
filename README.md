<h1 align="center">
  <img src="icons/icon128.png" width="72" alt="Letterboxd Diary Days logo"><br>
  Letterboxd Diary Days
</h1>

Browser extension that shows your Letterboxd **This year** count as `films / day of year`. For example, `42 / 60` on March 1 in a non-leap year, or `42 / 61` in a leap year. The label also shows the difference from a pace of one film per day: `This year (-18)` in the first example.

The extension uses the count already shown on a member's profile. It changes that number on the page only; it does not alter your Letterboxd account. The day uses your device's local date, including leap years and daylight-saving changes.

## Features

- Updates the **This year** count and adds a signed pace difference to its label on Letterboxd profile pages.
- Refreshes the day number while a page stays open.
- No permissions, storage, external requests, or build dependencies.
- Works with Chrome and Firefox (109+).

## Installation

### Via Releases

1. Download and extract the latest ZIP from [Releases](https://github.com/tblt-gr/letterboxd-diary-days/releases).
2. Follow the instructions for your browser below.

### Chrome

1. Open `chrome://extensions` and enable **Developer mode**.
2. Click **Load unpacked** and select the extracted folder (or this repository folder).

### Firefox

1. Open `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on** and select `manifest.json` in the extracted folder (or this repository folder).

## Usage

Open a Letterboxd member's main profile page. The **This year** count gains `/ N`, where `N` is today's position in the calendar year. The label shows `(films − N)`: negative when behind and prefixed with `+` when ahead. When the difference is zero, no suffix is shown. The original count and link remain Letterboxd's own.

## Project structure

```text
├── manifest.json              Extension manifest (MV3)
├── content.js                 Profile statistic update
├── icons/                     Browser icons and SVG source
├── .github/workflows/lint.yml  Syntax and extension lint
└── .github/workflows/package.yml  Release ZIP on version tags
```

## Development

No build step is needed. After editing `content.js`, reload the extension and the profile page. Run `node --check content.js` and `npx --yes web-ext lint --source-dir .` before opening a pull request.

## License

MIT. See [LICENSE](LICENSE).
