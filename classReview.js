class vehicle {
    constructor(newName)

}




someObject.someFunction();
let vehicleInstance = new vehicle("warthog");
vehicleInstance.somefunction();

console.log(vehicleInstance.name);




class Motorbike extends vehicle{
    coonstructor(newWheelCount, newName){
        super(newName);

        this.wheelCount = newWheelCount;
    }
}


class Sidecar{
    constructor(){
        this.passangerCount = 1;

    }
}

class MotorbikeWithSidecar extends Motorbike {
    constructor(newWheelCount, newName){
        super (newWheelcount, newName);
        this.sideCar = new Sidecar();

    }
}

throw new Error ("some error")
class SomeCustomError extends Error{}
throw new SomeCustomError
let MotorbikeInstance = new Motorbike(3, "Harley Davidson");
console.log (`i am a ${MotorbikeInstance.name} and I have ${MotorbikeInstance.wheelCount} wheels.`)

let MotorbikeWithSidecar = new MotorbikeWithSidecar(3, "some Fancy Motorbike");
console.log("This motorbike has passangerer count of: " + MotorbikeWithSidecar.sideCar)