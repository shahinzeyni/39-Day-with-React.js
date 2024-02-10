
import './App.css';
import Boxes from './Boxes/Boxes'

function App() {
  return (
    <div className='Boxes_app'>
        <Boxes title="Asus" price="220$" image="./images/1.webp"></Boxes>
        <Boxes title="Mac" price="420$" image="./images/2.webp"></Boxes>
        <Boxes title="Lenovo" price="320$" image="./images/3.webp"></Boxes>
    </div>
  );
}


export default App;
