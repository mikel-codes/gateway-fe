const {defaults} = require('jest-config');
module.exports = {
    "testEnvironment": "jsdom",
   moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@@/(.*)$": "<rootDir>/src/components/$1"

  },

}
/*
setupFilesAfterEnv: [
  '@testing-library/react/cleanup-after-each',
  '@testing-library/jest-dom/extend-expect'
],
*/
