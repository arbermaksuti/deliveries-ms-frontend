import { LoadingButton } from '@mui/lab'
import { Box, Button, FormLabel, TextField, Typography } from '@mui/material'
import { useState } from 'react'

interface Props {
  login(e: any, username: string, password: string): any
}

const Login_Form: React.FC<Props> = (props) => {
  const { login } = props
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <Box
      sx={{
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
        width: '100%',
      }}
    >
      <Typography
        gutterBottom
        textAlign={'center'}
        variant="h5"
        component="div"
      >
        Log In
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
            mt: 2,
          }}
        />
      </Box>
      <Box
        component="form"
        sx={{ mt: '40px' }}
        onSubmit={(e: any) => login(e, username, password)}
      >
        <Box>
          <FormLabel sx={{ color: '#323232', ml: 1, fontWeight: '500' }}>
            Username
          </FormLabel>
          <TextField
            id="username"
            name="username"
            type="text"
            placeholder="Input your username in here"
            fullWidth
            margin="dense"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Box>
        <Box mt={2}>
          <FormLabel sx={{ color: '#323232', ml: 1, fontWeight: '500' }}>
            Password
          </FormLabel>
          <TextField
            id="password"
            name="password"
            type="password"
            placeholder="Input your password in here"
            fullWidth
            margin="dense"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Box display="flex" justifyContent="end">
            <Button
              variant="text"
              sx={{
                color: '#A3A3A3',
                fontSize: '16px',
                textTransform: 'none',
              }}
            >
              Forgot Password?
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            mt: {
              xs: 5,
              lg: '40px',
            },
          }}
        >
          <LoadingButton
            sx={{ py: { lg: 1.5 }, textTransform: 'none' }}
            variant="contained"
            type="submit"
            fullWidth
          >
            Log In
          </LoadingButton>
        </Box>
      </Box>
    </Box>
  )
}

export default Login_Form
