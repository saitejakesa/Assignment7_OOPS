class Circle {
    constructor(radius = 1.0, color = 'red') {
        this.radius = radius;
        this.color = color;
    }
    logCircle(){
        console.log("Nothing");
    }
    logCircleWithRadius(radius){
        console.log("Radius is "+radius);
    }
    logCircleWithRadiusAndColor(radius, color){
        console.log("Radius is "+radius+", color is "+color);
    }
    getRadius(){
        console.log("Radius is "+this.radius)
    }
    setRadius(radius){
        this.radius=radius;
        console.log(this.radius)
    }
    getColor(){
        console.log("color is "+this.color);
    }
    setColor(color){
        this.color=color;
        console.log(this.color)
    }
    logToString(item){
        console.log(item.toString());
    } 
    getArea(){
        let area=Math.PI*this.radius*this.radius;
        return area;
    }
    getCircumference(){
        let circumference=2*Math.PI*this.radius;
        return circumference
    } 
}

let circle=new Circle()
circle.logCircle();
circle.logCircleWithRadius(5);
circle.logCircleWithRadiusAndColor(5, 'blue');
circle.getRadius();
circle.setRadius(2.0);
circle.getColor();
circle.setColor('green');
circle.logToString('test');
console.log(circle.getArea());
console.log(circle.getCircumference());

