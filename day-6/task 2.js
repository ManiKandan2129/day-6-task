class circle{
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }
    getRadius(){
        return "The radius of the circle is " + this.radius;
    }
    setRadius(radi){
        this.Radius = radi;
    }
    getColor(){
        return "The color of the circle is " + this.color;
    }
    setColor(favcolor){
        this.color = favcolor;
    }
    getArea(){
        let pi = 3.14159;
        return "The area of the circle is " + pi*this.radius*this.radius;
    }
    getCircumference(){
        let pi = 3.14159;
        return "The circumference of the circle is " + 2*pi*this.radius;
    }
}

let data1 = new circle(10,"red");
console.log(data1.getRadius());
console.log(data1.getColor());
console.log(data1.getArea());
console.log(data1.getCircumference());