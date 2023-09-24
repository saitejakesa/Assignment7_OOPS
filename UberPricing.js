class uber{
    distance;
    timeinmin;
    constructor(distance, timeinmin){
        this.distance=distance;
        this.timeinmin=timeinmin;
    }
    amount(){
        let total=this.distance*3
        return total
    }
    driverAvaiablity(distprice,driver){
        if(driver<10){
            let totdriv=distprice+10
            return totdriv
        }
        else{
            return drivamount
        }
    }
    driverCharge(driverprice){
        let charge=driverprice+this.timeinmin/4
        return charge
    }
    timeTaken(driverCharge){
        if(this.timeinmin>this.distance*5){
            let maxtime=this.distance*5
            let extra=this.timeinmin-maxtime
            let complete=driverCharge+extra*2
            return complete
        }
        else{
            return driverCharge
        }
    }

}

let price=new uber(7,120)
let distprice=price.amount();
let driverprice=price.driverAvaiablity(distprice,9);
let driverCharge=price.driverCharge(driverprice)
let totalAmount=price.timeTaken(driverCharge)

console.log(totalAmount)