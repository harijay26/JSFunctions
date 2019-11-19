/* ================= Question - 16 ================ */

let employees = [
    { id: 12, name: 'Davis Zion' },
    { id: 89, name: 'Jerry Ball' },
    { id: 45, name: 'Silver Adam' },
    { id: 23, name: 'Jordan James' }
    ];
  
    // Map function
    const mapFunc = () => {
  
      let employeesId = employees.map( employee => employee.id );
      return employeesId;
    }
  
    console.log(mapFunc());