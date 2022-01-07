# @tpdewolf/react-jsx-classnames

JSX runtime for adding a classNames or clsx prop.

NOT a babel plugin.

## Installation

```
npm i @tpdewolf/react-jsx-classnames
```

## Usage

If you use TypeScript, edit your `tsconfig.json` like:

```js
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "@tpdewolf/react-jsx-classnames",
  }
}
```

If you use `@babel/preset-react` to transform jsx:

```js
// .babelrc / babel.config.json
{
  "presets": [
    [
      "@babel/preset-react",
      {
        "runtime": "automatic",
        "importSource": "@tpdewolf/react-jsx-classnames"
      }
    ]
  ]
}

```

If you use esbuild:

```js
{
  esbuild: {
    jsxFactory: 'createElement',
    jsxInject: 'import { createElement } from \'@tpdewolf/react-jsx-classnames\'',
  },
}
```

If you use vite with react plugin:

```js
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@tpdewolf/react-jsx-classnames",
    }),
  ],
});
```

Then you can write React code like this:

```js
function App() {
  return (
    <div classNames={['class-a', 'class-b', {
      'class-disabled': disabled,
    }]}>
  )
}
```

[clsx](https://github.com/lukeed/clsx) will be used to handle the `classNames` or `clsx` prop.
