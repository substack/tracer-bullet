setTimeout(function f () {
    setTimeout(g, 5);
}, 10);

function g () {
    process.nextTick(h);
}

function h () {
    throw new Error('boo');
}
