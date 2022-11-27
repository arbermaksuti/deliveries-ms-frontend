import { Box } from '@mui/material'
import AllRoutes from 'src/routes'
import { getAllUsers } from 'src/store/reducers/userReducer'
import { RootState } from 'src/store/index'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

const App = () => {
  const dispatch = useDispatch()
  const state: RootState = useSelector((s: RootState) => s)

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])

  return (
    <Box sx={{ height: { xs: '100vh' } }}>
      <AllRoutes />
    </Box>
  )
}

export default App
