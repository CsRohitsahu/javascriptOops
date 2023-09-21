class Temperature{
    constructor(){
        this._celsius=0
        this._fahrenheit = -2;
    }
    set setCelsius(c){
        if (typeof c === 'number') {
            this._celsius = c;
            this._fahrenheit = (c * 9 / 5) + 32;
          } else {
            throw new Error('Invalid temperature value. Please provide a numeric value.');
          }

    }

    set setFahrenheit(f){
        if (typeof f === 'number') {
            this._fahrenheit = f;
            this._celsius = (f - 32) * 5 / 9;
          } else {
            throw new Error('Invalid temperature value. Please provide a numeric value.');
          }

    }

    get getCelsius(){
        return this._celsius;
    }
     get getFahrenheit(){
        return this._fahrenheit;
     }
}

const temperature =new Temperature();

console.log(`Initial Celsius:${temperature.getCelsius}°C`);
console.log(`Initial Fahrenheit:${temperature.getFahrenheit}°F`);

temperature.setCelsius=25;
console.log(` Celsius:${temperature.getCelsius}°C`);
console.log(` Fahrenheit:${temperature.getFahrenheit}°F`);

temperature.setFahrenheit=68;
console.log(` Celsius:${temperature.getCelsius}°C`);
console.log(` Fahrenheit:${temperature.getFahrenheit}°F`);




