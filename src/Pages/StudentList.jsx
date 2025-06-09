import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getallstudentsdetailsAPI,deleteStudentApi } from '../../Services/allApis';

function StudentList() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getStudents = async () => {
    try {
      const result = await getallstudentsdetailsAPI();
      if (result.status === 200) {
        setData(result.data);
      } else {
        console.error('Failed to fetch students:', result);
      }
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const result = await deleteStudentApi(id); 
      if (result.status === 200 || result.status === 204) {
        alert('Student deleted successfully');
        await getStudents(); 
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert('Failed to delete student');
    }
  };

  useEffect(() => {
    getStudents(); 
  }, []);

  return (
    <div className="container mt-5">
      <h2 className='mb-4 text-center'>STUDENTS LIST</h2>
      <table className='table table-hover border border-4  shadow-md' style={{backgroundColor:'lightgray'}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>Email</th>
            <th>COURSE</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {
            data.length > 0 ? (
              data.map((item, index) => (
                <tr key={item.id || index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.email}</td>
                  <td>{item.Courses ?? item.course ?? 'N/A'}</td>
                  <td>
                    <button
                      className="btn btn-info me-2"
                      onClick={() => navigate(`/edit/${item.id}`)}
                    >
                      <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className='text-center text-success'>Data not found</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;