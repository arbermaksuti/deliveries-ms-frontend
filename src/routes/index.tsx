import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardPage from 'src/routes/DashboardPage'
import NotFoundPage from 'src/routes/NotFoundPage'
import LoginPage from 'src/routes/LoginPage'
import OrdersPage from 'src/routes/OrdersPage'

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default index
