// commitlintFormatter.cjs
module.exports = async (results) => {
  const { default: defaultFormatter } = await import('@commitlint/format'); // dynamic import

  const formattedResults = defaultFormatter(results);

  if (results.valid) {
    return `${formattedResults}\n\n🎉 Commit message is valid!`;
  } else {
    // Extract errors and warnings to create a more user-friendly error message
    const errors = results.results.flatMap(result => result.errors.map(error => error.message)).join('\n');
    const warnings = results.results.flatMap(result => result.warnings.map(warning => warning.message)).join('\n');

    return `${formattedResults}\n\n🚨 Commit message is invalid!\n\nErrors:\n${errors}\n\nWarnings:\n${warnings}\n\nPlease use the following format:\n<type>(optional scope): <subject>\n\nExamples:\n- feat: add new payment gateway\n- fix(auth): correct login issue\n`;
  }
};
