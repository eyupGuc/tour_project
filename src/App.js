
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import {data} from './helper/data';
import Card from './components/cards/Card';

function App() {
  return (
    <div className='container'>
      <Navbar/>
      <Header/>
      <div className='main'>
      {data.map((item)=>{
       return <Card key={item.id} title={item.title} desc={item.desc} img={item.image}/>
      })}
      </div>
    </div>
  );
}


export default App;
