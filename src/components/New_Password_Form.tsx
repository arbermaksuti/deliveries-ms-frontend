import { LoadingButton } from '@mui/lab'
import {
  Box,
  Typography,
  FormLabel,
  TextField,
  Divider,
  Button,
  Alert,
} from '@mui/material'
import React, { useState } from 'react'

interface Props {
  nextForm(): any
  previousForm(formId?: number): any
}
const New_Password_Form: React.FC<Props> = (props) => {
  const { previousForm, nextForm } = props
  const [newPassword, setNewPassword] = useState<string>('')
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  const new_password_handler = (e: any) => {
    e.preventDefault()
    alert(
      `Hey you are write this new password ${newPassword} ${confirmNewPassword}`
    )
    setLoading(true)
    setError(true)
    setTimeout(() => {
      nextForm()
      setNewPassword('')
      setConfirmNewPassword('')
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
        New Password
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
        onSubmit={(e: any) => new_password_handler(e)}
      >
        <Box>
          <FormLabel sx={{ color: '#323232', ml: 1, fontWeight: '500' }}>
            New Password
          </FormLabel>
          <TextField
            id="new_password"
            name="new_password"
            type="text"
            placeholder="Input your new password here"
            fullWidth
            margin="dense"
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <FormLabel sx={{ color: '#323232', ml: 1, fontWeight: '500' }}>
            Confirm New Password
          </FormLabel>
          <TextField
            id="confirm_new_password"
            name="confirm_new_password"
            type="text"
            placeholder="Write your new password here again"
            fullWidth
            margin="dense"
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
        </Box>
        {/* <Typography fontSize="small" sx={{ ml: 1 }}>
                    You will receive one 6 character code on this email!
                </Typography> */}
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

export default New_Password_Form
