

function solve(...params) {
    let result = [];
    let occurences = {};
    return function () {
        for (let i = 0; i < params.length; i++) {

            result.push((`${typeof params[i]}: ${params[i]}`));

        }
        params.forEach(el => {
            let type = typeof (el);
            occurences[type] = occurences[type] !== undefined ? occurences[type]++ : 1;
        })
        Object.keys(occurences).sort((a, b) => occurences[b] - occurences[a]).forEach(key => result.push(`${key} = ${occurences[key]}`));
        console.log(occurences);
        return result.join('\n');
    }
}

let output = solve('cat', 42, function () { console.log('Hello world!'); })
console.log(output());