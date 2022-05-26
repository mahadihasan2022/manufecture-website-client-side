import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserDataProvider } from '../../App';


const AddReview = () => {

    const [user] = useContext(UserDataProvider)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch(`http://localhost:5000/comments`,{
            method: 'POST',
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                comment: data.comment
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                if(data?.insertedId){
                    alert("Your comment sent successfully!!!");
                    reset();
                }
            })
    };
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/comments`)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])


    


    return (
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label for="name">Name</label>
            <input defaultValue={user.name} {...register("name")} className="form-control" placeholder="Enter Name" /><br></br>
            {errors.name && <span>This field is required</span>}


            <label htmlFor="email">Email</label>
            <input defaultValue={user.email} {...register("email")} className="form-control" placeholder="Enter Email" /><br></br>
            {errors.email && <span>This field is required</span>}
            
            <label htmlFor="comment">Comment</label>
            <textarea {...register("comment", { required: true })} className="form-control" placeholder="Enter Your comment"/>
            {errors.comment && <span>This field is required</span>}

           <div className='text-center p-4'> <input className='btn btn-primary ' type="submit" /></div>
        </form>
        <div className='row p-8'>
            {
                comments.map(comment => <div key={comment._id} className='col-md-4 mt-2' > 
                  <div style={{border:'1px solid black', borderRadius: 10 ,padding:10}}>
                  <h4 style={{color: 'blue'}}>{comment.name}</h4>
                    <h6><i>{comment.email}</i></h6>
                    <p>{comment.comment}</p> 
                  </div>
                </div>)
            }
        </div>

        
    </div>
)
};

export default AddReview;