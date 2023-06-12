export const assertIsCorrectUsername = (value: string) => {
    if(!value) return false; // regexp returned true for empty string

    const expression = /^(?=[a-zA-Z0-9._])(?!.*[_.]{2}).{8,20}/;
    const result: boolean = expression.test(value);

    return result;
}
