module.exports = {
    preset: 'react-native',
    "collectCoverage": true,
	"moduleDirectories": [
		"node_modules",
		"src"
	],
	"setupFiles": [
		"./utils/jest/setup.js"
	],
	"transformIgnorePatterns": [
		"node_modules/(?!(jest-)?react-native)"
	],
	"coveragePathIgnorePatterns": [
		"/node_modules/",
		"/jest"
	],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};