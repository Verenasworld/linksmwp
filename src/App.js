import './App.css';
import {Button} from "@material-ui/core";

function App() {
  return (
      <div className="container">

           <div className="head">
              <div className='logo'></div>

           </div>

           <div className="item">
               <h3>@mywebprofi</h3>
               <Button  variant="outlined" >
                 Mywebprofi
               </Button><br/>
             <Button  variant="outlined" >
                 Phow Solution
             </Button><br/>
               <Button  variant="outlined">
                 Schoolvision
             </Button><br/>
               <Button  variant="outlined">
                 Elisamassage
             </Button><br/>
               <Button  variant="outlined">
                Titan International
             </Button><br/>
               <Button  variant="outlined">
                  Alex Kiesling
               </Button>
           </div>
        </div>

  );
}

export default App;
