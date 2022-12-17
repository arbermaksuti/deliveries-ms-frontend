import { LoadingButton } from '@mui/lab'
import { Box, Button, FormLabel, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import addNotification from 'react-push-notification'
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

  const login_handler = (e: any) => {
    e.preventDefault()
    setLoading(true)
    // setError(true)
    setTimeout(() => {
      nextForm()
      setUsername('')
      setPassword('')
      setLoading(false)
      setError(false)
      navigate('dashboard')
    }, 2000)
    return () => clearTimeout(2000)
  }

  const buttonClick = (e: any) => {
    e.preventDefault()
    addNotification({
      title: 'Warning',
      subtitle: 'This is a subtitle',
      message: 'This is a very long message',
      theme: 'darkblue',
      native: true, // when using native, your OS will handle theming.
    })
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
        onSubmit={(e: any) => buttonClick(e)}
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
