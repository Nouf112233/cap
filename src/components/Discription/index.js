import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";


const Discription = (props) => {
    // const explain=props.explain;
  const navigate = useNavigate();

  const changeRoute = (id) => {
    navigate(`/card/${id}`);
  };
  return (
    <div className="disc">
      <ul>
        <li>You have many cards containing pictures of famous cartoon characters</li>
        <li>there are 3 levels in each level you must reveal all the similar cards within one minute</li>
      </ul>
        {/* <video width="320" height="240" controls>
  
            <source src={explain} type="video/mov"/>
            
        </video> */}
      <div className="but">
        <button onClick={() => changeRoute(5)} className="easy">
          Easy
        </button>
        <button onClick={() => changeRoute(7)} className="medium">
          Medium
        </button>
        <button onClick={() => changeRoute(10)} className="hard">
          Hard
        </button>
      </div>
    </div>
  );
};

export default Discription;