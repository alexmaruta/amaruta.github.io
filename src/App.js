// import logo from './logo.svg';
import './App.css';

function App() {
  const date=new Date();
  const year=date.getFullYear();
  
  return (
    <div className="App">
      <div class="center-box">
        <div class="logo jumbo">amaruta<span class="tech">.tech</span></div>
        <p>Site under construction. Get in <b><a href="mailto:contact@amaruta.tech">contact here</a>.</b></p>
      </div>
    
      <footer class="fixed">
        &#169; {year}   &nbsp;Made with &#9829; in &#10006;&#10006;&#10006;
      </footer>
    </div>
  );
}

export default App;
