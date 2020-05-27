# React and React Native - Monorepo
This is a monorepo which can be used to share code between `create-react-app` and `react-native init`. If you have to create an web and native app this can be a good starting place.    

If you want 100% code sharing see [react-native-web-monorepo]. But using [react-native-web] can come with some compatibility issues and you will have to find workaround. Also, native and web have different architecture and [react-native-web] is currently in beta.

## Running this boilerplate
```shell script
# clone the repo
git clone https://github.com/Faisal-Manzer/react-and-react-native-monorepo.git app
cd app

# install dependencies
yarn install

# install ios dependencies
yarn pod

# manually start RN bundeller
yarn start

# run Web/Android/iOS
yarn web
yarn ios
yarn android

# open in Android Studio/XCode
yarn studio
yarn xcode

# clean and reinstall
yarn clean
yarn install
yarn pod
```

## Navigating this repo correctly
This repo has several branches which acts as stages in which a small feature is incorporated.
- [01-initial] - Contains very basic Monorepo setup which is just what you will get after using `create-react-app` or `react-native-init`. This branch do have a bug when you will try to rename it. **Use [02-rename] instead of this**.
- [02-rename] - Its also same as [01-initial] except the fact that App name and Package Names is changed. Use this branch for further development. You should rename your project (refer to [Guide](/docs/changing-bundle-identifier-and-app-name.md)).
- [03-icons] - Contains guide for changing App icons. And provides with custom App Icon. Read the [guide](/docs/changing-app-icons.md) to customise it.
- [04-splash-screen] - Custom Splash screen is added for iOS and Android.
- [05-adaptive-icons] - Have Android's adaptive icon support. Read the [guide](/docs/changing-app-icons.md) to customise it.
- [06-navigation] - Added navigation support for Android/iOS/Web. Web is using `@react/router` and native is using `react-navigation@5`. A simple Stack navigator is added to native.
- [07-absolute-imports] - Configured absolute imports for RN and web. Read [guide](/docs/absolute-imports.md) for more info.

Clone specific branch as you wish.
```shell script
git clone --single-branch --branch <branch-name> https://github.com/Faisal-Manzer/react-and-react-native-monorepo
```
## Guides
- [Absolute imports](/docs/absolute-imports.md)
- [Changing bundle identifier and app name](/docs/changing-bundle-identifier-and-app-name.md)
- [Changing app icons](/docs/changing-app-icons.md)
- [Changing splash screen](/docs/changing-splash-screen.md)

----

[makeicon]: https://makeappicon.com
[favicon-generator]: https://www.favicon-generator.org
[react-native-web-monorepo]: https://github.com/brunolemos/react-native-web-monorepo
[react-native-web]: https://github.com/necolas/react-native-web

[01-initial]: https://github.com/Faisal-Manzer/react-and-react-native-monorepo/tree/01-initial
[02-rename]: https://github.com/Faisal-Manzer/react-and-react-native-monorepo/tree/02-rename
[03-icons]: https://github.com/Faisal-Manzer/react-and-react-native-monorepo/tree/03-icons
[04-splash-screen]: https://github.com/Faisal-Manzer/react-and-react-native-monorepo/tree/04-splash-screen
[05-adaptive-icons]: https://github.com/Faisal-Manzer/react-and-react-native-monorepo/tree/05-adaptive-icons
[06-navigation]: https://github.com/Faisal-Manzer/react-and-react-native-monorepo/tree/06-navigation
[07-absolute-imports]: https://github.com/Faisal-Manzer/react-and-react-native-monorepo/tree/07-absolute-imports
