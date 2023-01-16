/**
 * Setup the 'afterEach' cleanup with Jest, so that we don't have
 * to repeat this in each of our test files.
 */
module.exports = {
    setupFilesAfterEnv: ["@testing-library/react/cleanup-after-each"]
};