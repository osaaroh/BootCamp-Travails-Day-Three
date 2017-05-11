class Car {

    constructor(name,model,type) {

        this.name = name;
        this.type = type;
        this.model = model;
        this.isSaloon = true;
        this.numOfWheels = 4;
        this.speed = '77 km/h';
        this.numOfDoors = 4;

        if(name === undefined){

            this.name = "General";
        }

        if(model === undefined){

            this.model = "GM";
        }

        if(this.type === "trailer"){

            this.numOfWheels = 8;
            this.isSaloon = false;
            this.speed = '0 km/h';

        }

        if(this.name === "Porshe" || this.name === "Koenigsegg"){
            this.numOfDoors = 2;
        }
    }

    drive(gear){

        if(gear === 5){

            this.speed  = '250 km/h';
        }
        else if(gear=== 7){

            this.speed  = '77 km/h';
        }
        return new Car()

    }

}
module.exports = Car;
