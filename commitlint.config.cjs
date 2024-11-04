// commitlint.config.cjs
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chore', 'build', 'ci', 'revert', 'merge'],
    ],
    'subject-empty': [2, 'never'],
    'header-max-length': [2, 'always', 72],
  },
  formatter: './commitlintFormatter.cjs',
};
