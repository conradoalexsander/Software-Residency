//subtrai dias corretamente
var data = new Date();
console.log(data);
data.setDate(data.getDate() - 60);
console.log(data.toLocaleDateString(data));

//subtrai meses diretamente, não desejado
data.setMonth(data.getMonth() - 17);
console.log(data.toLocaleDateString(data));


Date.isLeapYear = function (year) { 
    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)); 
};

Date.getDaysInMonth = function (year, month) {
    return [31, (Date.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
};

Date.prototype.isLeapYear = function () { 
    return Date.isLeapYear(this.getFullYear()); 
};

Date.prototype.getDaysInMonth = function () { 
    return Date.getDaysInMonth(this.getFullYear(), this.getMonth());
};

Date.prototype.addMonths = function (value) {
    var n = this.getDate();
    this.setDate(1);
    this.setMonth(this.getMonth() + value);
    this.setDate(Math.min(n, this.getDaysInMonth()));
    return this;
};



var data = new Date();
var resultado = data.addMonths(5);

console.log("\n"+resultado);