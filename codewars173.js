function time(distance, boatSpeed, stream) {
    let string = '',
        result = 0
    if (+stream[stream.length - 2]) {
        string += stream[stream.length - 2]
    }
    if (+stream[stream.length - 1] === 0 || true) {
        string += stream[stream.length - 1]
    }
    if (stream[0] === 'D') {
        result = distance / (boatSpeed + +string)
    } else {
        result = distance / (boatSpeed - +string)
    }
    return +result.toFixed(2)
}