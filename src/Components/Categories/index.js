import { Card, CardContent, Typography } from '@mui/material'
import {useState} from 'react'
import './categories.css'

function Categories() {

  const [categories, setCategories] = useState([
    {
      id:1,
      name:'Food',
      amount: 2500
    },
    {
      id:2,
      name:'Transport',
      amount: 2500
    },
    {
      id:3,
      name:'Others',
      amount: 2500
    },

  ])

  return (
    <Card className="categories">
      <CardContent className="categories__list">
        {categories.map(item =>(
          <Item key={item.id} item={item}/>
        ))}
      </CardContent>
    </Card>
  )
}


const Item = ({item}) => (
  <div className="categories__item">
      <Typography>{item.name}</Typography>
      <Typography>{item.amount}</Typography>
  </div>
)


export default Categories