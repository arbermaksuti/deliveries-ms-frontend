import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

interface MenuItemsProps {
  foods_type: string
}
const MenuItems: React.FC<MenuItemsProps> = (props) => {
  const { foods_type } = props
  return (
    <>
      <Typography>
        Ketu bohet mandej requesti per llojin e caktum: {foods_type}
      </Typography>
    </>
  )
}

export default MenuItems
