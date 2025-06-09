import React, { useEffect, useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useParams, useNavigate } from 'react-router-dom';
import { getstudentApi, updateToEditStudentApi } from '../../Services/allApis';

function UpdateStud() {
  const [data, setData] = useState({
    name: '',
    dob: '',
    age: '',
    email: '',
    course: '',
  });

  const navigate = useNavigate();
  const { id } = useParams();

  const fetchStudentData = async () => {
    try {
      const result = await getstudentApi(id);
      if (result.status === 200) {
        setData(result.data);
      } else {
        alert('Failed to fetch student details.');
      }
    } catch (error) {
      console.error('Error Fetching Student:', error);
      alert('Error while fetching student details.');
    }
  };

  useEffect(() => {
    fetchStudentData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, dob, age, email, course } = data;

    if (!name || !dob || !age || !email || !course) {
      alert("Please fill all fields.");
      return;
    }

    try {
      const response = await updateToEditStudentApi(id, data);
      if (response.status === 200) {
        alert('Student updated successfully');
        navigate('/');
      } else {
        alert('Update failed: Unexpected response status ' + response.status);
      }
    } catch (error) {
      console.error('Failed to update student:', error);
      alert('Update failed: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#f7f7f7' }}>
      <div className="p-4 rounded shadow" style={{ backgroundColor: 'white', maxWidth: '600px', width: '100%' }}>
        <h3 className="text-center mb-4 text-primary">Update Student Details</h3>

        <Form onSubmit={handleSubmit}>
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
            <button type="submit" className="btn btn-primary px-4">
              Save
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default UpdateStud;
