import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Sidebar from '../../DashBoard/Sidebar/Sidebar';

const AddService = () => {
    const[loggedInUser,setLoggedInUser] = useContext(UserContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const[imageUrl,setImageUrl] = useState(null)
    const[disabled,setDisabled] = useState(true)
    const onSubmit = data =>{
        console.log('data',data);
        const productData ={
            title:data.example,
            description:data.exampleRequired,
            imageUrl:imageUrl,
            email:loggedInUser.email
        }
        console.log(productData)
        fetch('https://rocky-everglades-73892.herokuapp.com/addService',{
            method:'POST',
            headers :{
                'Content-Type': 'application/json',
            },
            body : JSON.stringify(productData)
        })
        data=""
    }
    const handleSubmitPhoto = e =>{
        console.log(e.target.files[0])
        const ImageData = new FormData();
        ImageData.set('key','f2564a62479948fc6a599904cfee69b5');
        ImageData.append('image', e.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', 
            ImageData
          )
          .then(function (response) {
            console.log(response.data.data.display_url);
            setImageUrl(response.data.data.display_url);
            if(response.data.data.display_url){
                setDisabled(false)
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    
    }
    return (
        <section className="container-fluid row">
            <div className="col-md-3 px-0 mx-0 ">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-6 px-5 my-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                    <input type="text"  name="name" className="form-control" placeholder="Title" defaultValue="test " {...register("example")} />
                    </div>
                    <div className="mb-3">
                        <input type="text" name="details" className="form-control" cols='20' rows="10" defaultValue="test " placeholder="message"  {...register("exampleRequired", { required: true })} />
                    </div>
                    <div className="mb-3">
                    <input name="addPhoto" type="file"  onChange={handleSubmitPhoto}/>
                    </div>
                    
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input type="submit"  disabled={disabled}/>
                </form>
            </div>
            
        </section>
       
    );
};

export default AddService;