let arr = [];
class List {

    add(number) {
        arr.push(number);
    }
    remove(value) {
        if (value < arr.length) {
            arr.splice(value, 1);

        }
    }
    get(value) {
        if (value < arr.length) {
            let current = arr[value];
            return current;
        }

    }
    size() {
        arr.sort((a, b) => a - b);
    }

}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));

