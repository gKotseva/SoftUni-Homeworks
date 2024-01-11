function arenaTier(input){
    let index = 0;
    let command = input[index]

    let gladiators = new Map ()

    while (command !== "Ave Cesar"){
        if (command.includes(' -> ')){
            let [name, technique, skill] = command.split(' -> ')
            if (!gladiators.has(name)){
                gladiators.set(name, new Map())
            }

            if (gladiators.get(name).has(technique) && gladiators.get(name).get(technique) < skill){
                gladiators.get(name).set(technique, Number(skill))
            } else if (!gladiators.get(name).has(technique)){
                gladiators.get(name).set(technique, Number(skill))
            }

        } else {
            let [firstGladiator, secondGladiator] = command.split(' vs ')
            if (gladiators.has(firstGladiator) && gladiators.has(secondGladiator)){
                let techniqueFirstGladiator = gladiators.get(firstGladiator)
                let techniqueSecondGladiator = gladiators.get(secondGladiator)
                let biggerMap = techniqueFirstGladiator.size > techniqueSecondGladiator.size ? techniqueFirstGladiator : techniqueSecondGladiator
                let smallerMap = techniqueFirstGladiator.size > techniqueSecondGladiator.size ? techniqueSecondGladiator : techniqueFirstGladiator
                for (let [techniqueName, skill] of Array.from(biggerMap)){
                    if (smallerMap.has(techniqueName)){
                        if (techniqueFirstGladiator.get(techniqueName) > techniqueSecondGladiator.get(techniqueName)){
                            techniqueSecondGladiator.delete(techniqueName)
                        } else {
                            techniqueFirstGladiator.delete(techniqueName)
                        }
                    }
                }

            }

        }

        index++
        command = input[index]
    }

    let gladiatorPoints = new Map ()

    for (let [gladiatorName, technique] of Array.from(gladiators)){
        let sum = 0;
        for (let [tech, skill] of Array.from(technique)){
            sum += skill
        }

        if (sum != 0){
            gladiatorPoints.set(gladiatorName, sum)
        }
    }

    let sortGladiatorsPoints = Array.from(gladiatorPoints).sort((a,b) => {
        return b[1] - a[1] || a[0].localeCompate(b[0])
    })

    for (let [name, points] of sortGladiatorsPoints){
        console.log(`${name}: ${points} skill`)
        let tech = Array.from(gladiators.get(name)).sort((a,b) => {
            return b[1] - a[1] || a[0].localeCompare(b[0])
        })

        for (let [techName, skillPoints] of tech){
            console.log(`- ${techName} <!> ${skillPoints}`)
        }
    }
}