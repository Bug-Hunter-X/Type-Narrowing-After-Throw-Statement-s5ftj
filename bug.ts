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

let result = add(5, 3); // 8
result = subtract(10, 4); // 6
result = multiply(7, 2); // 14
result = divide(15, 3); // 5

// Uncommon error: Type narrowing after a throw statement might not work as expected.
// The following code will throw an error at runtime due to type narrowing
// happening after a throw statement.

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
        throw new Error('Cannot divide by zero');
      }
      result = divide(a, b);
      break;
    default:
      throw new Error('Invalid operation');
  }
  return result; // Type narrowing error: result may not be initialized
}

operate(10,0,'/')