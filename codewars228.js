const min = (arr, toReturn, minArr = Math.min(...arr)) => toReturn === 'value' ? minArr : arr.indexOf(minArr)