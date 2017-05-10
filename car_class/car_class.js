
class Car {

    constructor(_name, _model) {
        this._name = _name;
        this._model = _model;
    }
    name() {
        
        return this._name ;
    }
    model(){
        return this._model
    }
    numOfDoors(){
        if ( this._name === 'Porshe'|| this._name=== 'Koenigsegg')
        {
            return 2;
        }
        else
        {
            return 4;
        }
    }
    drive(bool){
        if (bool === true)
        {
             return true;
        }
        else
        {
            return false;
        }
     
    }
    speed(){
    if (drive(bool)===true){
      if (this._model==='Truck')
      {
        return '77km/h'
      }
      else
      {
        return '250km/h';
      }
  
    }
    else{

        return '0km/h';
    }
      
    }
    isSaloon()
    {
       if(this._model.toLowerCase()==='truck'){
        return false;
       }
       else
       {
         return true;
       }
    }
    numOfWheels(){
       if(this._model.toLowerCase()==='truck'){
        return 8;
       }
       else
       {
         return 4;
       }
    }
}

module.exports = Car;