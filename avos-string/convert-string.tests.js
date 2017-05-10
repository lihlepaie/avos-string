describe ('convertAllString', function() {


    it('convert the string into an array', function() {
        assert.equal(true, (['1 for R3.']));
    });

    it('the Price Per Avo', function() {
        // this test will fail - can you fix it?
        assert.equal(true, ("1 for R3, 2 for R7, 3 for R10, 5 for R14.50."));
    });
});




function countAvos(avos) {

    var list = list.split(',');
    var count = [];

    for (var i = 0; i < list.length; i++) {
        console.log(list)
        log(list[i])
    }
    if (list[i].numbersOfAvos('')) {
        count.push([i]);

    }

}
