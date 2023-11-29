function timeToWalk(steps, stepLength, speed){
    let distanceInMetters = steps * stepLength
    let speedPerSecond = speed / 3.6
    let rest = Math.floor(distanceInMetters / 500) * 60
    let time = distanceInMetters / speedPerSecond + rest
    let hours = Math.floor(time / 3600)
    let minutes = Math.floor(time / 60)
    let seconds = Math.round(time % 60)

    console.log(`${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`)

}