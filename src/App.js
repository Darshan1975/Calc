import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {
  // const [name,setname] = useState('Darshan');
  // const [a,seta] = useState();
  // const [b,setb] = useState();
  // const [ans,setans] = useState();
  // const [no,setno] = useState("");

  // const plus = () =>{
  //   setans(parseInt(a)+parseInt(b))
  // } 
  // const sub = () =>{
  //   setans(parseInt(a)-parseInt(b))
  // } 
  // const mul = () =>{
  //   setans(parseInt(a)*parseInt(b))
  // } 
  // const div = () =>{
  //   setans(parseFloat(a)/parseFloat(b))
  // } 
  

    const [display,setdisplay] = useState("");
    const [f_val,setf_val] = useState('');
    const [sign,setsign] = useState('');

    const no = (e) =>{
      setdisplay(display.concat(e.target.value));
    }
    const action = (s) =>{
      setf_val(display);
      setsign(s);
      setdisplay('');
    }
    const calc = () =>{
      
      if(sign=='+')
      {
        setdisplay(parseInt(f_val)+parseInt(display))
      }
      if(sign=='-')
      {
        setdisplay(parseInt(f_val)-parseInt(display))
      }
      if(sign=='*')
      {
        setdisplay(parseInt(f_val)*parseInt(display))
      }
      if(sign=='/')
      {
        setdisplay(parseInt(f_val)/parseInt(display))
      }
      if(sign=='%')
      {
        setdisplay((parseInt(f_val)*parseInt(display))/100)
      }
    }
    const clear = () =>{
      setdisplay("");
    }

    const backspace = () =>{
      setdisplay(display.slice(0, -1));
    }

    
  return (
    <>
      {/* <h1>{name}</h1>

      Enter A : <input type="text" placeholder='enter a' onChange={(e)=>{seta(e.target.value)}} /><br></br>
      Enter B : <input type="text" placeholder='enter b' onChange={(e)=>{setb(e.target.value)}} /><br></br>
      <input type="button" value="+" onClick={plus}/>
      <input type="button" value="-" onClick={sub}/>
      <input type="button" value="x" onClick={mul}/>
      <input type="button" value="/" onClick={div}/><br></br>
      Answer : <input type="text" value={ans} /><br></br><br></br> */}
        <div className="container">
            <form>
              <input type="text" placeholder='0' value={display} />
            </form>
            <div className="keypad">
              <input type="button" onClick={clear} value="Clear" id="clear" />
              <input type="button"onClick={backspace} value="C" id="backspace" />
              <input type="button" value="/" onClick={()=>{action('/')}} />
              <input type="button" value="7" onClick={no} />
              <input type="button" value="8" onClick={no} />
              <input type="button" value="9" onClick={no} />
              <input type="button" value="*" onClick={()=>{action('*')}} />
              <input type="button" value="4" onClick={no} />
              <input type="button" value="5" onClick={no} />
              <input type="button" value="6" onClick={no} />
              <input type="button" value="-" onClick={()=>{action('-')}} />
              <input type="button" value="1" onClick={no} />
              <input type="button" value="2" onClick={no} />
              <input type="button" value="3" onClick={no} />
              <input type="button" value="+" onClick={()=>{action('+')}} />
              <input type="button" value="0" onClick={no} />
              <input type="button" value="." onClick={no} />
              <input type="button" value="%" onClick={()=>{action('%')}} />
              <input type="button" value="=" id='result' onClick={calc} />
            </div>
        </div>

      
	
    </>
  );
}

export default App;
