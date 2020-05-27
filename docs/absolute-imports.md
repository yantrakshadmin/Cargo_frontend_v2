# Absolute imports

## Code sharing
You can use any import with it's name, i.e.:
```js
import {} from '@app/common/component/HelloMonorepo';
import {} from '@app/web/src/component/MonorepoIntro';
import {} from '@app/native/src/component/MonorepoIntro';
```
Although all of these work fine do cross code sharing only from `@app/common` for consistency.

## React
React comes out of the box imports for all subdirectories of `src`.
```js
import {} from 'components/MonorepoIntroduction';
```

## React Native
For RN absolute import you can use directly for all subdirectories of `src`.
```js
import {} from 'components/MonorepoIntroduction';
```
