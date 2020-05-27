# Changing bundle identifier and app name

## For Android and iOS:
```shell script
# clean
yarn clean

cd packages/native
# in native directory
npx react-native-rename <newAppName> -b <bundleIdentifier>

cd -
# install depedencies
yarn install
# install ios dependencies
yarn pod

```

## Extra steps for iOS  
1. to Fix `xcode` script in `packages/native/package.json`, Edit `xcode` from `open ios/monorepo.xcworkspace` to `open ios/<newAppName>.xcworkspace`
2. Run `yarn xcode`  
3. Go to project's Build Settings  
4. Edit bundle identifier and app name

## For Web
1. (In web directory)
2. Open `src/public/manifest.json`
3. Edit `short_name` and `name`
