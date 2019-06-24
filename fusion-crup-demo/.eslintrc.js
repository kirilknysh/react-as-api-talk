/* eslint-env node */
module.exports = {
  extends: [require.resolve('eslint-config-fusion')],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
  rules: {
	'prettier/prettier': 'off',
	'semi': ['error', 'always'],
	quotes: ['error', 'single']
  },
};
