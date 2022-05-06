const {defaults} = require('jest-config');
  module.exports = {
      "testEnvironment": "jsdom",
     moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/src/$1",
      "^@@/(.*)$": "<rootDir>/src/components/$1"

    },
}
