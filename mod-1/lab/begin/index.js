(function () {
    "use strict";
    var RPNCalculator = (function () {
        function RPNCalculator(root) {
            this.root = root;
            this.stack = [];
            this.numberInput = root.getElementById("number");
            this.stackElement = root.getElementById("stack");
            this.addEventListeners();
            this.numberInput.focus();
        }
        RPNCalculator.prototype.addEventListeners = function () {
            var _this = this;
            this.root.getElementById("btnEnter").addEventListener("click", function () { return _this.pushAndClearInput(); });
            this.root.getElementById("btnAdd").addEventListener("click", function () { this.calculate(function (x, y) { return x + y; }).bind(this); });
            this.root.getElementById("btnSubtract").addEventListener("click", function () { return _this.calculate(function (x, y) { return x - y; }); });
            this.root.getElementById("btnMultiply").addEventListener("click", function () { return _this.calculate(function (x, y) { return x * y; }); });
            this.root.getElementById("btnDivide").addEventListener("click", function () { return _this.calculate(function (x, y) { return x / y; }); });
        };
        RPNCalculator.prototype.pushAndClearInput = function () {
            var nr = +this.numberInput.value;
            if (!isNaN(nr)) {
                this.stack.push(nr);
                this.displayStack();
            }
            this.numberInput.value = "";
            this.numberInput.focus();
        };
        RPNCalculator.prototype.displayStack = function () {
            // remove old stack
            while (this.stackElement.hasChildNodes()) {
                this.stackElement.removeChild(this.stackElement.firstChild);
            }
            // show current stack
            for (var _i = 0, _a = this.stack; _i < _a.length; _i++) {
                var i = _a[_i];
                var el = this.root.createElement("li");
                el.textContent = i.toString();
                this.stackElement.appendChild(el);
            }
        };
        RPNCalculator.prototype.nextValues = function () {
            // pop values
            var val1 = this.stack.pop() || 0;
            var val2 = this.stack.pop() || 0;
            // return values
            return { x: val1, y: val2 };
        };
        RPNCalculator.prototype.calculate = function (fn) {
            if (this.numberInput.value != "")
                this.pushAndClearInput();
            var _a = this.nextValues(), x = _a.x, y = _a.y;
            // const result = eval(x + calculation + y);
            this.stack.push(fn(x, y));
            this.displayStack();
        };
        return RPNCalculator;
    }());
    new RPNCalculator(document);
}());
