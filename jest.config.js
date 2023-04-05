/**
 * This file specifies the test coverage settings for the application.
 * It defines which files should be included in the code coverage report.
 * For more information on Jest, see https://jestjs.io/.
 */

'use strict'

module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!**/*index.js',
    '!src/serviceWorker.js',
    '!src/polyfill.js',
  ],
}
