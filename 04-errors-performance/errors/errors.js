try {
  try {
    throw new Error('whoops');
  } catch (e) {
    // (e) optional
    // console.error(e);
    console.error(e.name); // Error
    console.error(e.message); // whoops
    throw new Error('oh no!', { cause: e });
  }
} catch (e) {
  console.error(e);
} finally {
  console.log('clean up');
}

// EvalError
// kann man nur schwer auslösen, weil die Überprüfung vor der Ausführung stattfindet - der syntaxfehler wird zuerst geworfen
try {
  eval('1 ++ 2');
} catch (error) {
  if (error instanceof EvalError) {
    console.log('Ein EvalError ist aufgetreten: ' + error.message);
  } else {
    console.log('Ein anderer Fehler ist aufgetreten: ' + error.message);
  }
}

// InternalError - nicht Standard - z.B. bei too much recursion - FF only

// RangeError
try {
  const arr = new Array(-1);
} catch (error) {
  if (error instanceof RangeError) {
    console.log('Ein RangeError ist aufgetreten: ' + error.message);
  } else {
    console.log('Ein anderer Fehler ist aufgetreten: ' + error.message);
  }
}

// ReferenceError
try {
  console.log(doesNotExist);
} catch (error) {
  if (error instanceof ReferenceError) {
    console.log('Ein ReferenceError ist aufgetreten: ' + error.message);
  } else {
    console.log('Ein anderer Fehler ist aufgetreten: ' + error.name);
  }
}

// SyntaxError
try {
  eval('console.log(1 ++ 2);');
  // console.log(1 ++ 2);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log('Ein SyntaxError ist aufgetreten: ' + error.message);
  } else {
    console.log('Ein anderer Fehler ist aufgetreten: ' + error.name);
  }
}

// TypeError
try {
  const foo = 'bar';
  foo();
} catch (error) {
  if (error instanceof TypeError) {
    console.log('Ein TypeError ist aufgetreten: ' + error.message);
  } else {
    console.log('Ein anderer Fehler ist aufgetreten: ' + error.name);
  }
}

// URIError
try {
  const invalidURI = decodeURI('%'); // Das Prozentzeichen alleine ist keine gültige URI-Kodierung
} catch (error) {
  if (error instanceof URIError) {
    console.log('Ein URIError ist aufgetreten: ' + error.message);
  } else {
    console.log('Ein anderer Fehler ist aufgetreten: ' + error.name);
  }
}

class MyCustomError extends Error {}

try {
  throw new MyCustomError('whoops');
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}
