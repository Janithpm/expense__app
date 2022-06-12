import { Card, CardContent, Typography } from '@mui/material';
import './total.css'

function TotalBalance() {
  return (
      <Card 
      className="total__card"
      >
        <CardContent>
          <Typography variant="h6" color="">Balance</Typography>
          <Typography variant="h5">12 500</Typography>
        <div className="total__spendAndIncome">
          <div className="total__spend">
            <Typography variant="h6">Spend</Typography>
            <Typography variant="h5">12 500</Typography>
          </div>
          <div className="total__income">
            <Typography variant="h6">Income</Typography>
            <Typography variant="h5">12 500</Typography>
          </div>
        </div>
        </CardContent>
      </Card>
  )
}

export default TotalBalance

