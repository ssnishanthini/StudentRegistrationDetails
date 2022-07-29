import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { list } from "./ArrayValues";
import { Sform } from "./StudentsForm";

export const Display=()=>{
    const[tmparray,setTmparray]=useState([])
    const[createview,setcreateview]=useState(false)
    const add=()=>
    {
        setTmparray(list())
    }
    useEffect(()=>
    {
        add()
    })
    return (
        <>
        <div className="container mt-3">
            {(createview)?
            <>
            <Sform/>
            <button className="btn btn-outline-danger"
            onClick={()=>
                {
                    setcreateview(false)
                }
            }>
                back
            </button>
            </>
            :
            <>
            <button className="btn btn-outline-success"
            onClick={()=>
            {
                setcreateview(true)
            }}>
                NewRegistration
            </button>
            </>
            }
            </div>
            <h1 className="text-center text-light bg-secondary mt-5">Student Details</h1>
            <div className="row justify-content-center">
                <div className="table-responsive-md">
                    <table className="col-lg-8 col-md-10 col-sm-12 p-3 table table-striped shadow rounded">
                        <thead>
                            <tr className="text-dark">
                                <th>Name</th>
                                <th>DOB</th>
                                <th>Address</th>
                                <th>MailID</th>
                                <th>MobileNumber</th>
                                <th>CourseDetails</th>
                                <th>PaymentDetails</th>
                                <th>LanguagesKnown</th>
                            </tr>
                                {tmparray.map((obj1)=>
                                (
                                    <tr>
                                    <td>{obj1.stuName}</td>
                                    <td>{obj1.stuDob}</td>
                                    <td>{obj1.stuAdd}</td>
                                    <td>{obj1.stuMail}</td>
                                    <td>{obj1.stuMob}</td>
                                    <td>{obj1.stuCourse}</td>
                                    <td>{obj1.stuPay}</td>
                                    <td>{obj1.stuSkills}</td>
                                    </tr>
                                ))}
                        </thead>
                    </table>
                </div>
            </div>
        </>
    )
}