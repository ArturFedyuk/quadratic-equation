module.exports = function solveEquation(equation) {
    result = [];
    equation = equation
  
    result[0] = Math.round((-equation[1] + D ** 0.5) / (2 * equation[0]));
    result[1] = Math.round((-equation[1] - D ** 0.5) / (2 * equation[0]));

    return result.sort((a,b) => a - b)
};
