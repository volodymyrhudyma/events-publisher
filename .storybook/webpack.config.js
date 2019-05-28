const { join } = require('path');

module.exports = ({ config }) => {
	config.resolve.alias['src'] = join(__dirname, '../src');
	return config;
};
