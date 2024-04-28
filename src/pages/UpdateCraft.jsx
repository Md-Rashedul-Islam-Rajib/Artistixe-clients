
import axios from 'axios';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/AuthProvider';

const UpdateCraft = () => {
    const item = useLoaderData();
    const {
        _id,
        name,
        shortDescription,
        image,
        subCategory,
        price,
        rating,
        customization,
        status,
        userName,
        userEmail,
        proccessingTime
      } = item;
    const {user} = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
        const {name,shortDescription,image,subCategory,price,rating,customization,status,processingTime,userName,userEmail} = data;
        axios.put(`http://localhost:5000/art/${_id}`,{name,shortDescription,image,subCategory,price,rating,customization,status,processingTime,userName,userEmail})
        .then(data=>{
            console.log(data.data);
            if(data?.data?.modifiedCount > 0){
              Swal.fire({
                title: "Good job!",
                text: "Your craft info updated successfully",
                icon: "success"
              });
            }
        }).catch((error) => {
            // An error occurred
            // ...
          });
        
      };
    return (
        <div className="p-16">

    <div className="text-center mb-8">
      <h2 className="text-3xl font-extrabold">Update Craft Item Info</h2>
    </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-4"
      >
        <div>
          <p className="font-bold mb-2">Craft Name</p>
          <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
            <input type="text" className="grow" defaultValue={name} {...register("name", { required: true })} />
            {errors.name && (
              <span className="text-red-600 text-sm">Craft Name is required</span>
            )}
          </label>
        </div>

        <div>
          
          <p className="font-bold mb-2">Sub Category</p>
          
          <select className="input input-bordered flex items-center gap-2 mb-2 md:mb-4 w-full" defaultValue={subCategory} {...register("subCategory", {required: true})}>
        <option>Select Sub Category</option>
        <option value="Landscape Painting">Landscape Painting</option>
        <option value="Portrait Drawing">Portrait Drawing</option>
        <option value="Water Colour Painting">Watercolour Painting</option>
        <option value="Oil Painting">Oil Painting</option>
        <option value="Charcoal Sketching">Charcoal Sketching</option>
        <option value="Cartoon Drawing">Cartoon Drawing</option>
      </select>
      {errors.subCategory && (
              <span className="text-red-600 text-sm">Sub Category is required</span>
            )}
        </div>

        <div>
        <p className="font-bold mb-2">Image URL</p>
          <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
            <input type="text" defaultValue={image} className="grow" {...register("image", { required: true })} />
            {errors.image && (
              <span className="text-red-600 text-sm">Image URL is required</span>
            )}
          </label>
        </div>

        <div>
        <p className="font-bold mb-2">Customization</p>
        <select className="input input-bordered flex items-center gap-2 mb-2 md:mb-4 w-full" defaultValue={customization} {...register("customization", {required: true})}>
        <option>Select Customization Options</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
        
      </select>
            {errors.customization && (
              <span className="text-red-600 text-sm">Customization is required</span>
            )}
          
        </div>

        <div className="col-span-2">
        <p className="font-bold mb-2">Short Description</p>
          <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
            <input type="text" className="grow" defaultValue={shortDescription} {...register("shortDescription", { required: true })} />
            {errors.shortDescription && (
              <span className="text-red-600 text-sm">Short Description is required</span>
            )}
          </label>
        </div>

        <div>
        <p className="font-bold mb-2">Price</p>
          <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
            <input type="text" className="grow" defaultValue={price} {...register("price", { required: true })} />
            {errors.price && (
              <span className="text-red-600 text-sm">Price is required</span>
            )}
          </label>
        </div>

        <div>
        <p className="font-bold mb-2">Rating</p>
          <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
            <input type="text" className="grow" defaultValue={rating} {...register("rating", { required: true })} />
            {errors.rating && (
              <span className="text-red-600 text-sm">Rating is required</span>
            )}
          </label>
        </div>

        

        <div>
        <p className="font-bold mb-2">Status</p>
        <select className="input input-bordered flex items-center gap-2 mb-2 md:mb-4 w-full" defaultValue={status} {...register("status", {required: true})}>
        <option>Select Status</option>
        <option value="In Stock">In Stock</option>
        <option value="Made To Order">Made To Order</option>
        <option value="Out Of Stock">Out Of Stock</option>
        
      </select>
            {errors.status && (
              <span className="text-red-600 text-sm">Status is required</span>
            )}
          
        </div>

        <div>
        <p className="font-bold mb-2">Proccessing Time</p>
          <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
            <input type="text" className="grow" defaultValue={proccessingTime} {...register("proccessingTime", { required: true })} />
            {errors.proccessingTime && (
              <span className="text-red-600 text-sm">Processing Time is required</span>
            )}
          </label>
        </div>

        <div>
        <p className="font-bold mb-2">User Name</p>
          <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
            <input type="text" defaultValue={user? user?.displayName: null} className="grow" {...register("userName", { required: true })} />
            {errors.userName && (
              <span className="text-red-600 text-sm">User Name is required</span>
            )}
          </label>
        </div>

        <div>
        <p className="font-bold mb-2">User Email</p>
          <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
            <input type="text" defaultValue={user? user?.email: null} className="grow" {...register("userEmail", { required: true })} />
            {errors.userEmail && (
              <span className="text-red-600 text-sm">User Email is required</span>
            )}
          </label>
        </div>


            <div className="col-span-2 px-96">

        <button className="btn bg-[#024CB5] text-white w-full">Update Craft</button>
            </div>
      </form>
    </div>
    );
};

export default UpdateCraft;