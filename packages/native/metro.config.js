/**
 * Metro Bundler configuration
 * https://facebook.github.io/metro/docs/en/configuration
 *
 * eslint-env node, es6
 */

const blacklist = require('metro-config/src/defaults/blacklist');
const getWorkspaces = require('get-yarn-workspaces');
const path = require('path');
const { readdirSync } = require('fs');

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

function getConfig(appDir) {
  const workspaces = getWorkspaces(appDir);
  const absoluteImports = {};
  getDirectories(path.join(__dirname, 'src')).map((name) => {
    absoluteImports[name] = path.join(__dirname, 'src', name);
    return null;
  });

  // Add additional Yarn workspace package roots to the module map
  // https://bit.ly/2LHHTP0
  const watchFolders = [
    ...workspaces.filter((workspaceDir) => !(workspaceDir === appDir)),
    path.resolve(appDir, '../../node_modules'),
  ];

  return {
    watchFolders,
    resolver: {
      blacklistRE: blacklist([
        // Ignore other resolved react-native installations outside of
        // myapp-native - this prevents a module naming collision when mapped.
        /^((?!native).)+[/\\]node_modules[/\\]react-native[/\\].*/,

        // Ignore react-native-svg dependency in myapp-ui, mapped below.
        // react-native-svg must only be included once due to a side-effect. It
        // has not been hoisted as it requires native module linking here.
        // http://bit.ly/2LJ7V4b
        /common[/\\]node_modules[/\\]react-native-svg[/\\].*/,
      ]),
      extraNodeModules: {
        ...absoluteImports,
        // Resolve all react-native module imports to the locally-installed version
        'react-native': path.resolve(appDir, 'node_modules', 'react-native'),
        'react-redux': path.resolve(appDir, 'node_modules', 'react-redux'),
        react: path.resolve(appDir, 'node_modules', 'react'),
        // Resolve additional nohoist modules depended on by other packages
        'react-native-svg': path.resolve(appDir, 'node_modules', 'react-native-svg'),

        // Resolve core-js imports to the locally installed version
        'core-js': path.resolve(appDir, 'node_modules', 'core-js'),
      },
    },
  };
}

module.exports = getConfig(__dirname);
