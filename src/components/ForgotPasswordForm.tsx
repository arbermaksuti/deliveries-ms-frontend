import { LoadingButton } from '@mui/lab'
import {
  Box,
  Typography,
  FormLabel,
  TextField,
  Button,
  Divider,
  Alert,
} from '@mui/material'
import { useState } from 'react'

interface Props {
  nextForm(): any
  previousForm(): any
}

const ForgotPasswordForm: React.FC<Props> = (props) => {
  const { previousForm, nextForm } = props
  const [email, setEmail] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  const forgot_password_handler = (e: any) => {
    e.preventDefault()
    alert(`Hey you are write this email ${email}`)
    setLoading(true)
    setError(true)
    setTimeout(() => {
      nextForm()
      setEmail('')
      setLoading(false)
      setError(false)
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
        color="secondary"
      >
        Kam harruar fjalëkalimin
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
        onSubmit={(e: any) => forgot_password_handler(e)}
      >
        <Box>
          <FormLabel sx={{ ml: 1, fontWeight: '500' }}>Email</FormLabel>
          <TextField
            id="email"
            name="email"
            type="email"
            placeholder="Shkruaj email-in këtu"
            fullWidth
            margin="dense"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Typography fontSize="small" sx={{ ml: 1 }}>
          Ju do të pranoni një kod 6 shifror në këtë email!
        </Typography>
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
            Dërgo kodin
          </LoadingButton>
          {error && (
            <Alert severity="error" sx={{ mt: 1 }}>
              Vetëm për testim!
            </Alert>
          )}
        </Box>
        <Divider />
        <Button
          sx={{
            mt: 1,
            textTransform: 'none',
          }}
          variant="text"
          color="secondary"
          onClick={() => previousForm()}
        >
          Po e kujtoj fjalëkalimin?
        </Button>
      </Box>
    </Box>
  )
}

export default ForgotPasswordForm
