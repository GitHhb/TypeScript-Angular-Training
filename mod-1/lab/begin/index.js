(function () {
    "use strict";
    var RPNCalculator = (function () {
        function RPNCalculator(root) {
            this.stack = [];
            this.addEventListeners = function (root) {
                root.getElementById("btnEnter").addEventListener("click", this.pushAndClearInput.bind(this));
            };
            this.pushAndClearInput = function () {
                this.stack.push(this.numberInput.value);
                this.numberInput.value = "";
                var x = document.createElement("li");
                x.appendChild(document.createTextNode(this.stack[0]));
                this.stackElement.appendChild(x);
            };
            this.numberInput = root.getElementById("number");
            this.stackElement = root.getElementById("stack");
            this.numberInput.focus();
            this.addEventListeners(root);
        }
        return RPNCalculator;
    }());
    new RPNCalculator(document);
}());
