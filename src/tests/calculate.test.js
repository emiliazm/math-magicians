import calculate from "./mocks/calculate";

it('AC button is clicked', () => {
    const object = {
        total: 2,
        next: 2,
        operation: '+'
    }
    const buttonName = 'AC';
    const result = calculate(object, buttonName);
    expect(result).toStrictEqual({total: null, next: null, operation: null})
})

it('=', () => {
    const object = {
        total: 2,
        next: 2,
        operation: '+',
    }
    const buttonName = '=';
    const result = calculate(object, buttonName)
    expect(result).toStrictEqual({total: '4', next: null, operation: null,})
})