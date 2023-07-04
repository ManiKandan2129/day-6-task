class uber{
    constructor(place,km){
        this.place = place;
        this.km = km;
    }
    uberkm(){
        if (this.km <= 20){
            return " The price for the ride is Rs:"+this.km*80;
        } else if( this.km>20 && this.km<=100) {
            return " The price for the ride is Rs:"+this.km*60;
        } else if(this.km>100) {
            return " The price for the ride is Rs:"+this.km*50;
        }
    }
    uberplace(){
        return "place:"+this.place;
    }
}

let ride1 = new uber("ngl",18);
console.log(ride1.uberplace(), ride1.uberkm());