import {
  Box,
  Card,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material'
import CustomTable from 'src/components/CustomTable'
import moment from 'moment'
import 'moment/min/locales'
import {
  dummy_table_columns,
  dummy_table_rows,
  frequent_orders,
} from 'src/utils/enums'
import { useState } from 'react'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { colors } from 'src/utils/colors'

const OrdersContainer = () => {
  const [dateFrom, setDateFrom] = useState<moment.Moment | null>(
    moment().startOf('isoWeek')
  )
  const [dateTo, setDateTo] = useState<moment.Moment | null>(moment())
  const [location, setLocation] = useState<string>('all')

  return (
    <>
      <Box sx={{ mb: 5 }}>
        <Box sx={{ mb: 4 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', sm: 'initial' },
              mb: 2,
            }}
          >
            <Typography sx={{ fontSize: '20px' }}>
              Porositë më të shpeshta të kësaj jave
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                ml: { md: 2 },
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
                  <TextField
                    {...params}
                    size="small"
                    sx={{
                      width: '150px',
                      backgroundColor: colors.default_white,
                    }}
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
                    size="small"
                    sx={{
                      mx: { md: 2 },
                      width: '150px',
                      backgroundColor: colors.default_white,
                    }}
                  />
                )}
              />
              <FormControl sx={{ mt: { xs: 2, md: 'initial' } }}>
                <InputLabel id="location-select-label">Pika</InputLabel>
                <Select
                  labelId="location-select-label"
                  id="location-select"
                  value={location}
                  label="Pika"
                  size="small"
                  inputProps={{ MenuProps: { disableScrollLock: true } }}
                  sx={{ backgroundColor: colors.default_white }}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <MenuItem value="all">Të gjitha</MenuItem>
                  <MenuItem value="qendra">Qendra</MenuItem>
                  <MenuItem value="rrugaC">Rruga C</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/* <Typography sx={{ ml: { sm: 'auto' } }}>Shiko më shumë</Typography> */}
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}
          >
            {frequent_orders.map((oneFreqOrder, i) => (
              <Card
                key={i}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  width: { xs: '100%', sm: '48%', md: '30%' },
                  p: 1,
                  my: { xs: 0.5, md: 'initial' },
                }}
              >
                <img
                  src={oneFreqOrder.img}
                  alt="Product"
                  style={{
                    width: '40px',
                    aspectRatio: '3/2',
                    objectFit: 'contain',
                    margin: '0 5px',
                  }}
                />
                <Typography variant="h6">{oneFreqOrder.name}</Typography>
                <Typography sx={{ ml: 'auto', mr: 1 }}>
                  Gjithsej:{' '}
                  <span style={{ fontWeight: 'bold' }}>
                    {oneFreqOrder.total}
                  </span>
                </Typography>
              </Card>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: { xs: 'column', md: 'row' },
            mb: 2,
          }}
        >
          <Typography variant="h5">Porositë e sotshme</Typography>
          <Typography
            variant="h5"
            sx={{ mx: 1, display: { xs: 'none', md: 'initial' } }}
          >
            -
          </Typography>
          <Typography variant="h5">
            {moment().locale('sq').format('LL')}
          </Typography>
        </Box>
        <CustomTable rows={dummy_table_rows} columns={dummy_table_columns} />
      </Box>
      <Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 2,
            justifyContent: { xs: 'center', md: 'initial' },
          }}
        >
          <Typography variant="h5">Porositë e mëparshme</Typography>
        </Box>
        <CustomTable
          datePickers
          rows={dummy_table_rows}
          columns={dummy_table_columns}
        />
      </Box>
    </>
  )
}

export default OrdersContainer
