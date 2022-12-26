import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardPage from './DashboardPage'
import NotFoundPage from './NotFoundPage'
import LoginPage from './LoginPage'
import OrdersPage from './OrdersPage'
import CustomersPage from './CustomersPage'
import EditMenuPage from './EditMenuPage'
import UsersPage from './UsersPage'
import ScrollToTop from 'src/utils/scrollToTop'

const index = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/edit-menu" element={<EditMenuPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default index

export const deliversRoutes = [{ element: 'Test', path: 'test' }]
export const kitchenRoutes = [{ element: 'Test', path: 'test' }]
export const callCenterRoutes = [{ element: 'Test', path: 'test' }]
export const adminRoutes = [{ element: 'Test', path: 'test' }]
