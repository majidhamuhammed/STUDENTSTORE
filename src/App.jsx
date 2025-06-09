import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddStudent from './pages/AddStudent';
import StudentList from './pages/StudentList';
import UpdateStud from './pages/UpdateStud';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path='/' element={<StudentList />} />
        <Route path='/add' element={<AddStudent />} />
        <Route path='/edit/:id' element={<UpdateStud />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
