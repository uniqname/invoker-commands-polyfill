# invoker-commands-polyfill

A drop-in polyfill for the Invoker Commands API

## Usage

This polyfill is meant primarily to be copied and pasted into your application. You should own as much of the code  that executes in your environment as is reasonable.

```html
<script>
// The contents of index.js
</script>
```

However, you may prefer to include the script from something like unpkg. 

```html
<script src="https://unpkg.com/invoker-commands-polyfill@:1.0.0/index.js"></script>
```


You can, if you wish, install it via npm and import it into your application.

```bash
npm i invoker-commands-polyfill
```

Then import it into your project. It will automatically polyfill if needed or do nothing if the environment already supports invoker commands. As with all polyfills, you should import the polyfill as early in your application execution as you can.

```js
import 'invoker-commands-polyfill';
```