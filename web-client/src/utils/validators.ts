export const assertIsCorrectUsername = (value: string) => {
    if(!value) return false; // regexp returned true for empty string

    const expression = /^(?=[a-zA-Z0-9._])(?!.*[_.]{2}).{8,20}/;
    const result: boolean = expression.test(value);

    return result;
}
export const assertIsEmail = (value: string) => {
    const expression = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
    const result: boolean = expression.test(value);

    return result;
}
export const assertIsStrongPassword = (value: string) => {
    const expression = /^(?=.*[A-Z])(?=.*[0-9]).{8,20}$/;
    const result: boolean = expression.test(value);

    return result;
}
