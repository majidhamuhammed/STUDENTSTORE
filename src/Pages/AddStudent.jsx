import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Addstudentdetails } from '../../Services/allApis'; 
import { useNavigate } from 'react-router-dom';

function AddStudent() {
  const nav = useNavigate();

  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
    dob: "",
    course: ""
  });

  const handleSubmit = async () => {
    const { name, age, email, dob, course } = data;

    if (!name || !age || !email || !dob || !course) {
      alert('Please fill out all fields.');
      return;
    }

    try {
      const result = await Addstudentdetails(data); 

      if (result.status === 201) {
        alert('Details added successfully');
        setData({ name: "", age: "", email: "", dob: "", course: "" });
        nav('/');
      } else {
        alert('Failed to add student. Please try again.');
      }
    } catch (error) {
      console.error("Error submitting student details:", error);
      alert('An error occurred while submitting.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", backgroundColor: '#f7f7f7' }}>
      <div className="p-4 rounded shadow" style={{ backgroundColor: 'white', maxWidth: '600px', width: '100%' }}>
        <h3 className="text-center mb-4 text-success">Add New Student</h3>

        <Form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
          <FloatingLabel controlId="floatingName" label="Full Name" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingAge" label="Age" className="mb-3">
            <Form.Control
              type="number"
              placeholder="Age"
              value={data.age}
              onChange={(e) => setData({ ...data, age: e.target.value })}
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingEmail" label="Email Address" className="mb-3">
            <Form.Control
              type="email"
              placeholder="Email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingDob" label="Date of Birth" className="mb-3">
            <Form.Control
              type="date"
              value={data.dob}
              onChange={(e) => setData({ ...data, dob: e.target.value })}
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingCourse" label="Course" className="mb-4">
            <Form.Control
              type="text"
              placeholder="Course"
              value={data.course}
              onChange={(e) => setData({ ...data, course: e.target.value })}
            />
          </FloatingLabel>

          <div className="text-end">
            <button type="submit" className="btn btn-success px-4">
              Submit
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default AddStudent;
