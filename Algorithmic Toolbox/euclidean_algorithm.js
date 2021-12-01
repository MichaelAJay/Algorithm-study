function euclideanAlgorithm(a, b) {
    if (b == 0) return a
    return euclideanAlgorithm(b, a % b)
}

console.log(euclideanAlgorithm(357, 234))