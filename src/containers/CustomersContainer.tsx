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
  frequent_customers,
  frequent_orders,
} from 'src/utils/enums'
import { useState } from 'react'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { colors } from 'src/utils/colors'

const CustomersContainer = () => {
  const [dateFrom, setDateFrom] = useState<moment.Moment | null>(
    moment().startOf('isoWeek')
  )
  const [dateTo, setDateTo] = useState<moment.Moment | null>(moment())
  const [location, setLocation] = useState<string>('all')

  return (
    <>
      <Box sx={{ mb: 5 }}>
        <Box sx={{ mb: 4, mt: { xs: 4, sm: 'initial' } }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', md: 'row' },
              mb: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: '20px',
                textAlign: { xs: 'center', sm: 'initial' },
              }}
            >
              Konsumatorët më të shpeshtë të javës
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                ml: { sm: 2 },
                mt: { xs: 1, md: 'initial' },
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
                      mx: 2,
                      width: '150px',
                      backgroundColor: colors.default_white,
                    }}
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
            </Box>
            <Typography
              sx={{ ml: { sm: 'auto' }, mt: { xs: 1, md: 'initial' } }}
            >
              Shiko më shumë
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}
          >
            {frequent_customers.map((oneFreqCustomer, i) => (
              <Card
                key={i}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  width: { xs: '100%', sm: '48%', md: '30%' },
                  my: { xs: 0.5, md: 'initial' },
                  py: 1,
                  px: 2,
                }}
              >
                <Typography variant="h6">{oneFreqCustomer.phone}</Typography>
                <Typography sx={{ ml: 'auto' }}>
                  Gjithsej:
                  <span style={{ fontWeight: 'bold' }}>
                    {oneFreqCustomer.total}
                  </span>
                </Typography>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default CustomersContainer
