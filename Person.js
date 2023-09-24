class person{
    name;
    constructor(name){
        this.name=name;  
    }
    introduceName(){
        console.log(`Hi! I am ${this.name}`);
    }
}

// contactDetails
// MaritalDetails
// OccupationDetails

class contactDetails extends person{
    phone;
    email;
    aadharNum;
    constructor(name,phone, email, aadharNum){
        super(name);
        this.phone=phone;
        this.email=email;
        this.aadharNum=aadharNum;
    }
    introducingWithContactDetails(){ 
        console.log(`Hi I am ${this.name} with contact details of Phone Numeber:${this.phone}, EMail:${this.email} and Aaadhar Number ${this.aadharNum}`)
    }
}

class MaritalDetails extends person{
    status;
    constructor(name,status){
        super(name);
        this.status=status
    }
    introduceWithMaritalDetails(){
        console.log(`Hi I am ${this.name} with marrital ${this.status}`);
    }
}

class OccupationDetails extends person{
    occupation;
    salary;
    constructor(name,occupation,salary){
        super(name);
        this.occupation=occupation;
        this.salary=salary;
    }
    introduceWithOccupationDetails(){
        console.log(`Hi I am ${this.name} with Occupation ${this.occupation} and getting sallary of ${this.salary}`);
    }
    remainingAmmount(expenses,debt){
        let remaining=this.salary-expenses-debt
        console.log(`This is the remaining amount after removing expenses and debt ${remaining}`);
    }
}

const contact=new contactDetails("sai","56462652","jfhdsjkhf@email.com","gfrhfgrkr")
contact.introducingWithContactDetails()

const marriage=new MaritalDetails("sai","No")
marriage.introduceWithMaritalDetails()

const occupation=new OccupationDetails("sai","software","1500000")
occupation.introduceWithOccupationDetails()
occupation.remainingAmmount(100000,100000)

