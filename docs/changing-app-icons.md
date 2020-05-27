# Changing app icon

- Create an icon with size 1024x1024 pixels.  
- Bake Android and iOS icons using [makeicon] and web icons using [favicon-generator].  
- Copy new `android` icon to `/packages/native/android/app/src/main/res/`. Replace all `ic_launcher.png` from respective folders.
- Also bake Round icons for android (use [makeicon]). Replace all `ic_launcher_round.png` from respective folders.
- Run `yarn xcode` or open correct `.xcworkspace` in xcode. Go to `<project>/<project>/Images.xcassets` and drag and drop all.
- Replace all web icons to `/packages/web/public/logos/`.

- For adaptive icons in Android Replace `ic_laucher_foreground.png` in `/packages/native/android/app/src/main/res/`. And change it's bg color in `/packages/native/android/app/src/main/res/values/ic_launcher_background.xml`
