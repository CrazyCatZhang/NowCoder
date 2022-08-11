function IsPopOrder(pushV, popV) {
    // write code here
    const stack = []
    let popIndex = 0
    for (let i = 0; i < pushV.length; i++) {
        stack.push(pushV[i])
        while (stack.length !== 0 && stack[stack.length - 1] === popV[popIndex]) {
            stack.pop()
            popIndex += 1
        }
    }
    return stack.length === 0
}

module.exports = {
    IsPopOrder: IsPopOrder
};