import './App.css';
import {Button} from "@material-ui/core";
import LogoComponent from "./logo/logo.component";
import Darkmode from 'darkmode-js';


const options = {
    top: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#ffffff', // default: '#fff'
    backgroundColor: '#2c1b1b',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#41a38e', // default: '#fff'
    saveInCookies: false, // default: true,
    // label: '🌓', // default: ''
    // autoMatchOsTheme: true // default: true
}

// const darkmode = new Darkmode(options);
// darkmode.showWidget();

const darkmode =  new Darkmode(options);
darkmode.toggle();
console.log(darkmode.isActivated())



function App() {
    new Darkmode().showWidget();

  return (
      <div className="container">

          <LogoComponent/>

           <div className="item">
               <h3>@mywebprofi</h3>
               <Button  variant="outlined" >
                 mywebprofi.net
               </Button><br/>
             <Button  variant="outlined" >
                 Phow Solution
             </Button><br/>
               <Button  variant="outlined">
                 Schoolvision
             </Button><br/>
               <Button  variant="outlined">
                 Phow Solution
             </Button><br/>
               <Button  variant="outlined">
                 Phow Solution
             </Button><br/>
               <Button  variant="outlined">
                   Phow Solution
               </Button>
           </div>
        </div>

  );
}

export default App;
