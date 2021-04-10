export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
        this.name = name;
        this.orbitType = orbitType;
        this.type = type;
        this.operational = false;
        this.launchDate = launchDate;
    }

    shouldShowWarning (){
        if (this.type.toLowerCase === "Space Debris".toLowerCase || this.type === "Space Debris"){
            return true
        } else {
            return false
        }
    }
}
