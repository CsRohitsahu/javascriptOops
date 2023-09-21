class Shape {
    area() {
    console.log("area mehthod is not implemented");

    }
  
    perimeter() {
      console.log("perimeter method is not implemented");
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    area() {
      return Math.PI * this.radius ** 2;
    }
  
    perimeter() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  
    perimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  class Triangle extends Shape {
    constructor(side1, side2, side3) {
      super();
      this.side1 = side1;
      this.side2 = side2;
      this.side3 = side3;
    }
  
    area() {
      const s = (this.side1 + this.side2 + this.side3) / 2;
      return Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
    }
  
    perimeter() {
      return this.side1 + this.side2 + this.side3;
    }
  }

  const circle = new Circle(5);
  console.log(`Circle - Area: ${circle.area()}, Perimeter: ${circle.perimeter()}`);
  
  const rectangle = new Rectangle(4, 5);
  console.log(`Rectangle - Area: ${rectangle.area()}, Perimeter: ${rectangle.perimeter()}`);
  
  const triangle = new Triangle(3, 4, 5);
  console.log(`Triangle - Area: ${triangle.area()}, Perimeter: ${triangle.perimeter()}`);
  