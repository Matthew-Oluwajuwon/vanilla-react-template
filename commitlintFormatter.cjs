// commitlintFormatter.cjs
module.exports = async (results) => {
  const { default: defaultFormatter } = await import('@commitlint/format'); // dynamic import
  console.log('Running commitlintFormatter with results:', results);
  const formattedResults = defaultFormatter(results);

  return `${formattedResults}\n\n🚨 Please use the following format:\n<type>(optional scope): <subject>\n\nExamples:\n- feat: add new payment gateway\n- fix(auth): correct login issue\n`;
};
