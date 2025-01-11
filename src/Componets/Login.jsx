import './Login.css'
import { useState } from 'react';

function Login()
{  
    let [cre,setCre]=useState({email:"",password:""});

    function HandleLoginDetails(event)
    {
        setCre((pre)=>
        {
            return {...pre,[event.target.name]:event.target.value}
        })
    }



    function HandleLogin()
    {
            
        if(cre.email=="")
            {
                alert("Please Enter Email.")
                return
                
            }



            if(cre.password=="")
                {
                    alert("Please Enter password.")
                    return
                    
                }

                if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(cre.email)) {
                    alert("Please Enter a valid Email address");
            
                    return
                }



            fetch("https://localhost:8000/Login", {
                method: "POST",
                body: JSON.stringify(cre),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then((res) => res.json())  // First then converts response to JSON
            .then((data) => {
                console.log(data);  // Handle the response data here
            })
            .catch((error) => {
                console.log(error);  // Handle any errors
            });
        ///please write logic on loin or not 
    }
    return(

        <section className="Login-parent">
            <form className="Login">
                <h1>Login To Fitness</h1>
                
                <input className="Linput" type="email" name="email" placeholder="Enter Email" onChange={HandleLoginDetails}></input>
                <input className="Linput" type="password" name="password" placeholder="Enter Password" onChange={HandleLoginDetails}></input>
                <button className="Lbtn" onClick={HandleLogin} type='button'>Login</button>
                <br></br>
                <p className="Ralready">Not Registerd ? <a href="/Register">Register</a></p>
            </form>
        

        </section>
    )
}


export default Login;