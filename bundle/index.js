import { Parser, Interpreter, errors, utils } from '@syuilo/aiscript';

window.aiscript_run = async (input) => {
    let result = '';
    try {
        const interpreter = new Interpreter({}, {
            out(value) {
                result += utils.reprValue(value);
                result += '\n';
            },
            err(e) {
                result += `${e.name}: ${e.message}`;
            },
        });
        const script = Parser.parse(input);
        await interpreter.exec(script);
    } catch (e) {
        if (e instanceof errors.AiScriptError) {
            return `${e.name}: ${e.message}`;
        }
        throw e;
    }
    return result;
};
