import React, { Component, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./Register.css"
function Register() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mb, setMb] = useState("");





  async function f() {

    // setEmail("sps@gmail.com");
    // setPassword("Suraj@1234");
    // console.log(Email,Password)

    // // let item={Email,Password}
    // console.log(item);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({

        Email: email,
        name: fname,
        Lname: lname,
        MobileNo: mb,
        Password: password,
        PasswordConf: password


      })
    };
    // let result=await  fetch('http://localhost:5000/api/login',{
    //     method:'POST',
    //     headers: {
    //         'Accept': 'application/json'
    //     },
    //     mode:'cors',
    //     body:JSON.stringify(item)

    // }
    let result = await fetch('http://localhost:5000/api/login', requestOptions)

    result = await result.json()
    console.log(result)
  }
  return (
    <>
      
        <div className='Navb'>
          <div>

          </div>
          <nav class="navbar navbar-expand-lg navbar-light">



            
              <div class="nav-list">


                <h4 class="nav-link" >Home</h4>



                <h4 class="nav-link" href="#">About us</h4>



                <h4 class="nav-link" href="#">Services</h4>


                <h4 class="nav-link" href="#">WhyUs</h4>



                <h4 class="nav-link" href="#">Pricing</h4>


                <h4 class="nav-link" href="#">Contact</h4>



                <Button variant="contained" size="small" style={{ marginTop: "1.2vh", height: "70%" }}>
                  Login
                </Button>



              </div>
            
          </nav>
        

      </div>
      <div className='register-body'>Register
        <div className='reg-card'>
          <div style={{ position: "absolute", marginTop: "2rem" }}>
            <div style={{ margin: "1vh", display: "flex" }} >
              <b style={{ float: "left" }}> Register Now!</b>
              <div></div>
              <div style={{ float: "right" }}>

              </div>
            </div>
            <div className='info-reg'>

              <div>
                <TextField

                  id="outlined-textarea"
                  label="first name"
                  defaultValue=""
                  style={{ padding: "0.5%", width: "47%", height: "5%" }}
                  onChange={(e) => setFname(e.target.value)}
                />
                <TextField

                  id="outlined-textarea"
                  label="last name"
                  defaultValue=""
                  style={{ padding: "0.5%", width: "47%", height: "5%" }}
                  onChange={(e) => setLname(e.target.value)}
                />

              </div>
              <div>
                <TextField

                  id="outlined-textarea"
                  label="Email"
                  defaultValue=""
                  style={{ padding: "0.5%", width: "47%", height: "5%" }}
                  onChange={(e) => setEmail(e.target.value)}

                />
                <Button variant="contained">Contained</Button>
              </div>
              <div>
                <TextField

                  id="outlined-textarea"
                  label="Mobile no."
                  defaultValue=""
                  style={{ padding: "0.5%", height: "5%", width: "100%" }}
                  onChange={(e) => setMb(e.target.value)}
                />
              </div>
              <div>
                <TextField

                  id="outlined-textarea"
                  type='password'
                  label="password"
                  defaultValue=""
                  style={{ padding: "0.5%", height: "5%", width: "100%" }}

                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div style={{ margin: "0.8vh", marginLeft: "1.7vh" }}>
                <Button variant="outlined" style={{ width: "100%", paddingTop: "3%", marginTop: "5%" }} onClick={f}  >Register</Button>
              </div>


            </div>
          </div>
        </div>
      </div>
      <footer class="footer-bs">
        <div class="row">
          <div class="col-md-3 footer-brand animated fadeInLeft">
            <h2>Logo</h2>
            <p>Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam porttitor vitae orci nec ultricies. Curabitur vehicula, libero eget faucibus faucibus, purus erat eleifend enim, porta pellentesque ex mi ut sem.</p>
            <p>© 2014 BS3 UI Kit, All rights reserved</p>
          </div>
          <div class="col-md-4 footer-nav animated fadeInUp">
            <h4>Menu —</h4>
            <div class="col-md-6">
              <ul class="pages">
                <li><a href="#">Travel</a></li>
                <li><a href="#">Nature</a></li>
                <li><a href="#">Explores</a></li>
                <li><a href="#">Science</a></li>
                <li><a href="#">Advice</a></li>
              </ul>
            </div>
            <div class="col-md-6">
              <ul class="list">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contacts</a></li>
                <li><a href="#">Terms & Condition</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-2 footer-social animated fadeInDown">
            <h4>Follow Us</h4>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">RSS</a></li>
            </ul>
          </div>
          <div class="col-md-3 footer-ns animated fadeInRight">
            <h4>Newsletter</h4>
            <p>A rover wearing a fuzzy suit doesn’t alarm the real penguins</p>
            <p>
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Search for..."></input>
                <span class="input-group-btn">
                  <button class="btn btn-default" type="button"><span class="glyphicon glyphicon-envelope"></span></button>
                </span>
              </div>
            </p>
          </div>
        </div>
      </footer>
    </>


  )
}

export default Register;