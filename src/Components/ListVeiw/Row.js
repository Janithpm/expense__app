import './row.css'
import { useState } from 'react'
import {TableRow, TableCell, Collapse, Box, Typography, IconButton} from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

function Row({row}) {
    const [open, setOpen] = useState(false)
  return (
    <>
    <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell className="table__cell" component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell className="table__cell">{row.description}</TableCell>
        <TableCell className="table__cell">{row.date}</TableCell>
        <TableCell className="table__cell">{row.time}</TableCell>
        <TableCell className="table__cell">{row.amount}</TableCell>
        <TableCell className="table__cell">
          <IconButton
            aria-label="expand row"
            size="small"
            className="table__cell"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }} className="box">
                <IconButton
                className="box__button_edit"
                >
                    <EditIcon/>
                </IconButton>
                <IconButton
                className="box__button_delete"
                >
                    <DeleteIcon/>
                </IconButton>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

export default Row