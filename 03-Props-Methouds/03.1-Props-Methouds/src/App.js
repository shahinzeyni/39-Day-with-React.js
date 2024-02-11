import './App.css';
import Boxes from './Boxes/Boxes'

function App() {
  const allProducts = [
    {title:"Asus" , price:220 ,image:"./images/1.png" , count: 10  },
    {title:"Mac" , price:420 , image:"./images/2.png" , count:10  },
    {title:"Lenovo" , price:320 , image:"./images/3.webp" , count:0  }
  ] 
  return (
    <div className='Boxes_app'>
          <Boxes {...allProducts[0]}>
              <button>off(30%)</button>
          </Boxes>
          <Boxes {...allProducts[1]}>
              <h3>off(50%)</h3>
          </Boxes>
          <Boxes {...allProducts[2]} >
              <button>off(30%)</button>
          </Boxes>

    </div>
  );
}

export default App;
