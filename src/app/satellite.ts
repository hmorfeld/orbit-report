export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
        this.name = "name";
        this.orbitType = "orbit type";
        this.type = "type";
        this.operational = false;
        this.launchDate = "date";
    }

    shouldShowWarning (){
        if (this.type.toLowerCase === "Space Debris".toLowerCase){
            return true
        } else {
            return false
        }
    }
}
