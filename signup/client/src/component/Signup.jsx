import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Signup = () => {
  const [signup, setsignup] = useState({
    name: "",
    surname: "",
    password: ""
  
  });

  useEffect(() => {
    getsignup();
  }, []);

  const getsignup = async  () =>{
    try {
      const response = await axios.fetch('https://api.openai.com/');
      console.log(response.data);
    } catch (error) {
      console.error('Error', error);
    }
  };

  const handleChange = (e) => {
    setsignup({
      ...signup,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("name:",signup.name, "surname:", signup.surname, "password:", signup.password);

    try {
      await axios.post('https://api.openai.com/', signup);
      console.log('User successfully created!');
      getsignup();
    } catch (error) {
      console.error('Error creating user:', error);
    }


    
  };

  return (
    <div className='signup'>

      <h1>Signup</h1>
      <p>Please fill in your information...</p>
      <div className="form">
        <form>
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="form-control"
            onChange={(e) => handleChange(e)}
            id="name"
            value={signup.name}
          />
          <br />

          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            name="surname"
            placeholder="Enter your surname"
            className="form-control"
            onChange={(e) => handleChange(e)}
            id="surname"
            value={signup.surname}
          />
          <br />

          <label htmlFor="password">password </label>
          <input
            type="text"
            name="password"
            placeholder="Enter your password"
            className="form-control"
            id="password"
            value={signup.password}
            onChange={(e) => handleChange(e)}
          />
          <br />

      

          <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>
            Signup
          </button>
          <br />
         
        </form>
      </div>
    </div>
  );
};

export default Signup;