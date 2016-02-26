# Stackable Javascript Library

Official Stackable API library for Javascript.

Working example found in `examples` directory

In browser `jQuery` is required.

## Install

You can get it on npm

```
npm install stackable --save
```

Or bower, too.

```
bower install stackable --save
```

Include Stackable file in your project

```html
<script src="dist/stackable.min.js"></script>
```

## Usage

To initialize

```js
var stackable = new Stackable('YOUR-PUBLIC-KEY-HERE');
```

To list all containers

```js
stackable.getContainers(function (error, result) {
    console.log(error, result);
});
```

To get single containers

```js
stackable.getContainer('CONTAINER-ID-HERE', function (error, result) {
    console.log(error, result);
});
```

To get all items within single container

```js
stackable.getContainerItems('CONTAINER-ID-HERE', function (error, result) {
    console.log(error, result);
});
```

To get all items within stack

```js
stackable.getAllItem(function (error, result) {
    console.log(error, result);
});
```

To get single item

```js
stackable.getItem('ITEM-ID-HERE', function (error, result) {
    console.log(error, result);
});
```

## To build (development)

Sources files are located in `src` directory

Run npm install to  setup required libraries.

```
npm install
```

### npm Scripts

- `npm test` - Lint the library and tests, then run the unit tests
- `npm run lint` - Lint the source and unit tests
- `npm run watch` - Continuously run the unit tests as you make changes to the source
   and test files themselves
- `npm run test-browser` - Build the library for use with the browser spec runner.
  Changes to the source will cause the runner to automatically refresh.
- `npm run build` - Lint then build the library
- `npm run coverage` - Generate a coverage report

## Todo

- Write tests.
