import { Box, Typography } from '@mui/material'
import CustomTable from 'src/components/CustomTable'
import moment from 'moment'
import 'moment/min/locales'
import { dummy_table_columns, dummy_table_rows } from 'src/utils/enums'

const OrdersContainer = () => {
  return (
    <>
      <Box sx={{ mb: 5 }}>
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
