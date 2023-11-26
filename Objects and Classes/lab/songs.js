function songs(arr){

    class song {
        constructor(typeList, name, time){
            this.typeList = typeList
            this.name = name
            this.time = time
        }
    }

    let numberOfSongs = arr.shift()
    let typeSong = arr.pop()

    for (let i = 0; i < arr.length; i++){
        let [typeList, name, time] = arr[i].split('_')
        let newSong = new song (typeList, name, time)

        if (typeSong === "all" || typeSong === typeList){
            console.log(name)
        }
    }
}