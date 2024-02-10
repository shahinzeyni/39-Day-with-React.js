import logo from './logo.svg';
import './App.css';
import "./navbar.css"

function App() {
  return (
    <header class="header">
      <div class="navbar">
        <div class="navbar_right">
            <ul class="navbar_ul">
              <li class="navbar_li navbar_li_active"><a class="navbar_link">Home</a></li>
              <li class="navbar_li"><a class="navbar_link">Service</a></li>
              <li class="navbar_li"><a class="navbar_link">Link</a></li>
              <li class="navbar_li"><a class="navbar_link">Tel</a></li>
            </ul>
        </div>
        <div class="navbar_left">
              <p class="navbar_icon">
                ShM
              </p>
        </div>
      </div>
    </header>
  );
}

export default App;
