function Employee (name, title, salary, status='full time') {
  this.name = name;
  this.title = title;
  this.salary = salary;
  this.status = status;
  this.printEmployeeForm = function () {
    console.log('name: ' + this.name, 'salary: ' + this.salary, 'status: ' + this.status);
  }
}

let Larry = new Employee('Larry Barry', 'manager', '50,000');
let Frank = new Employee('Frank Smith', 'developer', '40,000');
let Phil = new Employee('Phil', 'accountant', '50,000');
Frank.status = 'contract';
function getEmployees () {
  let employeeArray = new Array;
  employeeArray.push(Larry.printEmployeeForm(), Frank.printEmployeeForm(), Phil.printEmployeeForm());
  return employeeArray;
}
getEmployees();



