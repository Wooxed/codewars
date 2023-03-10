const consecutive = arr => arr.length ? Math.max(...arr) - Math.min(...arr) + 1 - arr.length : 0
