import { LoadingButton } from '@mui/lab'
import {
  Alert,
  Button,
  Divider,
  FormLabel,
  TextField,
  Typography,
  Box,
} from '@mui/material'
import { useState } from 'react'

interface Props {
  nextForm(): any
  previousForm(formId?: number): any
}
const ConfirmationCodeForm: React.FC<Props> = (props) => {
  const { previousForm, nextForm } = props
  const [confirmationCode, setConfirmationCode] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  const confirmation_code_handler = (e: any) => {
    e.preventDefault()
    alert(`Hey you are write this confirmation code ${confirmationCode}`)
    setLoading(true)
    setError(true)
    const timer = setTimeout(() => {
      nextForm()
      setConfirmationCode('')
      setLoading(false)
      setError(false)
    }, 2000)
    return () => clearTimeout(timer)
  }

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Typography gutterBottom textAlign="center" variant="h5" component="div">
        Kodi i konfirmimit
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
          <FormLabel sx={{ ml: 1, fontWeight: '500' }}>
            Kodi i konfirmimit
          </FormLabel>
          <TextField
            id="confirmation_code"
            name="confirmation_code"
            type="number"
            placeholder="Shkruaj kodin e konfirmimit këtu"
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
          Nëse ju nuk keni pranuar kodin e konfirmimit, ju lutem na
          <a href="/"> kontaktoni!</a>
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
            Vazhdo
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
          onClick={() => previousForm(1)}
        >
          Po e kujtoj fjalëkalimin?
        </Button>
      </Box>
    </Box>
  )
}

export default ConfirmationCodeForm
