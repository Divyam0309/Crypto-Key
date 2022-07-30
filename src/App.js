import { BrowserRouter, Route , Routes} from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage'
import CoinPage from './Pages/CoinPage'
import Header from './Components/Header'
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(() => ({
  App:{
    backgroundColor: "#0b090a",
    color: "white",
    minHeight: "100vh",
  }
}));

 

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
    <div className={classes.App} >
      <Header/>
    <Routes>
      <Route path="/" element={<HomePage />} exact/>
      <Route path="/coins/:id" element={<CoinPage/>} exact/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
