(function () {
    "use strict";

    class RPNCalculator {
        private numberInput: HTMLInputElement;
        private stackElement: HTMLUListElement;
        private stack: number[] = [];

        constructor(root: Document){
            this.numberInput = <HTMLInputElement> root.getElementById("number");
            this.stackElement = <HTMLUListElement> root.getElementById("stack");

            this.numberInput.focus();
            this.addEventListeners(root);

        }

        addEventListeners = function(root: Document) {
            root.getElementById("btnEnter").addEventListener("click",
                this.pushAndClearInput.bind(this) );

        }

        pushAndClearInput = function() {
            this.stack.push(this.numberInput.value);
            this.numberInput.value = "";
            let x = document.createElement("li");
            x.appendChild(document.createTextNode(this.stack[0]));
            this.stackElement.appendChild(x);
        }
    }

    new RPNCalculator(document);
}());
