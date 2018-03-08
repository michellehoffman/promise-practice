// ---------------- EXERCISE 1 ------------------

function testNum(num) {
  if (num > 10) {
    return Promise.resolve("You did it!")
  } else {
    return Promise.reject(num + " is less than 10, error")
  }
}

// testNum(15)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// testNum(5)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))


// ---------------- EXERCISE 2 ------------------

function makeAllCaps(array) {
  const result = array.every(item => (typeof item === 'string'))
 
  if(result) {
    let upperCase = array.map(item => item.toUpperCase())

    return Promise.resolve(upperCase)
  } else {
    return Promise.reject('No, the array you passed in contained an element that was not a string!')
  }  
} 

function sortWords(words) {
  const sorted = words.sort()
 
  return Promise.resolve(sorted)
}

// makeAllCaps(['wowow', 'pants', 'bird'])
//   .then(words => sortWords(words))
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// makeAllCaps(['wowow', 5, 'bird'])
//   .then(words => sortWords(words))
//   .then(result => console.log(result))
//   .catch(error => console.log(error))