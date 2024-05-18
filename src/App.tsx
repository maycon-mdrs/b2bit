import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { LoginPage } from '@/pages/LoginPage';
import { HomePage } from '@/pages/HomePage';
import { PrivateRoutes } from '@/pages/PrivateRoutes';
import { initializeAxios } from '@/services/Api';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize Axios with a callback function to redirect
    initializeAxios(() => navigate('/login'));
  }, [navigate]);
  
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path='/home' element={<HomePage />}></Route>
        <Route path="*" element={<Navigate to="/home" />} />
      </Route>
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  )
}

export default App
