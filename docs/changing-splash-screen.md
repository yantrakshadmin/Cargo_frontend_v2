# Changing splash screen

- Create an splash screen banner with size 240x240 pixels for both iOS and Android and convert them to respective sizes.
- For Android:
    - Replace all images in `/packages/native/android/app/src/main/res/` (mipmap-*) with your images.
    - Edit your theme color in `/packages/native/android/app/src/main/res/values/colors.xml` edit `primary_dark` color code.
- For iOS:
    - Open xcode `yarn xcode`.
    - Replace all images in `<project>/<project>/Images.xcassets/SplashScreen`.
    - Choose `<project>/<project>/LaunchScreen.xib`. Click anywhere in view.
    - Select `Attribute inspector` (icon of it is somewhat like pin). Choose your background color.
