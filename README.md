# The Accordion Generator for BCPL

This accordion generator writes bootstrap (v3.3.7) accordion code for you. You can find it in the BCPL site's tools folder.

## Build and Deploy

1. Clone this repo locally.
1. Run `yarn` or `npm install` to get all of the dependencies sorted out.
1. Run `yarn build` or `npm build` to build the React app.
1. The generated JS and CSS should be uploaded to SE. They'll have funky filenames, but upload them into:
    - `js > page specific > react-codegen.min.js`
    - `css > page specific > react-codegen.min.css`

## Releases

### 5/14/2018
- Changed the default editor to html from wysiwyg [Issue #6](https://github.com/baltimorecounty/accordion-html-generator-react/issues/6)

### 7/10/2018
- [Removed data-parent attribute](https://github.com/baltimorecounty/accordion-html-generator-react/issues/12) to remove accordion functionality. Each panel will work independently of the others.
