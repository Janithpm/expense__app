import './listVeiw.css'
import {useState} from 'react'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material'
import Row from './Row'

function ListVeiw() {
    const [list, setList] = useState([
        {
          id:1,
          description: 'income ea Lorem pariatur fugiat tempor sunt.income ea Lorem pariatur fugiat tempor sunt.',
          date:'01/01/2022',
          time:'12:20 am',
          amount:1000
        },
        {
          id:2,
          description: 'income ea Lorem pariatur fugiat tempor sunt.',
          date:'01/01/2022',
          time:'12:20 am',
          amount:2000
        },
        {
          id:3,
          description: 'income ea Lorem pariatur fugiat tempor sunt.',
          date:'01/01/2022',
          time:'12:20 am',
          amount:3000
        },
        {
          id:4,
          description: 'income ea Lorem pariatur fugiat tempor sunt.',
          date:'01/01/2022',
          time:'12:20 am',
          amount:4000
        },
        {
          id:5,
          description: 'income ea Lorem pariatur fugiat tempor sunt.',
          date:'01/01/2022',
          time:'12:20 am',
          amount:5000
        },
        {
          id:6,
          description: 'income ea Lorem pariatur fugiat tempor sunt.',
          date:'01/01/2022',
          time:'12:20 am',
          amount:6000
        },
        {
          id:6,
          description: 'income ea Lorem pariatur fugiat tempor sunt.',
          date:'01/01/2022',
          time:'12:20 am',
          amount:6000
        },
        {
          id:6,
          description: 'income ea Lorem pariatur fugiat tempor sunt.',
          date:'01/01/2022',
          time:'12:20 am',
          amount:6000
        },
        {
          id:6,
          description: 'income ea Lorem pariatur fugiat tempor sunt.',
          date:'01/01/2022',
          time:'12:20 am',
          amount:6000
        },
        {
          id:6,
          description: 'income ea Lorem pariatur fugiat tempor sunt.',
          date:'01/01/2022',
          time:'12:20 am',
          amount:6000
        },
        {
          id:6,
          description: 'income ea Lorem pariatur fugiat tempor sunt.',
          date:'01/01/2022',
          time:'12:20 am',
          amount:6000
        },
      ])
  return (



    <TableContainer component={Paper}>
    <Table className="table__cell" stickyHeader aria-label="collapsible table">
      <TableHead>
        <TableRow>
          <TableCell className="table__cell" >ID</TableCell>
          <TableCell className="table__cell">Description</TableCell>
          <TableCell className="table__cell" >Date</TableCell>
          <TableCell className="table__cell" >Time</TableCell>
          <TableCell className="table__cell" >Amount</TableCell>
          <TableCell className="table__cell"/>
        </TableRow>
      </TableHead>
      <TableBody className="no__scroll_bar">
        {list.map(item => (
                    <Row key={item.name} row={item}/>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default ListVeiw