import { LoadingButton } from '@mui/lab'
import {
  Box,
  Typography,
  FormLabel,
  TextField,
  Button,
  Divider,
} from '@mui/material'
import { useState } from 'react'

interface Props {
  nextForm(): any
  previousForm(): any
}

const Forgot_Password_Form: React.FC<Props> = (props) => {
  const { previousForm, nextForm } = props
  const [email, setEmail] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const forgot_password_handler = (e: any, email: string) => {
    e.preventDefault()
    setLoading(true)
    alert(`Hey you are write this email ${email}`)
    setTimeout(() => {
      nextForm()
      setEmail('')
      setLoading(false)
    }, 2000)
    return () => clearTimeout()
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
        Forgot Password?
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
        onSubmit={(e: any) => forgot_password_handler(e, email)}
      >
        <Box>
          <FormLabel sx={{ color: '#323232', ml: 1, fontWeight: '500' }}>
            Email
          </FormLabel>
          <TextField
            id="email"
            name="email"
            type="email"
            placeholder="Input your email here"
            fullWidth
            margin="dense"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Typography fontSize="small" sx={{ ml: 1 }}>
          You will receive one 6 character code on this email!
        </Typography>
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
            loading={loading}
          >
            Send Code
          </LoadingButton>
        </Box>
        <Divider />
        <Button
          sx={{
            mt: 1,
            textTransform: 'none',
          }}
          variant="text"
          onClick={previousForm}
        >
          Remember your password?
        </Button>
      </Box>
    </Box>
  )
}

export default Forgot_Password_Form
