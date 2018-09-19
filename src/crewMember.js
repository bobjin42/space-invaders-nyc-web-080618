
  let crewMemberId = 0

class CrewMember {
  constructor(position){
    this.id = ++crewMemberId
    this.position = position
    this.currentShip = 'Looking for a Rig'
  }

  engageWarpDrive(){
    if (this.currentShip !== 'Looking for a Rig'){
      return 'something'
    }else{
      return 'had no effect'
    }
  }

  setsInvisibility(){
    if (this.currentShip !== 'Looking for a Rig' && this.position === 'Defender'){
      this.currentShip.cloaked = true
    }else{
      return 'had no effect'
    }
  }

  chargePhasers(){
    if (this.currentShip !== 'Looking for a Rig'){
      return 'something'
    }else{
      return 'had no effect'
    }
  }

}
