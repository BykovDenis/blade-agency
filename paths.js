const path = require("path");
const fs = require("fs");


const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
  appHtml: resolveApp('src/html/index.html'),
  appScss: resolveApp('src/scss/index.scss'),
  appTs: resolveApp('src/index.ts'),
  dist: resolveApp('dist'),
}
