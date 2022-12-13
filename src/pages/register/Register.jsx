import React from 'react'
import Layout from '../../layout/Layout'
import "../register/register.css";

const Register = () => {
  return (
    <div>
      <Layout>
        <div className="register-section">
        <div className="container register-container">
          <div className="register-h1">
            <h1>register form</h1>
          </div>
          <form action="" className='register-form'>
            <div className="register-3">
              <input type="text" id='name' name='name' placeholder='first name' required/>
            </div>
            <div className="register-3">
              <input type="text" id='name' name='name' placeholder='last name' required/>
            </div>
            <div className="register-3">
              <input type="email" id='email' name='email' placeholder='enter your email' required />
            </div>
            <div className="register-3">
              <input type="password" id='password' name='password' placeholder='enter your password' required />
            </div>
            {/* <div className='lorem'>
              <div className="box"></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, omnis. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, provident!</p>
            </div>
            <div className='lorem'>
              <div className="box"></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, omnis. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, provident!</p>
            </div> */}
            <div className="register-button">
              <input type="submit" value={"register"} />
            </div>
          </form>
        </div>
        </div>
      </Layout>
    </div>
  )
}

export default Register
