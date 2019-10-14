class _Node {
    constructor(value, next) {
        this.value = value,
            this.next = next
    }
}

// Create a queue using Singly linked list
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(value) {
        const node = new _Node(value);

        if (this.first === null) {
            this.first = node
        }

        if (this.last) {
            this.last.next = node
        }

        this.last = node
    }

    dequeue() {
        if (this.first === null) {
            return;
        }

        const node = this.first
        this.first = this.first.next

        if (node === this.last) {
            this.last = null;
        }

        return node.value;
    }
}

function peek(queue) {
    (queue.first === null)
        ? console.log('Queue is empty')
        : console.log(queue.first.value)
}

function isEmpty(queue) {
    (queue.first === null)
        ? console.log(true)
        : console.log(false)
}

function display(queue) {
    let node = queue.first
    while (node.next) {
        console.log(node.value)
        node = node.next
    }
    console.log(queue.last.value)
}

function starTrekQ() {
    const starTrek = new Queue()

    starTrek.enqueue('Kirk')
    starTrek.enqueue('Spock')
    starTrek.enqueue('Uhura')
    starTrek.dequeue()
    starTrek.dequeue()

    console.log(JSON.stringify(starTrek))

    peek(starTrek)
    isEmpty(starTrek)
    display(starTrek)
}

starTrekQ()

// Create a queue class using Doubly linked List
class _NodeDoubly {
    constructor(value, prev, next) {
        this.value = value
        this.prev = prev
        this.next = next
    }
}

class QueueDoubly {
    constructor() {
        this.first = null
        this.last = null
    }

    enqueue(value) {
        const node = new _NodeDoubly(value, this.last)

        if (this.first === null) {
            this.first = node
        }
        if (this.last) {
            this.last.next = node;
            this.first.prev = null
        }

        this.last = node;
    }
}

function doublyDisplay(queue) {
    let node = queue.first
    while (node.next) {
        console.log(node.value, node.prev)
        node = node.next
    }
    console.log(queue.last.value, queue.last.prev)
}

function starTrekQ() {
    const starTrek = new QueueDoubly()

    starTrek.enqueue('Kirk')
    starTrek.enqueue('Spock')
    starTrek.enqueue('Uhura')
    starTrek.dequeue()
    starTrek.dequeue()
    starTrek.enqueue('Sulu')
    starTrek.enqueue('Checkov')

    console.log(JSON.stringify(starTrek))

    peek(starTrek)
    isEmpty(starTrek)
    doublyDisplay(starTrek)
}

starTrekQ()