import { LoadingButton } from '@mui/lab'
import {
  Alert,
  Button,
  Divider,
  FormLabel,
  TextField,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'

interface Props {
  nextForm(): any
  previousForm(formId?: number): any
}
const Confirmation_Code_Form: React.FC<Props> = (props) => {
  const { previousForm, nextForm } = props
  const [confirmationCode, setConfirmationCode] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  const confirmation_code_handler = (e: any) => {
    e.preventDefault()
    alert(`Hey you are write this confirmation code ${confirmationCode}`)
    setLoading(true)
    setError(true)
    setTimeout(() => {
      nextForm()
      setConfirmationCode('')
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
      >
        Confirmation Code
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
        onSubmit={(e: any) => confirmation_code_handler(e)}
      >
        <Box>
          <FormLabel sx={{ color: '#323232', ml: 1, fontWeight: '500' }}>
            Confirmation Code
          </FormLabel>
          <TextField
            id="confirmation_code"
            name="confirmation_code"
            type="number"
            placeholder="Input your confirmation code here"
            fullWidth
            margin="dense"
            onChange={(e) => setConfirmationCode(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-input': {
                '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
                  WebkitAppearance: 'none',
                },
              },
            }}
          />
        </Box>
        <Typography fontSize="small" sx={{ ml: 1 }}>
          If you did not recieve any confirmation code, please contact us!
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
            Submit
          </LoadingButton>
          {error && (
            <Alert severity="error" sx={{ mt: 1 }}>
              Just for test!
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
          onClick={() => previousForm(1)}
        >
          Remember your password?
        </Button>
      </Box>
    </Box>
  )
}

export default Confirmation_Code_Form
