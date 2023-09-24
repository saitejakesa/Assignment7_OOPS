class Movie{
constructor(title,studio,rating){
	this.title=title;
	this.studio=studio;
	this.rating=rating;
}
getPG(){
    let arr=[]
    if(this.rating.includes("PG")){
        arr.push(this.title)
        return arr
    }
}
}
let a =new Movie("Casino Royale", "Eon Productions", "PG13")

console.log(a.getPG())