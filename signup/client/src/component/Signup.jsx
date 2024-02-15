import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Signup = () => {
  const [signup, setSignup] = useState({
    name: "",
    surname: "",
    password: ""
  
  });
 
  const apiKey = "https://api.openai.com/v1/completion";

  useEffect(() => {
    getsignup();
  }, []);

  const getsignup = async  () =>{
    try {
      const response = await axios.fetch('https://api.openai.com/v1/completion');
      console.log(response.data);
    } catch (error) {
      console.error('Error', error);
    }
  };

  const handleChange = (e) => {
    setSignup({
      ...signup,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("name:",signup.name, "surname:", signup.surname, "password:", signup.password);

  //   try {
  //     await axios.post('https://api.openai.com/v1/signup/Emily/completions',signup);

      
  //     console.log('User successfully created!');
  //     getsignup();
  //   } catch (error) {
  //     console.error('Error creating user:', error);
    
    
  // };


  const handleRequest = async () => {
    try {
      const signup= await axios.post(
        'https://api.openai.com/v1/completion',
        {
          model:"gpt-3.5-turbo",
          prompt: 'What gift should I buy for christmas?',
          max_tokens: 50
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          }
        }
      );

      setSignup(signup.data.choices[0].text);
    } catch (error) {
      console.error('Error:', error.signup.data);
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
};
export default Signup;