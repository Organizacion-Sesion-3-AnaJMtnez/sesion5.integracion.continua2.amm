const mathOperations = {
    ispar: function (num) {
        if(num % 2 === 0) {
        return true; // es par
        }
        else {
        return false; // es impar
        }
    },

    sum: function(a,b) {
        return a + b;
    },
    
    diff: function(a,b) {
        return a - b;
    },
    product: function(a,b) {
        return a * b
    }
 }
   module.exports = mathOperations