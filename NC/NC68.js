function jumpFloor(number) {
    // write code here
    const result = [0, 1, 2]
    if (number > 2) {
        for (let i = 3; i <= number; i++) {
            result[i] = result[i - 1] + result[i - 2]
        }
    }
    return result[number]
}

module.exports = {
    jumpFloor: jumpFloor
};