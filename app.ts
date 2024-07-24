// interface Bill {
//     name: string;
//     amount: number;
// }

// class BillManagementSystem {
//     private bills: Bill[] = [];
//     private billList: HTMLElement;
//     private totalAmount: HTMLElement;

//     constructor() {
//         this.billList = document.getElementById('billList')!;
//         this.totalAmount = document.getElementById('totalAmount')!;
//         this.attachEventListeners();
//     }

//     private attachEventListeners(): void {
//         const form = document.getElementById('billForm')!;
//         form.addEventListener('submit', (event: Event) => {
//             event.preventDefault();
//             this.addBill();
//         });
//     }

//     private addBill(): void {
//         const billNameInput = <HTMLInputElement>document.getElementById('billName');
//         const billAmountInput = <HTMLInputElement>document.getElementById('billAmount');

//         const billName = billNameInput.value.trim();
//         const billAmount = parseFloat(billAmountInput.value.trim());

//         if (billName && !isNaN(billAmount)) {
//             const newBill: Bill = { name: billName, amount: billAmount };
//             this.bills.push(newBill);
//             this.renderBills();
//             billNameInput.value = '';
//             billAmountInput.value = '';
//         }
//     }

//     private deleteBill(index: number): void {
//         this.bills.splice(index, 1);
//         this.renderBills();
//     }

//     private renderBills(): void {
//         this.billList.innerHTML = '';

//         this.bills.forEach((bill, index) => {
//             const row = document.createElement('tr');

//             const nameCell = document.createElement('td');
//             nameCell.textContent = bill.name;
//             row.appendChild(nameCell);

//             const amountCell = document.createElement('td');
//             amountCell.textContent = bill.amount.toFixed(2);
//             row.appendChild(amountCell);

//             const actionsCell = document.createElement('td');
//             actionsCell.classList.add('actions');
//             const deleteButton = document.createElement('button');
//             deleteButton.textContent = 'Delete';
//             deleteButton.addEventListener('click', () => this.deleteBill(index));
//             actionsCell.appendChild(deleteButton);
//             row.appendChild(actionsCell);

//             this.billList.appendChild(row);
//         });

//         this.updateTotal();
//     }

//     private updateTotal(): void {
//         const total = this.bills.reduce((sum, bill) => sum + bill.amount, 0);
//         this.totalAmount.textContent = total.toFixed(2);
//     }
// }

// document.addEventListener('DOMContentLoaded', () => {
//     new BillManagementSystem();
// });
