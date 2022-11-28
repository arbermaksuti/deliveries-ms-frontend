import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Layout from 'src/layout'

const NotFoundPage = () => {
  const navigate = useNavigate()

  return (
    <Layout>
      <Box
        sx={{
          height: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography fontSize="large" fontWeight="500">
          Some parts are still under construction...
        </Typography>
        <Typography fontWeight="500">We will be back soon</Typography>
        <Button variant="contained" onClick={() => navigate(-1)} sx={{ mt: 2 }}>
          Go Back
        </Button>
      </Box>
    </Layout>
  )
}

export default NotFoundPage
