const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\www\\haafPortfolio\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\www\\haafPortfolio\\src\\pages\\404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("C:\\www\\haafPortfolio\\src\\pages\\about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("C:\\www\\haafPortfolio\\src\\pages\\contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\www\\haafPortfolio\\src\\pages\\index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("C:\\www\\haafPortfolio\\src\\pages\\projects.js"))),
  "component---src-templates-projectpost-js": hot(preferDefault(require("C:\\www\\haafPortfolio\\src\\templates\\projectpost.js")))
}

