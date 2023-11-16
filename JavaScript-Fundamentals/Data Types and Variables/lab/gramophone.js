function gramophone(band, album, song){
    let bandLength = band.length
    let albumLength = album.length
    let songLength = song.length

    let songDuration = (albumLength * bandLength) * songLength / 2
    let rotation = songDuration / 2.5

    console.log(`The plate was rotated ${Math.ceil(rotation)} times.`)

}