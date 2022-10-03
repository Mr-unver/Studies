console.log('Start!');

console.log('Start 2');

function timeout2sec() {
    console.log('timeout 2s')
}

window.setTimeout(function() {
    console.log('timeout 5s')
}, 5000)

setTimeout(timeout2sec, 2000)

console.log('End')