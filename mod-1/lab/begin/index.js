(function () {
    "use strict";
    var RPNCalculator = (function () {
        function RPNCalculator(root) {
            this.root = root;
            this.stack = [];
            this.addEventListeners = function () {
                var _this = this;
                this.root.getElementById("btnEnter").addEventListener("click", function () { return _this.pushAndClearInput(); });
            };
            this.pushAndClearInput = function () {
                var nr = +this.numberInput.value;
                if (!isNaN(nr)) {
                    this.stack.push(nr);
                    this.displayStack();
                }
                this.numberInput.value = "";
                this.numberInput.focus();
            };
            this.displayStack = function () {
                // remove old stack
                while (this.stackElement.hasChildNodes()) {
                    this.stackElement.removeChild(this.stackElement.firstChild);
                }
                // show current stack
                for (var _i = 0, _a = this.stack; _i < _a.length; _i++) {
                    var i = _a[_i];
                    var el = this.root.createElement("li");
                    el.appendChild(this.root.createTextNode(i.toString()));
                    this.stackElement.appendChild(el);
                }
            };
            this.numberInput = root.getElementById("number");
            this.stackElement = root.getElementById("stack");
            this.addEventListeners();
            this.numberInput.focus();
        }
        return RPNCalculator;
    }());
    new RPNCalculator(document);
}());
