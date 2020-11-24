import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from './components/Navbar';
import FormField from './components/FormField';
import CoolButton from './components/CoolButton';
import Signup from './components/signUp';

const App = () => {
  return (
    <div className="container">
    {/*
    <Navbar />
        <div className="forms">
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        </div>
        <div className="sign-up">
          <a href="/components/sign-up"><CoolButton isSmall isSuccess title="Sign Up">Sign Up</CoolButton></a>
        </div>
        */}
        <Signup />
    </div>    
    
  );
};

export default App;
