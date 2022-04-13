import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default index
