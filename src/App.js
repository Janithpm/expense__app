import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './app.css'
import BasicModal from './Components/BasicModal'
import TotalBalance from './Components/TotalBalance'
import Categories from './Components/Categories'
import History from './Components/History'
function App() {
  const [openForm, setOpenForm] = useState(false)
  const handleOpen = () => setOpenForm(true);
  const handleClose = () => setOpenForm(false);
  return (
    <div className="App">
      <CssBaseline />
      
      <Container maxWidth="lg" style={{position: 'relative'}}>
      <div className="floating__button">
        <Fab color="primary" className="floating__button" aria-label="add"
        onClick={handleOpen}
        >
          <AddIcon />
        </Fab>
        <BasicModal openForm={openForm} handleClose={handleClose}/>
      </div>
        <Grid container>
          <Grid item xs={12} md={4}>
            
            <Grid container direction="column">
              <Grid item xs={12}>
                <TotalBalance/>
              </Grid>

              <Grid item xs={12}>
                <Categories/>
              </Grid>
            </Grid>

          </Grid>
          <Grid item xs={12} md={8}>
            <History/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
