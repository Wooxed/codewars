function mod256WithoutMod(number) {
    while (number > 255) {
        number -= 256
    }
    while (number < -255) {
        number += 256
    }
    return number
}
