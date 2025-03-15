let num = [5,8,2,9,3]
num.sort()
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('The value is not found!')
} else {
    console.log(`the value is on the position ${pos}`)
}