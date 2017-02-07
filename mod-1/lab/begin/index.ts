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

        addEventListeners = function() {
            this.root.getElementById("btnEnter").addEventListener("click",
                () => this.pushAndClearInput() );

        }

        pushAndClearInput = function() {
            let nr: number = +this.numberInput.value;
            if (! isNaN(nr)) {
                this.stack.push(nr);
                this.displayStack();
            }
            this.numberInput.value = "";
            this.numberInput.focus();
        }

        displayStack = function() {
            // remove old stack
            while (this.stackElement.hasChildNodes()) {
                this.stackElement.removeChild(this.stackElement.firstChild);
            }

            // show current stack
            for (let i of this.stack) {
                let el = this.root.createElement("li");
                el.appendChild(this.root.createTextNode(i.toString()));
                this.stackElement.appendChild(el);
            }
        }
    }

    new RPNCalculator(document);
}());
