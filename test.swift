func findNb(_ m: Int) -> Int {
  var n = 0
  var b = 0
  while b != m {
    n+=1
    b += n * n * n
    if b > m {
      return -1
    }
  }
  return n
}

print(findNb(1071225))

// vol = n^3 + n^3 - 1 + n^3 - 8 + ... + (n-x)^3
// 1 + 8 + 27 + 36