describe('Bubble Sort', function () {
    it('handles an empty array', function () {
        expect(bubbleSort([])).toEqual([]);
    });

    it('handles a single element', function () {
        expect(bubbleSort(["bubble"])).toEqual(["bubble"]);
    });

    it('handles an array with multiple elements', function () {
        expect(bubbleSort([3, 5, 1, 2, 4])).toEqual([1, 2, 3, 4, 5]);
    });
});

[3, 5, 1, 2, 4]