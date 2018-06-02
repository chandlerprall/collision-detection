const path = require('path');

module.exports = {
    collectCoverage: true,
    coverageDirectory: path.join(__dirname, 'testcoverage'),
    testMatch: ['<rootDir>/tests/**/*.test.js'],
    transform: {
        ".*\\.js": "babel-jest"
    }
};