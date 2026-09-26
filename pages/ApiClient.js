class ApiClient {
  constructor(request, baseURL) {
    this.request = request;
    this.apiBaseUrl = baseURL;
  }

  async createEmployeeSnapshot(employee) {
    return this.request.post(`${this.apiBaseUrl}/users`, {
      data: {
        name: employee.fullName,
        employeeId: employee.employeeId,
        jobTitle: employee.jobTitle,
        employmentStatus: employee.employmentStatus
      }
    });
  }

  async updateEmployeeSnapshot(id, employee) {
    return this.request.patch(`${this.apiBaseUrl}/users/${id}`, {
      data: {
        id,
        name: employee.fullName,
        employeeId: employee.employeeId,
        jobTitle: employee.jobTitle,
        employmentStatus: employee.employmentStatus
      }
    });
  }

  async deleteEmployeeSnapshot(id) {
    return this.request.delete(`${this.apiBaseUrl}/users/${id}`);
  }
}

module.exports = { ApiClient };
