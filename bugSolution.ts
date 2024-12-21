function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function operate(a: number, b: number, operation: string): number {
  let result: number;
  switch (operation) {
    case '+':
      result = add(a, b);
      break;
    case '-':
      result = subtract(a, b);
      break;
    case '*':
      result = multiply(a, b);
      break;
    case '/':
      if (b === 0) {
        // Handle division by zero without throwing an error
        result = 0; // or throw an error here, to ensure this path is handled, but not relying on the compiler for type narrowing
      } else {
        result = divide(a, b);
      }
      break;
    default:
      throw new Error('Invalid operation');
  }
  return result; 
}

let result = operate(10, 0, '/'); // Now, this won't throw the same runtime error
console.log(result); // Output: 0

//Alternative solution by explicitly handling every possible case with return statement
function operate2(a: number, b: number, operation: string): number {
  switch (operation) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      if (b === 0) {
        return 0; // Handle division by zero
      } else {
        return divide(a, b);
      }
    default:
      throw new Error('Invalid operation');
  }
}
console.log(operate2(10, 0, '/')); //Output: 0