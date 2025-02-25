# Using ES Modules

The Functions Framework >= `0.3.6` supports loading your code as an ES Module.

ECMAScript modules (ES modules or ESM) are a TC39 standard, unflagged feature in Node >=14 for loading JavaScript modules. As opposed to CommonJS, ESM provides an asynchronous API for loading modules and provides a very commonly adopted syntax improvement via `import` and `export` statements.

## Example

Before:

```js
exports.helloGET = (req, res) => {
 res.send('No ESM.');
};
```

After:

```js
export const helloGET = (req, res) => {
 res.send('ESM!');
};
```

## Quickstart

<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

Create a `package.json` file:

```json
{
  "type": "module",
  "scripts": {
    "start": "functions-framework --target=helloGET"
  },
  "main": "index.js",
  "dependencies": {
    "@openfunction/functions-framework": "^0.3.6"
  }
}
```

Update corresponding `package-lock.json`:
```shell
npm install @openfunction/functions-framework --package-lock-only
```

Create a `index.js` file:

```js
export const helloGET = (req, res) => {
  res.send('ESM!');
};
```

Install dependencies and start the framework:

```sh
npm i
npm start
```

Go to `localhost:8080/` and see your function execute!
