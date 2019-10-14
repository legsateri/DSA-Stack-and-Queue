class _Node {
    constructor(data, next) {
        this.data = data,
            this.next = next
    }
}

// Create a stack class
class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null)
            return this.top
        }

        const node = new _Node(data, this.top)
        this.top = node
    }

    pop() {
        if (this.top === null) {
            return null;
        }
        const node = this.top
        this.top = node.next
        return node.data
    }
}

function main() {
    const starTrek = new Stack()

    starTrek.push('Kirk')
    starTrek.push('Spock')
    starTrek.push('McCoy')
    starTrek.push('Scotty')

    // Useful methods for a stack
    function peek(stack) {
        (stack.top === null)
            ? console.log('Stack is empty')
            : console.log(stack.top.data)
    }
    peek(starTrek)

    function isEmpty(stack) {
        (stack.top === null)
            ? console.log(true)
            : console.log(false)
    }
    isEmpty(starTrek)

    function display(stack) {
        let node = stack.top
        while (node !== null) {
            console.log(node.data)
            node = node.next
        }
    }
    display(starTrek)

    starTrek.pop()

    display(starTrek)
}
main()

// Check for palindromes using a stack
function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    
    let stack = new Stack()

    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]);
    }

    for (let j = 0; j < s.length; j++) {
        if (stack.pop() !== s[j]) {
            return false
        }
    }
    return true;
}

console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));

// Matching parentheses in an expression
function matchParentheses(exp) {
    const stack = new Stack()

    for (let i = 0; i < exp.length; i++) {
        if (exp[i] === '(') {
            stack.push(exp[i])
        }
        else if (exp[i] === ')') {
            if (stack.pop() !== '(') {
                return false
            }
        }
    }
    if (stack.pop() === '(') {
        return false
    }

    return true
}

console.log(matchParentheses('()'))
console.log(matchParentheses('(this) is a (test)'))
console.log(matchParentheses('(()))'))
console.log(matchParentheses('(this) is a test)'))

// Sort stack
function sortStack(arr) {
    const stack = new Stack()
    const tempStack = new Stack()

    for (let i = 0; i < arr.length; i++) {
        stack.push(arr[i])
    }

    while (stack.top !== null) {
        let temp = stack.pop()

        while ((tempStack.top !== null) && (tempStack.top.data < temp)) {
            stack.push(tempStack.pop())
        }
        tempStack.push(temp)
    }

    let sortedArr = []
    while (tempStack.top !== null) {
        sortedArr.push(tempStack.pop())
    }

    return sortedArr
}

console.log(sortStack([3, 5, 1, 4, 2, 6]))