module.exports = function repeater(str, options) {

    let parameters = {
        repeat: 1,
        separator: '+',
        addition: '',
        additionRepeat: 1,
        additionSeparator: '|'
    };

    let configurers = {
        repeatTimes: (value) => {
            if (value && parseInt(value) != NaN) {
                parameters.repeat = value;
            }
        },
        separator: (symbol) => {
            if (symbol && typeof symbol == 'string') {
                parameters.separator = symbol;
            }
        },
        addition: (str) => {
            parameters.addition = `${str}`;
        },
        additionRepeatTimes: (value) => {
            if (value && parseInt(value) != NaN) {
                parameters.additionRepeat = value;
            }
        },
        additionSeparator: (symbol) => {
            if (symbol && typeof symbol == 'string') {
                parameters.additionSeparator = symbol;
            }
        }
    };

    for (let option in options) {
        if (configurers[option]) {
            configurers[option](options[option]);
        }
    }

    let result = [];

    for (let i = 0; i < parameters.repeat; ++i) {
        result.push(`${str}`);

        for (let j = 0; j < parameters.additionRepeat; ++j) {
            result.push(parameters.addition);
            if (j != parameters.additionRepeat - 1) {
                result.push(parameters.additionSeparator);
            }
        }

        if (i != parameters.repeat - 1) {
            result.push(parameters.separator);
        }
    }

    return result.join('');
};