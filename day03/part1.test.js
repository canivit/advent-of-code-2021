func = require('./functions');

test('Part 1, Test 1', () => {
    binaryNumbers = [
        '000',
        '111',
        '010',
        '101',
        '110',
        '110',
        '001'
    ];
    expect(func.significantBits(binaryNumbers)).toBe('110');
});

test('Part 1, Test 2', () => {
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
    expect(func.significantBits(binaryNumbers)).toBe('10110');
});

test('Part 1, Test 3', () => {
    binaryNumbers = [
        '101000110',
        '000111011',
        '111000001',
        '001100111',
        '000000000'
    ];
    expect(func.significantBits(binaryNumbers)).toBe('001000011');
});

test('Part 1, Test 4', () => {
    binaryNumbers = [
        '000',
        '111',
        '010',
        '101',
        '110',
        '110',
        '001'
    ];
    expect(func.powerConsumption(binaryNumbers)).toBe(6);
});

test('Part 1, Test 5', () => {
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
    expect(func.powerConsumption(binaryNumbers)).toBe(198);
});

test('Part 1, Test 6', () => {
    binaryNumbers = [
        '101000110',
        '000111011',
        '111000001',
        '001100111',
        '000000000'
    ];
    expect(func.powerConsumption(binaryNumbers)).toBe(29748);
});