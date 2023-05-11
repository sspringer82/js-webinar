console.log('a');
// while (true);
// for (;;);

setInterval(() => {
  console.log('foo');
}, 100);

function render() {
  requestAnimationFrame(render);
}

requestAnimationFrame(render);

console.log('b');
