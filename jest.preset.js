const nxPreset = require('@nrwl/jest/preset').default;

module.exports = { ...nxPreset,
    testEnvironment: '@happy-dom/jest-environment'}
    

