function constructionCrew(obj){

    if (obj.dizziness === true){
        let requiredWatter = 0.1 * obj.weight * obj.experience
        obj.dizziness = false
        obj.levelOfHydrated += requiredWatter
    }

    return obj

}