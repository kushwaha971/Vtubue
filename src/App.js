import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './utils/store'
import { Route, Routes } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import Home from './components/Home';
import WatchPage from './components/WatchPage';
import Demo from './components/Demo';
function App() {
  return ( 
    <Provider store={store} >
    <div className="App">
      <Header />

      <Routes>
       <Route path="/" element={<Body/>}>
       <Route index element={<MainContainer/>}/>
       <Route path="demo" element={<Demo />} />
         <Route  path="watch" element={<WatchPage/>}/>
         
         </Route>
       
       
        
      </Routes>
    
     
    </div>
    </Provider>
  );
}

export default App;
