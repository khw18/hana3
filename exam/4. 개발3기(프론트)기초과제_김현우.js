import assert from 'assert';

class Collection {
    #arr = [];

    constructor() {}

    get _arr() {
        return this.#arr;
    }

    push(value) {
        this.#arr.push(value);
        return this;
    }

    peek() {
        return this.#arr[this.#arr.length - 1];
    }

    poll() {
        return this.#arr.shift();
    }

    clear() {
        this.#arr = [];
    }

    toArray() {
        return [...this.#arr];
    }

    remove() {
        this.#arr.shift();
    }

    get isEmpty() {
        return this.#arr.length === 0;
    }

    get size() {
        return this.#arr.length;
    }
}

class Stack extends Collection {
    pop() {
        return this._arr.pop();
    }
}

class Queue extends Collection {
    enqueue(value) {
        this.push(value);
        return this;
    }

    dequeue() {
        return this._arr.shift();
    }
}

// Testing the code
const stack = new Stack();
stack.push(1).push(2).push(3).push(5);
assert.deepStrictEqual(stack.toArray(), [1, 2, 3, 5]);
stack.pop();
assert.strictEqual(stack.peek(), 3);
stack.remove();
assert.strictEqual(stack.poll(), 2);
assert.deepStrictEqual(stack.toArray(), [3]);

const queue = new Queue();
queue.enqueue(1).enqueue(3).enqueue(5);
queue.dequeue();
assert.deepStrictEqual(queue.toArray(), [3, 5]);
assert.strictEqual(queue.poll(), 3);
assert.deepStrictEqual(queue.toArray(), [5]);

if (!stack.isEmpty) stack.clear();
if (queue.size) queue.clear();
assert.deepStrictEqual(stack.toArray(), []);
assert.deepStrictEqual(queue.toArray(), []);