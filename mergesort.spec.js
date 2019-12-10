describe("Split Array function", function() {
  it("it is able to split an even array into two halves", function() {
    expect(split([1, 2, 3, 4, 5, 6])).toEqual([
      [1, 2, 3],
      [4, 5, 6]
    ]);
  });
  it("it is able to split an odd array into two halves", function() {
    expect(split([1, 2, 3, 4, 5])).toEqual([
      [1, 2, 3],
      [4, 5]
    ]);
  });
});

describe("Merge Array function", function() {
  it("it is able to merge two sorted array into one sorted array", function() {
    expect(merge([1, 5, 6], [2, 3, 4])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe("MergeSort Array function", function() {
  it("it is able to split and merge", function() {
    expect(mergeSort([1, 3, 2, 4, 6, 5])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
