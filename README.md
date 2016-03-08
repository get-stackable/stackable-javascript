# Stackable Javascript Library

This is the Official Stackable API Javascript library for getting data from stacks.

Available and Support in both `Browser` and `NodeJs`.

Working examples are found in `examples` directory!

- [Vanilla Javascript Example](examples/index.html)
- [AngularJs Example](examples/index-angular.html)
- [ReactJs Example](examples/index-react.html)

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

Make sure to create an account at [http://www.stackable.space](http://www.stackable.space) and setup your Stack and Containers.

To initialize

```js
var stackable = new Stackable('YOUR-STACK-PUBLIC-KEY-HERE');
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
stackable.getAllItems(function (error, result) {
    console.log(error, result);
});
```

To get single item

```js
stackable.getItem('ITEM-ID-HERE', function (error, result) {
    console.log(error, result);
});
```

To create new item

- First initialize, using PRIVATE KEY, (MAKE SURE YOU KEEP THIS KEY SAFE! MOSTLY ON SERVER SIDE)

```js
var stackable = new Stackable('YOUR-STACK-PRIVATE-KEY-HERE');
```

```js
var dataToPost = {
    name: 'John Doe',
    age: 29
};

stackable.createItem('CONTAINER-ID-HERE', dataToPost, function (error, result) {
    console.log(error, result);
});
```

To update an item

```js
var dataToUpdate = {
    name: 'John Doe',
    age: 29
};

stackable.updateItem('ITEM-ID-HERE', dataToUpdate, function (error, result) {
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
- Test with Nodejs App
- Nodejs example
