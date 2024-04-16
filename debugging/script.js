const multiply = (a, b) => {
  let result = 0;
  result = a * b; // put breakpoint here
  return result;
};

multiply(2, 3);

function add(n1, n2) {
  return n1 + n2;
}

function make_calc(n1, n2, operation) {
  if (operation == 'add') {
    return add(n1, n2);
  }
}

function init() {
  const result = make_calc(2, 3, 'add');
  console.log(result);
}

init();