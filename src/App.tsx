import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '@/pages/LoginPage'
import { HomePage } from '@/pages/HomePage'

function App() {
  return (
    <Routes>
      <Route path='*' element={<Navigate to="/home"/>}/>
      <Route path='/Login' element={<LoginPage />} />
      <Route path='/home' element={<HomePage />} />
    </Routes>
  )
}

export default App
