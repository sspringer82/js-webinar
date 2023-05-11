console.log('a');
// while (true);
// for (;;);

// regelmäßige Ausführung
setInterval(() => {
  console.log('foo');
}, 100);

// synchronisierung mit der darstellung im browser
function render(timestamp) {
  requestAnimationFrame(render);
}

requestAnimationFrame(render);

console.log('b');
