import './App.css';
import Header from './Components/Header/header';
import SideImage from './Components/SideImage/sideImage';
import Steps from './Components/steps/steps';
function App() {
  
  return (
    <>
     <div className="circle first"></div>
     <div className="circle second"></div>
     <div className="circle third"></div>
     <Header/>
     <Steps/>
     <SideImage/>
    </>
    
  );
}

export default App;
