
class que {

    constructor() {
        this.items = [];
    }


    enque(element) {

        this.items.push(element);
    }

    deque() {

        if (this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }


    peek() {
        if (this.isEmpty())
            return "No elements in que";
        return this.items[0];
    }

    isEmpty() {

        return this.items.length == 0;
    }

    printque() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }



}
//------------------------------
var que = new que();
//------------------------------
console.log(que.deque());
//------------------------------
console.log(que.isEmpty());
//-----------------------------
que.enque(10);
que.enque(20);
que.enque(30);
que.enque(40);
que.enque(50);
que.enque(60);
//------------------------------
console.log(que.peek());
console.log(que.deque());
console.log(que.peek());
console.log(que.deque());
console.log(que.printque());