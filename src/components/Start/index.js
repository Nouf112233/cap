import React, { useEffect }  from 'react'
import {useNavigate} from 'react-router-dom'
// import Timer from '../Timer';
import './style.css'

const Start = ({sound}) => {
    const navigate = useNavigate();
 
    

    const changeRoutedis=()=>{
       
        navigate(`/discription`);
    }
 
    return (
        
            <div className="discription">
            <button onClick={()=>changeRoutedis()} className="explainBtn">Explain</button>
            </div>
            
            

            
        
    )
}

export default Start;