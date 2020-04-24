// Debug Sum of Digits of a Number
function getSumOfDigits(integer) {
    const str = String(integer);
    let sum = 0;
    for (let char of str) {
        sum += +char;
    }
    return sum;
}
//

// left to do: 4960, 23.04.2020


// esreveR
const reverse = function(array) {
    return array.reduceRight((acc, item) => {
        acc.push(item);
        return acc;
    }, [])
}
//

// Fun with lists: length
function length(head) {
    if(head === null) return 0;
    return 1 + length(head.next);
}

// Fun with lists: indexOf
function indexOf(head, value, current) {
    if(head === null) return -1;
    if(head.data === value) return current;
    current++;
    return indexOf(head.next, value, current);
}

// Fun with lists: lastIndexOf
function lastIndexOf(head, value, counter = 0, lastIndex = -1) {
    if(head === null) return lastIndex;
    if(head.data === value) {
        lastIndex = counter;
    }
    counter++;
    return lastIndexOf(head.next, value, counter, lastIndex);
}

// Fun with lists: countIf
function countIf(head, p, matchCounter = 0) {
    if(head===null) return matchCounter;
    if(p(head.data)) {
        matchCounter++;
    }
    return countIf(head.next, p, matchCounter);
}

// Fun with lists: anyMatch + allMatch
function anyMatch(head, p) {
    if(head === null) return false;
    if(p(head.data))return true;
    return anyMatch(head.next, p);
}

function allMatch(head, p) {
    if(head === null) return true;
    if(!p(head.data)) return false;
    return allMatch(head.next, p);
}


// Fun with lists: filter
function Node(data, next = null) {
    this.data = data;
    this.next = next;
}

function filter(head, p, matchList = null, matchListTail = null) {
    if(head === null) return matchList;
    if(p(head.data)) {
        // create linked list
        if(matchList === null) {
            matchList = new Node(head.data);
            matchListTail = matchList;
        } else {
            matchListTail.next = new Node(head.data);
            matchListTail = matchListTail.next;
        }
    }
    return filter(head.next, p, matchList, matchListTail);
}

function filter2(head, p) {
    if(!head) return null;
    if(p(head.data)) {
        return new Node(head.data, filter(head.next, p));
    } else {
        return filter2(head.next, p);
    }
}

// next to do: https://www.codewars.com/kata/58259d9062cfb45e1a00006b/train/javascript
// left to do: 4952, 24.04.2020
