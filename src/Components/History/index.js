import './history.css'
import { Card } from '@mui/material'
import {useState} from 'react'
import ListVeiw from '../ListVeiw'

function History() {
  const [incomeListView, setIncomeListView] = useState(false)
  return (
    <Card className="history">
        <div className={"history__nav"}>
            <div className={incomeListView ? "tab" : "active"} onClick={()=>setIncomeListView(false)}><p>Expense</p></div>
            <div className={incomeListView ? "active" : "tab"} onClick={()=>setIncomeListView(true)}><p>Income</p></div>
        </div>
        <ListVeiw/>
    </Card>
  )
}

export default History