function solution() {
    let obj = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };

    return function (input) {
        let [command, element, quantity] = input.split(' ');
        if (command == 'restock') {
            obj[element] += Number(quantity);
            return 'Success';

        } else if (command == 'prepare') {
            let notEnoght = '';
            if (element == 'lemonade') {
                if (obj.carbohydrate >= 10 * quantity && obj.flavour >= 20 * quantity) {
                    obj.carbohydrate -= 10 * quantity;
                    obj.flavour -= 20 * quantity;
                    return 'Success';
                } else {
                    notEnoght = obj.carbohydrate < 10 * quantity ? 'carbohydrate' : 'carbohydrate' ? obj.flavour < 20 * quantity : 'flovour';
                    return `Error: not enough ${notEnoght} in stock`;
                }
            } else if (element == 'apple') {
                if (obj.carbohydrate >= 1 * quantity && obj.flavour >= 2 * quantity) {
                    obj.carbohydrate -= 1 * quantity;
                    obj.flavour -= 2 * quantity;
                    return 'Success';
                } else {
                    otEnoght = obj.carbohydrate < 1 * quantity ? 'carbohydrate' : 'carbohydrate' ? obj.flavour < 2 * quantity : 'flovour';
                    return `Error: not enough ${notEnoght} in stock`;
                }
            } else if (element == 'burger') {
                if (obj.carbohydrate >= 5 * quantity && obj.flavour >= 3 * quantity && obj.fat >= 7 * quantity) {
                    obj.carbohydrate -= 5 * quantity;
                    obj.flavour -= 3 * quantity;
                    obj.fat -= 7 * quantity;
                    return 'Success';
                } else {
                    notEnoght = obj.carbohydrate < 5 * quantity ? 'carbohydrate' : 'carbohydrate' ? obj.flavour < 3 * quantity : 'flovour' ? obj.fat < 7 * quantity : 'fat';
                    return `Error: not enough ${notEnoght} in stock`;
                }
            } else if (element == 'eggs') {
                if (obj.protein >= 5 * quantity && obj.fat >= 1 * quantity && obj.flavour >= 1 * quantity) {
                    obj.protein -= 5 * quantity;
                    obj.flavour -= 1 * quantity;
                    obj.fat -= 1 * quantity;
                    return 'Success';
                } else {
                    notEnoght = obj.protein < 5 * quantity ? 'protein' : 'protein' ? obj.flavour < 3 * quantity : 'flovour' ? obj.fat < 7 * quantity : 'fat';
                    return `Error: not enough ${notEnoght} in stock`;
                }
            } else if (element == 'turkey') {
                if (obj.protein >= 10 * quantity && obj.fat >= 10 * quantity && obj.flavour >= 10 * quantity && obj.carbohydrate >= 10*quantity) {
                    obj.carbohydrate -= 10 * quantity;
                    obj.flavour -= 10 * quantity;
                    obj.fat -= 10 * quantity;
                    obj.protein -= 10 * quantity;
                    return 'Success';
                } else {
                    notEnoght = obj.protein < 10 * quantity ? 'protein' : 'protein' ? obj.flavour < 10 * quantity : 'flovour' ? obj.fat < 10 * quantity : 'fat' ? obj.carbohydrate < 10 : 'carbohydrate';
                    return `Error: not enough ${notEnoght} in stock`;
                }
            }


        }
        else {
            
            return `protein=${obj.protein} carbohydrate=${obj.carbohydrate} fat=${obj.fat} flavour=${obj.flavour}`
        }

    }
}





let manager = solution();
// console.log(manager("restock flavour 50")); // Success 
// console.log(manager("prepare lemonade 4")); // Success 
// console.log(manager("restock carbohydrate 10")); // Success 
// console.log(manager("restock flavour 10")); // Success 
// console.log(manager("prepare apple 1")); // Success 
// console.log(manager("restock fat 10")); // Success 
// console.log(manager("prepare burger 1")); // Success 
// console.log(manager("report")); // Success 

console.log(manager("prepare turkey 1")); // Success 
console.log(manager("restock protein 10")); // Success 
console.log(manager("prepare turkey 1")); // Success 
console.log(manager("restock carbohydrate 10")); // Success 
console.log(manager("prepare turkey 1")); // Success 
console.log(manager("restock fat 10")); // Success 
console.log(manager("prepare turkey 1")); // Success 
console.log(manager("restock flavour 10")); // Success 
console.log(manager("prepare turkey 1")); // Success 
console.log(manager("report")); // Success 
