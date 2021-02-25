module.exports = function check(str, bracketsConfig) {
    debugger
    const map = new Map(bracketsConfig);
    const stack = [];

    for (let i = 0; i < str.length; i++) {
        str[i] === map.get(stack[stack.length - 1])
            ? stack.pop()
            : stack.push(str[i]);
    }

    return stack.length === 0;
}
