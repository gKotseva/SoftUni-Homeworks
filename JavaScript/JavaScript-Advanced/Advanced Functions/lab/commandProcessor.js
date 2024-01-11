function commandProcessor(){
    let string = ''
    let obj = {
        append(e) {string += e},
        removeStart(n) {string = string.substring(n)},
        removeEnd(n) {string = string.substring(0, string.length - n)},
        print() {console.log(string)},
    }
    return obj;
}