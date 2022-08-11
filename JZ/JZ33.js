function VerifySquenceOfBST(sequence) {
    // write code here
    function verify(i, j) {
        if (i >= j) return true
        let index = i
        while (sequence[index] < sequence[j]) index++
        let right = index
        while (sequence[index] > sequence[j]) index++
        return index === j && verify(0, right - 1) && verify(right, j - 1)
    }

    if (sequence.length === 0) return false
    else return verify(0, sequence.length - 1)
}


module.exports = {
    VerifySquenceOfBST: VerifySquenceOfBST
};