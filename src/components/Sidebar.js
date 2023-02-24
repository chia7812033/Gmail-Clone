import { Button } from '@mui/material'
import React from 'react'
import '../assets/Sidebar.css'
import CreateIcon from "@mui/icons-material/Create";

function Sidebar() {
  return (
    <div className='sidebar'>
      <Button startIcon={<CreateIcon />} className="sidebar__compose">Compose</Button>
    </div>
  )
}

export default Sidebar
