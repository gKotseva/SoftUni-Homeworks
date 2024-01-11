function heroes(){
    let health = 100
    let mana = 100

    let create = {
        fighter: (name) => {
            return (obj = {
                name,
                health,
                stamina: mana,
                fight() {
                    this.stamina--
                    console.log(`${name} slashes at the foe!`)
                }
            })
    
        },
        mage: (name) => {
            return (obj = {
                name,
                health,
                mana: mana,
                cast(spell){
                    this.mana--
                    console.log(`${name} cast ${spell}`)
                }
            })
        }
    }

    return create

}