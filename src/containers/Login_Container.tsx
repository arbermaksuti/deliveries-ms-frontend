/* eslint-disable react/jsx-pascal-case */
import { Box, Grid, Slide, Typography } from '@mui/material'
import { useRef, useState } from 'react'
import Confirmation_Code_Form from 'src/components/Confirmation_Code_Form'
import Forgot_Password_Form from 'src/components/Forgot_Password_Form'
import Login_Form from 'src/components/Login_Form'
import New_Password_Form from 'src/components/New_Password_Form'
import { colors } from 'src/utils/colors'

const Login_Container = () => {
  const containerRef = useRef<any>(null)
  const [activeForm, setActiveForm] = useState<number>(1)
  const nextForm = () => {
    setActiveForm(activeForm < forms.length ? activeForm + 1 : 1)
  }
  const previousForm = (formId?: number) => {
    setActiveForm(
      formId ? formId : activeForm > 1 ? activeForm - 1 : activeForm
    )
  }
  const forms = [
    <Login_Form nextForm={nextForm} />,
    <Forgot_Password_Form nextForm={nextForm} previousForm={previousForm} />,
    <Confirmation_Code_Form nextForm={nextForm} previousForm={previousForm} />,
    <New_Password_Form nextForm={nextForm} previousForm={previousForm} />,
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
            sx={{
              mx: 'auto',
              height: '100%',
              mb: { xs: 6 },
            }}
          >
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box
                sx={{
                  maxWidth: {
                    xs: 100,
                    md: 150,
                    lg: 180,
                  },
                }}
              >
                <img src="/logo192.png" alt="logo" width="100%" height="100%" />
              </Box>
              <Typography
                variant="h2"
                fontWeight="500"
                sx={{ letterSpacing: { xs: 5, lg: 10 } }}
              >
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
              background: colors.default_white,
              overflow: 'hidden',
            }}
            ref={containerRef}
          >
            {forms.map((form, index) => {
              return (
                <Slide
                  direction="right"
                  in={activeForm === index + 1 ? true : false}
                  mountOnEnter
                  unmountOnExit
                  container={containerRef.current}
                  key={index + 1}
                  timeout={200}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '8px',
                      background: colors.default_white,
                      py: {
                        xs: 5,
                        lg: '40px',
                      },
                      px: {
                        xs: 3,
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
