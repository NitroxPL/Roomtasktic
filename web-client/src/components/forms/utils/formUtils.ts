import { Rule } from "antd/es/form";
import { RuleArgs } from "../rules";


export function ruleFromAsserter({ required }: RuleArgs, translatedMessage: string, assserter: ((value: string) => boolean)): Rule {
    return ({
        required,
        message: translatedMessage,
        validator: (_, value: string) => (
            (!required && !value) || assserter(value)
                ? Promise.resolve()
                : Promise.reject()
        ),
    });
}