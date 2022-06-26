import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardPage from './DashboardPage'
import NotFoundPage from './NotFoundPage'
import LoginPage from './LoginPage'

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default index
