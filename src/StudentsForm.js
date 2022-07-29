import React from "react";
import"../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react";
import { create } from "./ArrayValues";

export const Sform=()=>
{

    //const[values,setValue]=useState
    //{
    //}
    const[person,setPerson]=useState({
        "stuName":"",
        "stuDob":"",
        "stuAdd":"",
        "stuMail":"",
        "stuMob":0,
        "stuCourse":"",
        "stuPay":"",
        "stuSkills":new Array()
    })

    const tracky=(obj)=> //store a array values
    {
      const{value}=obj.target
      person.stuSkills.push(value)
    }
    const track=(nisha)=>
    {
        const{name,value}=nisha.target
        setPerson(
            (old)=>
            {
                return{
                    ...old,
                    [name]:value
                }
            }
        )
    }
    
    const reg=()=>{
        //alert(' Welcome to Infotech')
        //alert('Sucessfully Registered'+JSON.stringify(person))
        create(person)
    }
    const remove=()=>{
        alert("Rejected")
    }
    const imgsrc={
        height:'100px',
        width:'280px'
    }
    const change={
        fontFamily:'Comic Sans MS'
    }
    return(
        <>
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="="col-lg-8 col-md-10 col-sm-12 card bg-light>
                    <div className="card-body text-dark text-center">
                        <img src="../Images/infotechLogo.png" alt="" className="card-img" style={imgsrc}></img>
                        <h1 style={change} className="text-primary text-center">INFOTECH SOLUTIONS</h1>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12">
                    <h4 className="mt-3 text-center">PERSONAL INFORMATION</h4>
                    <div className="form-group mt-2">
                        <label>Name</label>
                        <input
                        type="text"
                        name="stuName"
                        onChange={track}
                        value={person.stuName}
                        placeholder="Enter your Name"
                        className="form-control"
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label>DOB</label>
                        <input type="Date"
                        name="stuDob"
                        onChange={track}
                        value={person.stuDob}
                        className="form-control"
                        />
                    </div>
                    <h4 className="mt-2 text-center">CONTACT INFORMATION</h4>
                    <div className="form-group mt-1">
                        <label>Address</label>
                        <textarea
                        name="stuAdd"
                        onChange={track}
                        value={person.stuAdd}
                        placeholder="Tell us your current address"
                        className="form-control"
                        />
                    </div>
                    <div className="form-group mt-1">
                        <label>MailID</label>
                        <input type="email"
                        name="stuMail"
                        onChange={track}
                        value={person.stuMail}
                        placeholder="abcdef1234@gmail.com"
                        className="form-control"
                        />
                    </div>
                    <div className="form-group mt-1">
                        <label>MobileNumber</label>
                        <input type="number"
                        name="stuMob"
                        onChange={track}
                        value={person.stuMob}
                        placeholder="tell us your current Mobile Number"
                        className="form-control"
                        />
                    </div>
                    <h4 className="text-center">COURSE INFORMATION</h4>
                    <div className="form-group mt-1">
                        <label>CourseName</label>
                        <input type="text"
                        name="stuCourse"
                        onChange={track}
                        value={person.stuCourse}
                        placeholder="tell your course details"
                        className="form-control"
                        />
                    </div>
                    <div className="form-group mt-1">
                        <label>PaymentDetails</label>
                        <br/>
                        <input type="radio" onChange={track} name="stuPay" value={person.stuPay} className="ms-2" />Cash
                        <input type="radio" onChange={track} name="stuPay" value={person.stuPay} className="ms-2" />Card
                        <input type="radio" onChange={track} name="stuPay" value={person.stuPay} className="ms-2" />Cheque
                    </div>
                    <div className="form-group mt-1">
                        <label>LanguagesKnown</label>
                        <br/>
                        <input type="checkbox" onChange={tracky} name="stuSkills" value="Tamil" className="ms-5"/>Tamil
                        <input type="checkbox" onchange={tracky} name="stuSkills" value="English" className="ms-5"/>English
                    </div>
                    <div className="text-center mt-2">
                        <button onClick={reg} className="btn btn-outline-success col-5 ms-4">Register</button>
                        <button onClick={remove} className="btn btn-outline-warning col-5 ms-4">Cancel</button>

                    </div>

                </div>
            </div>
        </div>
        
        </>
    )
}