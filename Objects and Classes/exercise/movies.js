function movies(arr){

    let moviesArr = []

    for (let movie of arr){
        if (movie.includes("addMovie")){
            let split = movie.split(' ')
            split.shift()
            let name = split.join(' ')
            moviesArr.push({name:name})   
        } else {
            if (movie.includes("directedBy")){
                let [name, director] = movie.split(' directedBy ')
                let movieName = moviesArr.find(el => el.name === name)
                if (movieName){
                    movieName.director = director
                }

            } else if (movie.includes("onDate")){
                let [name, date] = movie.split(' onDate ')
                let movieName = moviesArr.find(el => el.name === name)
                if(movieName){
                    movieName.date = date
                }

            }
        }
    }

    for (let movie of moviesArr){
        if (movie.name && movie.director && movie.date){
            console.log(JSON.stringify(movie))
        }
    }

}