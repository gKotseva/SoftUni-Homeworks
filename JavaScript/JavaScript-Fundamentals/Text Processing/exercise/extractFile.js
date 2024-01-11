function extractFile(path){

    let splitPath = path.split('\\')
    let fileName = String(splitPath.slice(-1))
    let splitFileName = fileName.split(".")
    
    if (splitFileName.length === 2){
        console.log(`File name: ${splitFileName[0]}`)
        console.log(`File extension: ${splitFileName[1]}`)
    } else {
        console.log(`File name: ${splitFileName[0]}.${splitFileName[1]}`)
        console.log(`File extension: ${splitFileName[2]}`)
    }
}