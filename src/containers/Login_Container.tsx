/* eslint-disable react/jsx-pascal-case */
import { Box, Grid, Typography } from '@mui/material'
import Login_Form from 'src/components/Login_Form'
import { colors } from 'src/utils/colors'

const Login_Container = () => {
  const login_handler = (e: any, username: string, password: string) => {
    e.preventDefault()
    alert(
      `Hey ${username ? username : 'Test'} you are logged in with ${
        password ? password : 'Test'
      } password`
    )
  }

  return (
    <Box
      component="main"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        height: {
          xs: '100%',
          lg: '100vh',
        },
        p: 2,
        backgroundColor: colors.white,
      }}
    >
      <Grid
        container
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Grid xs={12} sm={10} md={8} lg={6} item>
          <Box
            component="div"
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ height: '100%', mb: { xs: 10 } }}
          >
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box
                sx={{
                  width: {
                    xs: 100,
                    md: 150,
                    lg: 180,
                  },
                }}
              >
                <img src="/logo192.png" alt="logo" width="100%" height="100%" />
              </Box>
              <Typography variant="h2" fontWeight="500" letterSpacing={10}>
                Deliveries
              </Typography>
              <Typography variant="h5">Management System</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid xs={12} sm={10} md={8} lg={6} item>
          <Box
            component="div"
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ height: '100%' }}
          >
            <Login_Form login={login_handler} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Login_Container
