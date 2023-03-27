const moveTen = s => s.split('').map(el => el.charCodeAt() + 10 > 122
    ? String.fromCharCode(el.charCodeAt() - 16)
    : String.fromCharCode(el.charCodeAt() + 10)).join('')