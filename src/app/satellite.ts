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
        if (this.type.toLowerCase === "Space Debris".toLowerCase || this.type === "Space Debris"){
            return true
        } else {
            return false
        }
    }
}
// Questions: 
// Local host not working
//"app-orbit-list" not a known element; how do I verify that it is part of the module?
//Can't bind to 'satellites' since it isn't a known property of 'app-orbit-list'. ^ same as above.
//not really understanding how to use shouldShowWaring  to add the warning CSS class to the <td> containing the satellite's type
// An argument for "name" was not provided in new satellite? But it was? 