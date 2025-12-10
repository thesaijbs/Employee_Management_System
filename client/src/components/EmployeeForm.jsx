import React, { useState, useEffect } from 'react';

const EmployeeForm = ({ currentEmployee, onSave, onCancel }) => {
    const [employee, setEmployee] = useState({
        name: '',
        role: '',
        department: '',
        salary: '',
    });

    useEffect(() => {
        if (currentEmployee) {
            setEmployee(currentEmployee);
        } else {
            setEmployee({ name: '', role: '', department: '', salary: '' });
        }
    }, [currentEmployee]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(employee);
        setEmployee({ name: '', role: '', department: '', salary: '' });
    };

    return (
        <div className="form-container">
            <h2>{currentEmployee ? 'Edit Employee' : 'Add Employee'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={employee.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Role</label>
                    <input
                        type="text"
                        name="role"
                        value={employee.role}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Department</label>
                    <input
                        type="text"
                        name="department"
                        value={employee.department}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Salary</label>
                    <input
                        type="number"
                        name="salary"
                        value={employee.salary}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-actions">
                    <button type="submit" className="btn-primary">
                        {currentEmployee ? 'Update' : 'Add'}
                    </button>
                    {currentEmployee && (
                        <button type="button" onClick={onCancel} className="btn-secondary">
                            Cancel
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default EmployeeForm;
