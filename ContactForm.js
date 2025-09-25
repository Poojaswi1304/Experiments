import React,{useState} from 'react';
import'.app.css';
function App(){
const[fromData,setFormData]=useState({
name:",
email:",
message:"
});
const handleChange=(e)=>{
const{name,value}=e.target;
setFormData(prevState=>({
...prevState,
[name]:value
}));
};
const handleSubmit=(e)=>{
e.preventDefault();
alert(`Form submitted:\nName:${fromData.name}\nEmail:${formData.email}\nMessage:${fromData.message}`);
setFormData({name:",email:",message:"});
};
return(
<div className="form-container">
<h2>Contact Form</h2>
<form onSubmit={handleSubmit}>
<label>Name:</label>
<input)}