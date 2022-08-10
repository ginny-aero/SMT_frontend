import React, { Component, useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloseButton from 'react-bootstrap/CloseButton';

import TextField from '@mui/material/TextField';
// import ScrapedTendersdtlController from '../scrapedtendersdtlcontroller';
// import UserController from '../usercontroller';
import "./Login.css"

let logincardFlag = true;
// function logincard(props){
//     return{

//     }


// }
const renderErrorMessage = (name) => {

}


    // Changing the state after 2 sec
    // from the time when the component
    // is rendered
    
  
const renderForm = () => {
    return (
        <div className="form" >
            <CloseButton></CloseButton>
            <form className='formWrapper'>
                <div className="input-container">
                    <div className='wrapperLogin'>

                        <Box className='Login-inp'

                        >   <div style={{
                            fontStyle: "font-family: 'Helvetica', 'Arial', sans-serif", textDecoration: "underline",
                            textDecorationColor: "blue"
                        }}><b>Login to your account</b></div>
                            <div className='inpar'><TextField fullWidth label="Mobile No. or Email" id="Mobile No. or Email" /></div>
                            <div className='inpar'><TextField fullWidth label="Password" id="Password" /></div>

                            <br></br>

                        </Box>
                        <br></br>

                    </div>
                </div>
                <div>forgot password?</div>
                <div className='middle'>
                    <Button style={{ marginLeft: "35%", marginBottom: "3%", height: "100%" }} variant="contained" size="large">
                        Login
                    </Button>

                </div>
                <div className='creatacc'>
                    <div style={{ marginLeft: "35%" }}>
                        Create an  account
                        <Button variant="outlined" style={{ marginTop: "0.5vh", marginBottom: "0,5vh" }}>Register as Business</Button>
                        <br></br>
                        <Button variant="contained" style={{ marginTop: "0.5vh", marginBottom: "0,5vh" }}>Register as User</Button>
                    </div>
                </div>

            </form>
        </div>
    )
}
function Navbar() {

    // constructor() {
    //     super();
    //     this.state = {

    //         errorMessages: [],
    //         isSubmitted: false,

    //         name:'',
    //         email:'',
    //         mobile:''

    //     };
    //}

    const [name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

   
     async function f(){
        
        // setEmail("sps@gmail.com");
        // setPassword("Suraj@1234");
        console.log(Email,Password)
        
        let item={Email,Password}
        console.log(item);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({Email:Email,Password:Password})
        };
        // let result=await  fetch('http://localhost:5000/api/login',{
        //     method:'POST',
        //     headers: {
        //         'Accept': 'application/json'
        //     },
        //     mode:'cors',
        //     body:JSON.stringify(item)
            
        // }
        let result =await fetch('http://localhost:5000/api/login', requestOptions)

        result=await result.json()
        console.log(result)
    }
      
    return (
        <>
            <div className="whole-wrapper">

                <div class="container">
                    <div className='Navb'>
                        <div>

                        </div>
                        <nav class="navbar navbar-expand-lg navbar-light">

                            <button class="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <div class="nav-list">


                                    <h4 class="nav-link" >Home</h4>



                                    <h4 class="nav-link" href="#">About us</h4>



                                    <h4 class="nav-link" href="#">Services</h4>


                                    <h4 class="nav-link" href="#">WhyUs</h4>



                                    <h4 class="nav-link" href="#">Pricing</h4>


                                    <h4 class="nav-link" href="#">Contact</h4>



                                    <Button variant="contained" size="small" style={{ marginTop: "1.2vh", height: "70%", marginRight: "0.7vw" }}>
                                        Login
                                    </Button>



                                </div>
                            </div>
                        </nav>
                    </div>

                </div>
                <div className='bodyPage'>

                    <div className='org'>
                        <div className='info-org-slogan'>
                            SEARCH MY
                            <br></br>
                            TENDER PLEASE
                        </div>
                        <br></br>
                        <div className='info-org-desc'>
                            Your one stop solution for a seamless,optimized
                            <br></br>
                            and automated tender searching experience
                        </div>

                    </div>

                    <div className='card-con'>
                        {(logincardFlag) ? <div className="form" >
                            <CloseButton></CloseButton>
                            <form className='formWrapper'>
                                <div className="input-container">
                                    <div className='wrapperLogin'>

                                        <Box className='Login-inp'

                                        >   <div style={{
                                            fontStyle: "font-family: 'Helvetica', 'Arial', sans-serif", textDecoration: "underline",
                                            textDecorationColor: "blue"
                                        }}><b>Login to your account</b></div>
                                            <div className='inpar'><TextField type='email'fullWidth label="Mobile No. or Email" id="Mobile No. or Email" onChange={(e) => setEmail(e.target.value)} /></div>
                                            <div className='inpar'><TextField type='password' fullWidth label="Password" id="Password" onChange={(e) => setPassword(e.target.value)} /></div>

                                            <br></br>

                                        </Box>
                                        <br></br>



                                    </div>
                                </div>
                                <div>forgot password?</div>
                                <div className='middle'>
                                    <Button style={{ marginLeft: "35%", marginBottom: "3%", height: "100%" }} variant="contained" size="large" onClick={f}>
                                        Login
                                    </Button>

                                </div>
                                <div className='creatacc'>
                                    <div style={{ marginLeft: "35%" }}>
                                        Create an  account
                                        <Button variant="outlined" style={{ marginTop: "0.5vh", marginBottom: "0,5vh" }}>Register as Business</Button>
                                        <br></br>
                                        <Button variant="contained" style={{ marginTop: "0.5vh", marginBottom: "0,5vh" }}>Register as User</Button>
                                    </div>
                                </div>

                            </form>
                        </div> : <div ></div>}
                    </div>

                </div>


            </div>
            <div style={{ backgroundColor: "whitesmoke" }}></div>
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
            f()
        </>
    );
}




export default Navbar