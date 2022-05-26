import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import './ByeDetails.css';

const ByeDetails = () => {
    const { Id } = useParams();
    // console.log(Id);
    const [services, setServices] = useState({});
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const [user] = useAuthState(auth);
    // console.log(user);
    // const {_id,name} = services;
    // console.log(services);
    const { _id, name, price, details, img, minimumOrder, stock } = services;

    useEffect(() => {
        // const url = `http://localhost:5000/tools/${Id}`;
        fetch(`http://localhost:5000/tools/${Id}`)
            .then(res => res.json()).then(data => {
                setServices(data);
                
            })
    }, [Id, setServices]);



    
    const [error, setError ] = useState('');
  
    const handleBuy = e => {
        e.preventDefault();
      
        const minimum = e?.target?.minimums?.value;
        const order = e?.target?.order?.value;
        // console.log(error);
        if(minimum >= order){
            return setError('you have should lower from minimum');
        }else{
            // console.log(minimum, order);
        // const booking = {
        //     treatmentId: _id,
        //     product: name,
        //     image:img,
        //     prices:price,
        //     user: user.email,
        //     userName: user.displayName,
        //     availableProducts:availableProduct,
        //     address: e?.target?.address?.value,
        //     phone: e?.target?.phone?.value,
        //     order:e?.target?.order?.value,
        // }
        // fetch('http://localhost:5000/booking',{
        //     method:'POST',
        //     headers:{
        //         'content-type':'application/json',
        //         // "authoraization": `Bearer ${localStorage.getItem('accessToken')}`
        //     },
        //     body:JSON.stringify(booking)
            
        // })
        // .then(res=>res.json()).then(data=>{
        //     console.log(data);
        // })
        }
        
        // toast('you have successfully purchase');
        
    }
    

    return (
        <div className='m-10 details'>
        <div class="card w-96 bg-base-100 shadow-xl m-auto">
            <h1 className='text-balck text-center'>Product Details </h1>
            <figure><img src={img} alt="" /></figure>
            <div class="card-body ">
            <form onSubmit={handleBuy} className='grid grid-cols-1 gap-4 justify-items-center p-4'>
                <h1 className='text-xl font-bold'>Name: {name}</h1>
                    <h3 className="font-bold text-lg text-center text-secondary">Booking for : {Id}</h3>
                    <p className='font-semibold'>Details: {details}</p>
                    <input type="text" value={name} disabled  className="input input-bordered w-full max-w-xs" />
                    <input type="number" placeholder='Phone Number' required   className="from-input input input-bordered w-full max-w-xs" />
                    <input type="email"  name='email' disabled value={user?.email} className="from-input input input-bordered w-full max-w-xs" />
                    <input type="text" name='address' placeholder='Address' required className="from-input input input-bordered w-full max-w-xs" />
                    price
                    <input type="text" name='price' value={price} disabled className="from-input input input-bordered w-full max-w-xs" />
                    stock
                    <input type="text" name='price' value={stock} disabled className="from-input input input-bordered w-full max-w-xs" />
                    minimum Quantity
                    <input type="number" value={minimumOrder} name='minimums' className="from-input input input-bordered w-full max-w-xs" />
                    Order Quantity
                    <input type="number"  name='order' className="from-input input input-bordered w-full max-w-xs" />
                    <h5 className='text-red-500'>{error}</h5>
                   {
                       error ?  <input type="submit" value="Submit" disabled className="btn btn-secondary w-full max-w-xs p" />: <input type="submit" value="Submit" className="btn btn-primary w-full max-w-xs bg-red-400" />
                   }
                        
                </form>


               
               
            </div>
        </div>


        {/* <ToastContainer /> */}
    </div>
);
};


export default ByeDetails;