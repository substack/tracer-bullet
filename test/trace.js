var test = require('tap').test;
var spawn = require('child_process').spawn;

test(function (t) {
    t.plan(2);
    var ps = spawn(
        __dirname + '/../bin/command.js',
        [ __dirname + '/files/x.js' ]
    );
    
    var data = '';
    ps.stdout.on('data', function (buf) { data += buf });
    ps.stderr.on('data', function (buf) { data += buf });
    
    ps.on('exit', function () {
        var lines = data.split('\n');
        
        t.equal(lines[0].trim(), 'Uncaught Error: boo');
        
        var stack = lines.map(function (line) {
            var m = /\/x.js:(\d+):(\d+)/.exec(line);
            return m && m[1];
        }).filter(Boolean);
        
        t.same(stack.slice(0,4), [ 10, 6, 2, 1 ]);
    });
});
