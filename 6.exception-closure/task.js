// Task #1

function parseCount(val) {
    let num = Number.parseInt(val, 10);
    if (isNaN(num)) {
        throw new Error('Невалидное значение')
    }
    return num;
}
  
function validateCount(pars) {
    try {
        return parseCount(pars);
    } catch (err) {
        return err;
    }
}
  
// Task #2
  
class Triangle {
    constructor(a, b, c) {
        if (((a + b) <= c) || ((a + c) <= b) || ((c + b) <= a)) {
            throw new Error('Треугольник с такими сторонами не существует')
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    
    getPerimeter() {
        return this.a + this.b + this.c;
    }
    
    getArea() {
        const halfOfP = this.getPerimeter() / 2;
        return +(Math.round(Math.sqrt(halfOfP * (halfOfP - this.a) * (halfOfP - this.b) * (halfOfP - this.c)) + "e+3") + "e-3");
        //return parseFloat(Math.sqrt(halfOfP * (halfOfP - this.a) * (halfOfP - this.b) * (halfOfP - this.c)).toFixed(3));
    }
}
  
function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (err) {
        const newTriangle = new Object();
        newTriangle.getPerimeter = function() { return 'Ошибка! Треугольник не существует'; }
        newTriangle.getArea = function() { return 'Ошибка! Треугольник не существует'; }
        return newTriangle;
    }
}