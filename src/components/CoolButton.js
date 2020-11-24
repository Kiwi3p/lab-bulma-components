import React from 'react';
import 'bulma/css/bulma.css';

const CoolButton = props => {
    return (
      <div className="button-container">
             {/* || && 
             truthy || falsy will return first truthy value
             truthy && falsy will return false if both arent true
             truthy && truthy will return the last truthy value
             condition = true ? return this value if its truthy : return this is value is falsy
             */}
            <button className={`button ${props.isSmall === true ? 'is-small' : ''} ${props.isDanger === true ? 'is-danger' : 'is-success'} ${props.className}`}>{props.title}</button>
      </div>    
    );
  };

export default CoolButton;
