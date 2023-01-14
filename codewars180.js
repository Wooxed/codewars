function range(start, stop, step) {
    let result = [],
        a = arguments.length === 1 ? 0 : start,
        b = arguments.length === 1 ? start : stop,
        c = step !== void (0) ? step : 1;
    if (b < a) return result

    for (let i = a; (step === 0 ? result.length + a : i) < b; i = i + c) {
        result.push(i)
    }
    return result
}