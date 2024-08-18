import React from "react";

const name="Davda Utsav"
const dob="30/10/2004"
const age="20 years"
const email="dutsav171@gmail.com"
const mobile="9974455375"
const graduation="Computer Engineering"

function BioData() {
    return (
    <>
    <h3>About Davda Utsav</h3>
    <div style={{width:"50%"}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3HdBqVDU45zUIDYvJbH1QE2kosJ0VrH0KEXee3n33PnskjPbyvDAUWYrChTGjCXHA2cc&usqp=CAU" alt="Utsav" style={{width:"30%", height:"150px"}} />
    </div>
    <p><b>Name:</b> {name} </p>
    <p><b>DOB:</b> {dob} </p>
    <p><b>Age:</b> {age} </p>
    <p><b>Email:</b> <a href="{email}">{email}</a> </p>
    <p><b>Mobile No:</b> {mobile} </p>
    <p><b>Graduation:</b> {graduation} </p>
    </>
)
}
export default BioData