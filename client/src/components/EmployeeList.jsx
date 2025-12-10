import React from 'react';

const EmployeeList = ({ employees, onEdit, onDelete }) => {
    return (
        <div className="list-container">
            <h2>Employee List</h2>
            {employees.length === 0 ? (
                <p>No employees found.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Department</th>
                            <th>Salary</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee._id}>
                                <td>{employee.name}</td>
                                <td>{employee.role}</td>
                                <td>{employee.department}</td>
                                <td>₹{employee.salary}</td>
                                <td>
                                    <button
                                        onClick={() => onEdit(employee)}
                                        className="btn-edit"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => onDelete(employee._id)}
                                        className="btn-delete"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default EmployeeList;
