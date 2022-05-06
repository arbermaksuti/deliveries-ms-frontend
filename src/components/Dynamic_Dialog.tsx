import React from 'react'
import Dialog from '@mui/material/Dialog'
import { Button, DialogActions, DialogContent } from '@mui/material'

interface Props {
  opened: boolean
  onClose: () => void
  content?: any
  firstActionsButton: string
  secondActionsButton: string
  onSubmit?: () => void
}

const Dynamic_Dialog: React.FC<Props> = (props) => {
  const {
    opened,
    onClose,
    content,
    firstActionsButton,
    secondActionsButton,
    onSubmit,
  } = props

  return (
    <Dialog open={opened} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <Button variant="contained" color="error" onClick={onClose}>
          {firstActionsButton}
        </Button>
        <Button variant="contained" color="success" onClick={onSubmit}>
          {secondActionsButton}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default Dynamic_Dialog
