import React from 'react';
import 'bulma/css/bulma.css';
import CoolButton from './CoolButton';
import FormField from './FormField';
import Navbar from './Navbar';

const Signup = () => {
  return (
<div className="sign-up">
          <Navbar />
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          <FormField label="Password" type="password" placeholder="enter password" />
          <CoolButton isSmall isDanger className="is-rounded my-class" title="Submit">Submit</CoolButton>
        </div>
        );
    };
    
    export default Signup;
      