let spaceshipId = 0

class Spaceship {
  constructor(name, crew, phasers, shields, cloaked, warpDrive){
    this.id = ++spaceshipId
    this.name = name
    this.crew = crew
    this.phasers = 5
    this.shields = 4
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.docked = (crew.length === 0) ? true : false
    this.phasersCharge = 'uncharged'

    for (var i = 0; i < this.crew.length; i++) {
      this.crew[i].currentShip = this
    }
  }

}
