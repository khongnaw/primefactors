
/*global primeFactors*/

describe("Prime Factors", function() {

  it("should be able to find the largest prime factor of 2", function() {
    expect(primeFactors(2)).toEqual(2);
  });

  it("should be able to find the largest prime factor of 10", function() {
    expect(primeFactors(10)).toEqual(5);

  });
  it("should be able to find the largest prime factor of 239", function() {

    expect(primeFactors(239)).toEqual(239);
  });

});


