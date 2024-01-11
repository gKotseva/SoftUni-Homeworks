function rectangle(width, height, color){

    let newColor = color.charAt(0).toUpperCase() + color.slice(1)

    let obj = {
        width: width,
        height: height,
        color: newColor,
        calcArea() {
            return this.width * this.height
        }
    }

    return obj;

}