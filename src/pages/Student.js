import React from "react";

const Student = (props) => {
    console.log(props);
    return(
        <>
        <h2>Student Information</h2>
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <p>Course: {props.course}</p>
        </>
    );
}

export default Student;