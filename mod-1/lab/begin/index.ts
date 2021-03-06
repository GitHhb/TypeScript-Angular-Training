(function () {
    "use strict";

    class RPNCalculator {
        private numberInput: HTMLInputElement;
        private stackElement: HTMLUListElement;
        private stack: number[] = [];

        constructor(private root: Document){
            this.numberInput = <HTMLInputElement> root.getElementById("number");
            this.stackElement = <HTMLUListElement> root.getElementById("stack");

            this.addEventListeners();
            this.numberInput.focus();

        }

        addEventListeners () {
            this.root.getElementById("btnEnter").addEventListener("click",
                () => this.pushAndClearInput() );
            this.root.getElementById("btnAdd").addEventListener("click",
                (function (e) { console.log(e);return this.calculate((x, y) => x + y)}).bind(this) ) ;
            this.root.getElementById("btnSubtract").addEventListener("click",
                () => this.calculate((x, y) => x - y) );
            this.root.getElementById("btnMultiply").addEventListener("click",
                () => this.calculate((x, y) => x * y) );
            this.root.getElementById("btnDivide").addEventListener("click",
                () => this.calculate((x, y) => x / y) );
            this.numberInput.addEventListener("keypress", (e) => this.handleKeypress(e));
        }

        handleKeypress(e: KeyboardEvent) {
            const keyMap = { 
                13: "btnEnter",
                42: "btnMultiply",
                43: "btnAdd",
                45: "btnSubtract",
                47: "btnDivide"
            }
            if (e.keyCode in keyMap) {
                const event: MouseEvent = new MouseEvent('click');
                this.root.getElementById(keyMap[e.keyCode]).dispatchEvent(event);
                e.preventDefault();
            }
        }

        pushAndClearInput () {
            let nr: number = +this.numberInput.value;
            if (! isNaN(nr)) {
                this.stack.push(nr);
                this.displayStack();
            }
            this.numberInput.value = "";
            this.numberInput.focus();
        }

        displayStack () {
            // remove old stack
            while (this.stackElement.hasChildNodes()) {
                this.stackElement.removeChild(this.stackElement.firstChild);
            }

            // show current stack
            for (let i of this.stack) {
                let el = this.root.createElement("li");
                el.textContent = i.toString();
                this.stackElement.appendChild(el);
            }
        }

        nextValues () {
            // pop values
            const val1 = this.stack.pop() || 0;
            const val2 = this.stack.pop() || 0;

            // return values
            return {x: val1, y: val2};
        }

        calculate (fn: Function): void {
            if (this.numberInput.value != "")
                this.pushAndClearInput();
            const {x, y} = this.nextValues();
            // const result = eval(x + calculation + y);
            this.stack.push(fn(x, y));

            this.displayStack();

        }
    }

    new RPNCalculator(document);
}());
