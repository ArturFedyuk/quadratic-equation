module.exports = function solveEquation(equation) {
  equation = equation.replace(/\s/g,'');
  arr = equation.split('x');

  A = Int(arr[0]),
  B = Int(arr[1].slice(2)),
  C = Int(arr[2]);

  D = Math.pow(B,2) - 4*A*C,
  X1 = Math.round((-B + Math.sqrt(D)) / (2 * A)),
  X2 = Math.round((-B - Math.sqrt(D)) / (2 * A));

  return [X1, X2].sort( (a,b) => a - b );
}
