import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardPage from './DashboardPage'
import NotFoundPage from './NotFoundPage'
import LoginPage from './LoginPage'
import OrdersPage from './OrdersPage'
import CustomersPage from './CustomersPage'

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/customers" element={<CustomersPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default index
