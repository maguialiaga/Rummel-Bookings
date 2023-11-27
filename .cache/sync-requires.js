
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/magdalenaaliaga/Documents/2023/Rummel-Bookings/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/magdalenaaliaga/Documents/2023/Rummel-Bookings/src/pages/index.js")),
  "component---src-pages-music-js": preferDefault(require("/Users/magdalenaaliaga/Documents/2023/Rummel-Bookings/src/pages/music.js")),
  "component---src-pages-roaster-js": preferDefault(require("/Users/magdalenaaliaga/Documents/2023/Rummel-Bookings/src/pages/roaster.js")),
  "component---src-templates-artist-template-js": preferDefault(require("/Users/magdalenaaliaga/Documents/2023/Rummel-Bookings/src/templates/artistTemplate.js"))
}

