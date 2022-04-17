/* eslint-disable react/jsx-pascal-case */
import { Box, Button, Grid, Slide, Typography } from '@mui/material'
import { useRef, useState } from 'react'
import Forgot_Password_Form from 'src/components/Forgot_Password_Form'
import Login_Form from 'src/components/Login_Form'
import { colors } from 'src/utils/colors'

const Login_Container = () => {
  const containerRef = useRef<any>(null)
  const [activeForm, setActiveForm] = useState<number>(0)
  const nextForm = () => {
    setActiveForm(activeForm < forms.length - 1 ? activeForm + 1 : activeForm)
  }
  const previousForm = () => {
    setActiveForm(activeForm > 0 ? activeForm - 1 : activeForm)
  }
  const forms = [
    <Login_Form nextForm={nextForm} />,
    <Forgot_Password_Form nextForm={nextForm} previousForm={previousForm} />,
    <Box>
      <Button onClick={previousForm}>BACK</Button>
      <Typography>2222</Typography>
      <Button onClick={nextForm}>NEXT</Button>
    </Box>,
  ]

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
            sx={{
              width: { xs: '100%', lg: '90%' },
              height: '500px',
              borderRadius: '8px',
              background: '#fff',
              overflow: 'hidden',
            }}
            ref={containerRef}
          >
            {forms.map((form, index) => {
              return (
                <Slide
                  direction="right"
                  in={activeForm === index ? true : false}
                  mountOnEnter
                  unmountOnExit
                  container={containerRef.current}
                  key={index}
                  timeout={200}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '8px',
                      background: '#fff',
                      py: {
                        xs: 5,
                        lg: '40px',
                      },
                      px: {
                        xs: 5,
                        md: '80px',
                      },
                    }}
                  >
                    {form}
                  </Box>
                </Slide>
              )
            })}
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Login_Container
