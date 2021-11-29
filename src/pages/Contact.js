import React from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label> <br/>
            <input defaultValue="Enter name" {...register("name")} /> <br/>     
            <label>Email</label> <br/>
            <input {...register("emailAddress", { required: true, pattern: /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/ })} /> <br/>
            {errors.exampleRequired && <span>Please enter a valis email address</span>}
            <label>Message</label> <br/>
            <input {...register("message", { required: true })} /><br/>
            {errors.message && <span>This field is required</span>} <br/>
            
            <input type="submit" />
        </form>
    </div> 
  );
}