# parrot-sll

A singly linked list in JavaScript.

## Usage

```
const ParrotSll = require("parrot-sll");

const addressList = ParrotSll();
addressList.add({ name: 'Bruce Lee', street: 'Kung Fu Street 12' });
addressList.add({ name: 'John Snow', street: 'Winterfell 1' });

console.log(addressList.size()) // "2"

console.log(addressList.get(0).name) // "Bruce Lee"
console.log(addressList.get(1).name) // "John Snow"

addressList.remove(0);

console.log(addressList.size()) // "1"

console.log(addressList.get(0).name) // "John Snow"
```

## Methods

- `add(object: any): void` Adds an object to the list
- `size(): number` Returns the size of the list
- `get(index: integer): any` Returns object at given index. If index is out of bounds it returns null.
- `remove(index: integer): any` Removes the object at given index from the list and returns the removed object. If the index is out of bounds it returns null.

## Runtime complexity

- `add`: O(1)
- `size`: O(1)
- `get`: O(n)
- `remove`: O(n)
