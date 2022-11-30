import { GetApp } from '@mui/icons-material'
import { Box, Button, IconButton, TextField } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import moment from 'moment'
import { useState } from 'react'

interface CustomTableProps {
  datePickers?: boolean
  rows?: any
  columns?: any
}
const CustomTable: React.FC<CustomTableProps> = (props) => {
  const { datePickers, rows, columns } = props
  const [dateFrom, setDateFrom] = useState<moment.Moment | null>(
    moment().subtract(2, 'd')
  )
  const [dateTo, setDateTo] = useState<moment.Moment | null>(
    moment().subtract(1, 'd')
  )

  return (
    <Box
      sx={{
        backgroundColor: '#FFF',
        borderRadius: 1,
        p: 2,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {datePickers && (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <DesktopDatePicker
            label="Prej"
            inputFormat="DD/MM/YYYY"
            value={dateFrom}
            onChange={(newValue: moment.Moment | null) => {
              setDateFrom(newValue)
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                sx={{ width: '150px', mr: 2, my: 1 }}
                size="small"
              />
            )}
          />
          <DesktopDatePicker
            label="Deri"
            inputFormat="DD/MM/YYYY"
            value={dateTo}
            onChange={(newValue: moment.Moment | null) => {
              setDateTo(newValue)
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                sx={{ width: '150px', my: 1 }}
                size="small"
              />
            )}
          />
          <Button
            sx={{ ml: 'auto', width: 'fit-content' }}
            startIcon={<GetApp />}
            variant="contained"
            size="small"
            color="secondary"
          >
            Shkarko
          </Button>
        </Box>
      )}
      {!datePickers && (
        <Button
          sx={{ ml: 'auto', width: 'fit-content' }}
          startIcon={<GetApp />}
          variant="contained"
          size="small"
          color="secondary"
        >
          Shkarko
        </Button>
      )}
      <Box
        sx={{
          mt: 2,
          height: 300,
          width: '100%',
          flexGrow: 1,
          backgroundColor: '#FFF',
          '& .MuiDataGrid-row': {
            ':nth-of-type(even)': {
              backgroundColor: '#FBFBFB',
              ':hover': {
                backgroundColor: '#e6e6e6',
              },
            },
          },
        }}
      >
        {rows && columns ? (
          <DataGrid
            disableColumnMenu
            getRowId={(row: any) => row._id}
            rows={rows}
            rowCount={10}
            columns={columns}
            disableSelectionOnClick
            // loading={loader}
            rowsPerPageOptions={[]}
            hideFooter={true}
            components={{
              Footer: undefined,
              Pagination: null,
            }}
            // paginationMode={'server'}
          />
        ) : null}
      </Box>
    </Box>
  )
}

export default CustomTable
