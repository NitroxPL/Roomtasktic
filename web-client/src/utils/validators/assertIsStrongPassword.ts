export const assertIsStrongPassword = (value: string) => {
    const expression = /^(?=.*[A-Z])(?=.*[0-9]).{8,20}$/;
    const result: boolean = expression.test(value);

    return result;
}
