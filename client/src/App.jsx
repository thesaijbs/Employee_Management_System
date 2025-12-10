import React, { useState, useEffect } from 'react';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import { getEmployees, createEmployee, updateEmployee, deleteEmployee } from './services/api';
import './index.css';

function App() {
    const [employees, setEmployees] = useState([]);
    const [currentEmployee, setCurrentEmployee] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {
            const response = await getEmployees();
            setEmployees(response.data);
        } catch (error) {
            console.error('Error fetching employees:', error);
        }
    };

    const handleSave = async (employee) => {
        try {
            if (currentEmployee) {
                await updateEmployee(currentEmployee._id, employee);
            } else {
                await createEmployee(employee);
            }
            fetchEmployees();
            setCurrentEmployee(null);
            setIsEditing(false);
        } catch (error) {
            console.error('Error saving employee:', error);
        }
    };

    const handleEdit = (employee) => {
        setCurrentEmployee(employee);
        setIsEditing(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this employee?')) {
            try {
                await deleteEmployee(id);
                fetchEmployees();
            } catch (error) {
                console.error('Error deleting employee:', error);
            }
        }
    };

    const handleCancel = () => {
        setCurrentEmployee(null);
        setIsEditing(false);
    };

    return (
        <div className="app-container">
            <header>
                <h1>Employee Management System</h1>
            </header>
            <main>
                <div className="content-wrapper">
                    <section className="form-section">
                        <EmployeeForm
                            currentEmployee={currentEmployee}
                            onSave={handleSave}
                            onCancel={handleCancel}
                        />
                    </section>
                    <section className="list-section">
                        <EmployeeList
                            employees={employees}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    </section>
                </div>
            </main>
        </div>
    );
}

export default App;
