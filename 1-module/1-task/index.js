// Задача – написать функцию factorial(n), которая возвращает n!, используя цикл (while или for). Решить нужно именно циклом, а не рекурсией.
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
