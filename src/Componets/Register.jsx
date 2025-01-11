import { useState } from "react";
function Register()
{

  let [details,setDetails]=useState({name:"",email:"",password:"",age:""})

 function InputHandler(event)
{
   setDetails((prev)=>
{
    return {...prev,[event.target.name]:event.target.value}
})
}


function HandleR()
{
    if(details.name=="" | details.email=="" | details.password=="" | details.age=="" )
    {
        alert("Please fill requered fields")
        return
        
    }

    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(details.email)) {
        alert("Please Enter a valid Email address");

        return
    }

    function HandleR() {
        fetch("https://localhost:8000/register", {
            method: "POST",
            body: JSON.stringify(details),
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
    }
    
    



}


    return(

        <section className="form-parent">
            <form className="form">
                <h1>Lets Start Fitness</h1>
                <input className="input" type="text" name="name" placeholder="Enter Name" required onChange={InputHandler}></input>
                <input className="input" type="email" name="email" placeholder="Enter Email" required onChange={InputHandler}></input>
                <input className="input" type="password" name="password" placeholder="Enter Password" required onChange={InputHandler}></input>
                <input className="input" type="age" name="age" placeholder="Enter Age" required onChange={InputHandler}></input>
                <button className="btn" onClick={HandleR} type="button">Join</button>
                <br></br>
                <p className="already">Already Registered ? <a href="/Login">Login</a></p>
                
            </form>
        

        </section>
    )
}


export default Register;