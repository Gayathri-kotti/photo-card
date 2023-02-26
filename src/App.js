import  React from 'react';
import  Logo from './am.jpg';
import './style.css'

const  App=()=>{
    return(
        <>
        <center>
        <div className='card'>
                     <img src={Logo} alt="aston martin car"/>
                    <div className='container'>
                    <h1>Aston Martin</h1>
                    <p>Aston Martin Lagonda Limited is a luxury car company that was started in 1913 by Lionel Martin and Robert Bamford
                    </p>              
                    </div>
                    <b>SHARE</b><b>LEARN MORE</b>
                    
            </div>
            </center>
            </>
        
    );
};
export default App;