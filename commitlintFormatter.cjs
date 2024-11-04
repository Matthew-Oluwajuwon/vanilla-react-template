module.exports = (results) => {
  return results.valid ? '🎉 Commit message is valid!' : `
    Invalid commit message format, please use the one of the provided format below
    💥 feat: add 'comments' option
    🐛 fix: fix some bug
    📝 docs: add some docs
    🌷 UI: better styles
    🏰 chore: Made some changes to the scaffolding
    🌐 merge: Merge other branches
    🌐 locale: Made a small contribution to internationalization
  `;
};
