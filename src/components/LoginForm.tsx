import { LoadingButton } from '@mui/lab'
import { Box, Button, FormLabel, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  nextForm?: any
}

const LoginForm: React.FC<Props> = (props) => {
  const { nextForm } = props
  const navigate = useNavigate()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(true)

  async function requestNotificationPermission() {
    try {
      const permission = await window.Notification.requestPermission()
      if (permission !== 'granted') {
        throw new Error('Permission not granted for notifications')
      }
    } catch (error) {
      console.error(error)
    }
  }
  const login_handler = (e: any) => {
    e.preventDefault()
    setLoading(true)

    requestNotificationPermission()
    setError(true)
    const timer = setTimeout(() => {
      nextForm()
      setUsername('')
      setPassword('')
      setLoading(false)
      setError(false)
      navigate('dashboard')
    }, 2000)
    return () => clearTimeout(timer)
  }

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Typography
        gutterBottom
        textAlign={'center'}
        variant="h5"
        component="div"
      >
        Kyçu
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: '80%',
            height: 3,
            bgColor: 'primary.main',
            mt: 1,
          }}
        />
      </Box>
      <Box
        component="form"
        sx={{ mt: '30px' }}
        onSubmit={(e: any) => login_handler(e)}
      >
        <Box>
          <FormLabel sx={{ ml: 1, fontWeight: '500' }}>
            Emri i përdoruesit
          </FormLabel>
          <TextField
            id="username"
            name="username"
            type="text"
            placeholder="Shkruaj emrin e përdoruesit këtu"
            fullWidth
            margin="dense"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Box>
        <Box mt={2}>
          <FormLabel sx={{ ml: 1, fontWeight: '500' }}>Fjalëkalimi</FormLabel>
          <TextField
            id="password"
            name="password"
            type="password"
            placeholder="Shkruaj fjalëkalimin këtu"
            fullWidth
            margin="dense"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Box display="flex" justifyContent="end">
            <Button
              variant="text"
              sx={{
                fontSize: '16px',
                textTransform: 'none',
              }}
              onClick={nextForm}
            >
              Kam harruar fjalëkalimin?
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            mt: {
              xs: 5,
              lg: '30px',
            },
          }}
        >
          <LoadingButton
            sx={{ py: { lg: 1.5 }, textTransform: 'none' }}
            variant="contained"
            type="submit"
            fullWidth
            loading={loading}
          >
            Kyçu
          </LoadingButton>
          {/* {error && (
            <Alert severity="error" sx={{ my: 1 }}>
              Vetëm për testim!
            </Alert>
          )} */}
        </Box>
      </Box>
    </Box>
  )
}

export default LoginForm
