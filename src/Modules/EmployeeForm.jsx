import { useState } from 'react';
import './EmployeeForm.css';
import { Box, Button } from '@mui/material';
import { StepperComp } from '../Testing/StepperComp';

const EmployeeForm = () => {
    const [employee, setEmployee] = useState({
        id: '',
        nickName: '',
        firstName: '',
        lastName: '',
        email: '',
        department: '',
        location: '',
        designation: '',
        codeflinkRole: '',
        employmentType: '',
        employeeStatus: '',
        sourceOfHire: '',
        reportingManager: '',
        dateOfBirth: '',
        maritalStatus: '',
        aboutMe: '',
        uan: '',
        pan: '',
        aadhaar: '',
        workPhoneNumber: '',
        seatingLocation: '',
        tags: '',
        presentAddress: '',
        permanentAddress: '',
        personalEmailAddress: '',
        companyName: '',
        jobTitle: '',
        fromDate: '',
        toDate: '',
        instituteName: '',
        degree: '',
        specialization: '',
        dateOfCompletion: '',
        dependentName: '',
        relationship: '',
        dependentDOB: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(employee);
        // Call the API with the employee data
        fetch('https://your-api-endpoint.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(employee),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        // <Box component="main" sx={{ flexGrow: 1, p: 10 }}></Box>
        <Box className='form' component="main" sx={{ flexGrow: 1, p: 10 }}>
            <StepperComp />
            <form className="employee-form">
                <div className="section">
                    <h2>Basic Information</h2>
                    <input type="text" name="id" placeholder="Employee ID" value={employee.id} onChange={handleChange} />
                    <input type="text" name="nickName" placeholder="Nick Name" value={employee.nickName} onChange={handleChange} />
                    <input type="text" name="firstName" placeholder="First Name" value={employee.firstName} onChange={handleChange} />
                    <input type="text" name="lastName" placeholder="Last Name" value={employee.lastName} onChange={handleChange} />
                    <input type="email" name="email" placeholder="Email" value={employee.email} onChange={handleChange} />
                </div>
                <div className="section">
                    <h2>Work Information</h2>
                    <input type="text" name="department" placeholder="Department" value={employee.department} onChange={handleChange} />
                    <input type="text" name="location" placeholder="Location" value={employee.location} onChange={handleChange} />
                    <input type="text" name="designation" placeholder="Designation" value={employee.designation} onChange={handleChange} />
                    <input type="text" name="codeflinkRole" placeholder="Codeflink Role" value={employee.codeflinkRole} onChange={handleChange} />
                    <input type="text" name="employmentType" placeholder="Employment Type" value={employee.employmentType} onChange={handleChange} />
                    <input type="text" name="employeeStatus" placeholder="Employee Status" value={employee.employeeStatus} onChange={handleChange} />
                    <input type="text" name="sourceOfHire" placeholder="Source of Hire" value={employee.sourceOfHire} onChange={handleChange} />
                </div>
                <div className="section">
                    <h2>Hierarchy Information</h2>
                    <input type="text" name="reportingManager" placeholder="Reporting Manager" value={employee.reportingManager} onChange={handleChange} />
                </div>
                <div className="section">
                    <h2>Personal Details</h2>
                    <input type="date" name="dateOfBirth" placeholder="Date of Birth" value={employee.dateOfBirth} onChange={handleChange} />
                    <input type="text" name="maritalStatus" placeholder="Marital Status" value={employee.maritalStatus} onChange={handleChange} />
                    <textarea name="aboutMe" placeholder="About Me" value={employee.aboutMe} onChange={handleChange}></textarea>
                </div>
                <div className="section">
                    <h2>Identity Information</h2>
                    <input type="text" name="uan" placeholder="UAN" value={employee.uan} onChange={handleChange} />
                    <input type="text" name="pan" placeholder="PAN" value={employee.pan} onChange={handleChange} />
                    <input type="text" name="aadhaar" placeholder="Aadhaar" value={employee.aadhaar} onChange={handleChange} />
                </div>
                <div className="section">
                    <h2>Contact Details</h2>
                    <input type="text" name="workPhoneNumber" placeholder="Work Phone Number" value={employee.workPhoneNumber} onChange={handleChange} />
                    <input type="text" name="seatingLocation" placeholder="Seating Location" value={employee.seatingLocation} onChange={handleChange} />
                    <input type="text" name="tags" placeholder="Tags" value={employee.tags} onChange={handleChange} />
                    <input type="text" name="presentAddress" placeholder="Present Address" value={employee.presentAddress} onChange={handleChange} />
                    <input type="text" name="permanentAddress" placeholder="Permanent Address" value={employee.permanentAddress} onChange={handleChange} />
                    <input type="email" name="personalEmailAddress" placeholder="Personal Email Address" value={employee.personalEmailAddress} onChange={handleChange} />
                </div>
                <div className="section">
                    <h2>Work Experience</h2>
                    <input type="text" name="companyName" placeholder="Company Name" value={employee.companyName} onChange={handleChange} />
                    <input type="text" name="jobTitle" placeholder="Job Title" value={employee.jobTitle} onChange={handleChange} />
                    <input type="date" name="fromDate" placeholder="From Date" value={employee.fromDate} onChange={handleChange} />
                    <input type="date" name="toDate" placeholder="To Date" value={employee.toDate} onChange={handleChange} />
                </div>
                <div className="section">
                    <h2>Education Details</h2>
                    <input type="text" name="instituteName" placeholder="Institute Name" value={employee.instituteName} onChange={handleChange} />
                    <input type="text" name="degree" placeholder="Degree/Diploma" value={employee.degree} onChange={handleChange} />
                    <input type="text" name="specialization" placeholder="Specialization" value={employee.specialization} onChange={handleChange} />
                    <input type="date" name="dateOfCompletion" placeholder="Date of Completion" value={employee.dateOfCompletion} onChange={handleChange} />
                </div>
                <div className="section">
                    <h2>Dependent Details</h2>
                    <input type="text" name="dependentName" placeholder="Name" value={employee.dependentName} onChange={handleChange} />
                    <input type="text" name="relationship" placeholder="Relationship" value={employee.relationship} onChange={handleChange} />
                    <input type="date" name="dependentDOB" placeholder="Date of Birth" value={employee.dependentDOB} onChange={handleChange} />
                </div>
            </form>
            <div className="submit" style={{ display: 'flex', justifyContent: 'center' }}>
                <Button type="submit" onClick={handleSubmit} >Submit</Button>
            </div>
        </Box>
    );
};

export default EmployeeForm;
