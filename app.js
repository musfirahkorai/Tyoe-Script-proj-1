var BillManagementSystem = /** @class */ (function () {
    function BillManagementSystem() {
        this.bills = [];
        this.billList = document.getElementById('billList');
        this.totalAmount = document.getElementById('totalAmount');
        this.attachEventListeners();
    }
    BillManagementSystem.prototype.attachEventListeners = function () {
        var _this = this;
        var form = document.getElementById('billForm');
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            _this.addBill();
        });
    };
    BillManagementSystem.prototype.addBill = function () {
        var billNameInput = document.getElementById('billName');
        var billAmountInput = document.getElementById('billAmount');
        var billName = billNameInput.value.trim();
        var billAmount = parseFloat(billAmountInput.value.trim());
        if (billName && !isNaN(billAmount)) {
            var newBill = { name: billName, amount: billAmount };
            this.bills.push(newBill);
            this.renderBills();
            billNameInput.value = '';
            billAmountInput.value = '';
        }
    };
    BillManagementSystem.prototype.deleteBill = function (index) {
        this.bills.splice(index, 1);
        this.renderBills();
    };
    BillManagementSystem.prototype.renderBills = function () {
        var _this = this;
        this.billList.innerHTML = '';
        this.bills.forEach(function (bill, index) {
            var row = document.createElement('tr');
            var nameCell = document.createElement('td');
            nameCell.textContent = bill.name;
            row.appendChild(nameCell);
            var amountCell = document.createElement('td');
            amountCell.textContent = bill.amount.toFixed(2);
            row.appendChild(amountCell);
            var actionsCell = document.createElement('td');
            actionsCell.classList.add('actions');
            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function () { return _this.deleteBill(index); });
            actionsCell.appendChild(deleteButton);
            row.appendChild(actionsCell);
            _this.billList.appendChild(row);
        });
        this.updateTotal();
    };
    BillManagementSystem.prototype.updateTotal = function () {
        var total = this.bills.reduce(function (sum, bill) { return sum + bill.amount; }, 0);
        this.totalAmount.textContent = total.toFixed(2);
    };
    return BillManagementSystem;
}());
document.addEventListener('DOMContentLoaded', function () {
    new BillManagementSystem();
});
