func = require('./functions');

test('Part 2, Test 1', () => {
    binaryNumbers = [
        '00100',
        '11110',
        '10110',
        '10111',
        '10101',
        '01111',
        '00111',
        '11100',
        '10000',
        '11001',
        '00010',
        '01010',
    ];
    expect(func.o2Filter(binaryNumbers)).toBe('10111');
});

test('Part 2, Test 2', () => {
    binaryNumbers = [
        '00100',
        '11110',
        '10110',
        '10111',
        '10101',
        '01111',
        '00111',
        '11100',
        '10000',
        '11001',
        '00010',
        '01010',
    ];
    expect(func.co2Filter(binaryNumbers)).toBe('01010');
});

test('Part 2, Test 3', () => {
    binaryNumbers = [
        '101000110',
        '000111011',
        '111000001',
        '001100111',
        '000000000',
        '110101010'
    ];
    expect(func.o2Filter(binaryNumbers)).toBe('111000001');
});


test('Part 2, Test 4', () => {
    binaryNumbers = [
        '101000110',
        '000111011',
        '111000001',
        '001100111',
        '000000000',
        '110101010'
    ];
    expect(func.co2Filter(binaryNumbers)).toBe('001100111');
});

test('Part 2, Test 5', () => {
    binaryNumbers = [
        '00100',
        '11110',
        '10110',
        '10111',
        '10101',
        '01111',
        '00111',
        '11100',
        '10000',
        '11001',
        '00010',
        '01010',
    ];
    expect(func.lifeSupportRating(binaryNumbers)).toBe(230);
});

test('Part 2, Test 6', () => {
    binaryNumbers = [
        '101000110',
        '000111011',
        '111000001',
        '001100111',
        '000000000',
        '110101010'
    ];
    expect(func.lifeSupportRating(binaryNumbers)).toBe(46247);
});