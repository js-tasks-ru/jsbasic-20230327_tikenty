function getMinMax(str) {
  let arr = str.split(' ');
  let result = {
    min: arr[0],
    max: arr[0]
  };
  for (let i = 0; i < arr.length; i++) {
    if (parseFloat(arr[i]) < result.min) {
      result.min = parseFloat(arr[i]);
    }
    if (parseFloat(arr[i]) > result.max) {
      result.max = parseFloat(arr[i]);
    }
  }
  return result;
}
