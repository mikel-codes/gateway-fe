const path = require("path");

module.exports = {
   moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@@/(.*)$": "<rootDir>/src/components/$1"

    }
}
