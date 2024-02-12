module.exports = {
  rootDir: "test",
  testEnvironment: "jsdom",
	testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
	testPathIgnorePatterns: ["node_modules"],
  transform: {
    "^.+\\.(j|t)sx?$": "ts-jest",
  },
	moduleNameMapper: {
    '^@/types/(.*)$': 'src/types/$1',
  },
  setupFilesAfterEnv: [
		"@testing-library/jest-dom",
	],

};
