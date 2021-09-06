import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/NavBar';
import AppRouter from './components/AppRouter';
import { auth } from './firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from './components/Loader';


function App() {
  const [user, loading] = useAuthState(auth);

  if(loading){
    return <Loader/>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
