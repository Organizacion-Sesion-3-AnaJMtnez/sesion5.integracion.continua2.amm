const mathOperations = require('./calculator'); 

describe("Calculator tests", () => {
    test('adding 1 + 2 should return 10', () => {
      // arrange and act
      var result = mathOperations.sum(1,2)
    
      // assert
      expect(result).toBe(10);
    });
   })