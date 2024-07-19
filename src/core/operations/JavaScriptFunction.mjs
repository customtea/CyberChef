/**
 * @author customtea [me@customtea.net]
 * @copyright Crown Copyright 2024
 * @license Apache-2.0
 */

import Operation from "../Operation.mjs";
import OperationError from "../errors/OperationError.mjs";

/**
 * JavaScriptFunction operation
 */
class JavaScriptFunction extends Operation {

    /**
     * JavaScriptFunction constructor
     */
    constructor() {
        super();

        this.name = "JavaScriptFunction";
        this.module = "Other";
        this.description = "Java Script Function";
        this.infoURL = ""; // Usually a Wikipedia link. Remember to remove localisation (i.e. https://wikipedia.org/etc rather than https://en.wikipedia.org/etc)
        this.inputType = "string";
        this.outputType = "string";
        this.args = [
            {
                name: "Code",
                type: "text",
                value: "return input"
            }
        ];
    }

    /**
     * @param {string} input
     * @param {Object[]} args
     * @returns {string}
     */
    run(input, args) {
        const [userCode] = args;
        try {
            const userFunc = new Function("input", userCode);
            const result = userFunc(input);
            if (result !== undefined) {
                return result;
            }
        } catch (error) {
            throw new OperationError("Error: " + error.message);
        }
    }

}

export default JavaScriptFunction;
