import { Box, Card, Typography, TextField } from '@mui/material'
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

const OrdersContainer = () => {
  const [dateFrom, setDateFrom] = useState<moment.Moment | null>(
    moment().startOf('isoWeek')
  )
  const [dateTo, setDateTo] = useState<moment.Moment | null>(moment())

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
              Porositë më të shpeshta
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                ml: { sm: 2 },
                my: { xs: 1, sm: 'initial' },
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
                    sx={{ width: '150px', mr: 2 }}
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
                  <TextField {...params} sx={{ width: '150px' }} size="small" />
                )}
              />
            </Box>

            <Typography sx={{ ml: { sm: 'auto' } }}>Shiko më shumë</Typography>
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
