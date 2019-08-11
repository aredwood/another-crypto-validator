module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns:['dist'],
  "coverageReporters": ["json", "html"],
};