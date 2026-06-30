export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(employeesListArg) {
      return Object.keys(employeesListArg).length;
    },
  };
}
