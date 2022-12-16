import { GetApp } from '@mui/icons-material'
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import moment from 'moment'
import { useState } from 'react'
import { colors } from 'src/utils/colors'

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
  const [location, setLocation] = useState<string>('all')

  return (
    <Box
      sx={{
        backgroundColor: colors.default_white,
        borderRadius: 1,
        p: 2,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {datePickers && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: { xs: 'space-between', md: 'initial' },
            flexWrap: 'wrap',
            gap: { xs: 2 },
          }}
        >
          <DesktopDatePicker
            label="Prej"
            inputFormat="DD/MM/YYYY"
            value={dateFrom}
            onChange={(newValue: moment.Moment | null) => {
              setDateFrom(newValue)
            }}
            renderInput={(params) => (
              <TextField {...params} sx={{ width: '150px' }} size="small" />
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
                size="small"
                sx={{ width: '150px', mx: { md: 2 } }}
              />
            )}
          />
          <FormControl>
            <InputLabel id="location-select-label">Pika</InputLabel>
            <Select
              labelId="location-select-label"
              id="location-select"
              value={location}
              label="Pika"
              size="small"
              sx={{ backgroundColor: colors.default_white }}
              onChange={(e) => setLocation(e.target.value)}
            >
              <MenuItem value="all">Të gjitha</MenuItem>
              <MenuItem value="qendra">Qendra</MenuItem>
              <MenuItem value="rrugaC">Rruga C</MenuItem>
            </Select>
          </FormControl>
          <Button
            sx={{ ml: 'auto', width: 'fit-content' }}
            startIcon={<GetApp />}
            variant="contained"
            size="small"
            // color="secondary"
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
          // color="secondary"
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
          backgroundColor: colors.default_white,
          '& .MuiDataGrid-row': {
            ':hover': {
              backgroundColor: colors.darker_white,
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
