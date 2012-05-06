tracer-bullet
=============

Run node applications with
[long stack traces](https://github.com/tlrobinson/long-stack-traces).

![tracer bullet](http://substack.net/images/tracer_bullet.png)

example
=======

Instead of doing `require('long-stack-traces')` in your application, just
execute your script with `tracer-bullet` instead of `node`.

```
$ tracer-bullet fail.js
Uncaught Error: boo
    at Array.h (/home/substack/projects/tracer-bullet/example/fail.js:10:11)
    at EventEmitter._tickCallback (node.js:192:40)
----------------------------------------
    at EventEmitter.nextTick
    at Object.g (/home/substack/projects/tracer-bullet/example/fail.js:6:13)
    at Timer.ontimeout (timers.js:94:19)
----------------------------------------
    at Object.setTimeout
    at Object.f (/home/substack/projects/tracer-bullet/example/fail.js:2:5)
    at Timer.ontimeout (timers.js:94:19)
----------------------------------------
    at Object.setTimeout
    at Object.<anonymous> (/home/substack/projects/tracer-bullet/example/fail.js:1:63)
    at Module._compile (module.js:441:26)
    at Object..js (module.js:459:10)
    at Module.load (module.js:348:31)
    at Function._load (module.js:308:12)
    at Module.require (module.js:354:17)
    at require (module.js:370:17)
    at Object.<anonymous> (/home/substack/projects/tracer-bullet/bin/command.js:7:1)

node.js:201
        throw e; // process.nextTick error, or 'error' event on first tick
              ^
```

install
=======

With [npm](http://npmjs.org) do:

```
npm install -g tracer-bullet
```

license
=======

MIT
