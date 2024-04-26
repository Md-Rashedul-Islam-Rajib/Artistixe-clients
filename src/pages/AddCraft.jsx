import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';


const AddCraft = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const {name,category,image,subCategory,price,rating,customization,status,processingTime,userName,userEmail} = data;
    axios.post('http://localhost:5000/art',{name,category,image,subCategory,price,rating,customization,status,processingTime,userName,userEmail})
    .then(data=>{
        console.log(data.data);
    }).catch((error) => {
        // An error occurred
        // ...
      });
    Swal.fire({
        title: "Good job!",
        text: "Your craft added successfully",
        icon: "success"
      });
  };
  return (
    <div className="p-16">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-4"
      >
        <div>
          <p className="mb-2">Craft Name</p>
          <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
            <input type="text" className="grow" {...register("name")} />
            {errors.name && (
              <span className="text-red-600 text-sm">Craft Name is required</span>
            )}
          </label>
        </div>

        <div>
          <p className="mb-2">Category</p>
          <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
            <input type="text" className="grow" {...register("category")} />
            {errors.category && (
              <span className="text-red-600 text-sm">Category is required</span>
            )}
          </label>
        </div>

        <div>
        <p className="mb-2">Image URL</p>
          <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
            <input type="text" className="grow" {...register("image")} />
            {errors.image && (
              <span className="text-red-600 text-sm">Image URL is required</span>
            )}
          </label>
        </div>

        <div>
        <p className="mb-2">Sub-category</p>
          <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
            <input type="text" className="grow" {...register("subCategory")} />
            {errors.subCategory && (
              <span className="text-red-600 text-sm">Sub Category is required</span>
            )}
          </label>
        </div>

        <div>
        <p className="mb-2">Price</p>
          <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
            <input type="text" className="grow" {...register("price")} />
            {errors.price && (
              <span className="text-red-600 text-sm">Price is required</span>
            )}
          </label>
        </div>

        <div>
        <p className="mb-2">Rating</p>
          <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
            <input type="text" className="grow" {...register("rating")} />
            {errors.rating && (
              <span className="text-red-600 text-sm">Rating is required</span>
            )}
          </label>
        </div>

        <div>
        <p className="mb-2">Customization</p>
          <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
            <input type="text" className="grow" {...register("customization")} />
            {errors.customization && (
              <span className="text-red-600 text-sm">Customization is required</span>
            )}
          </label>
        </div>

        <div>
        <p className="mb-2">Status</p>
          <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
            <input type="text" className="grow" {...register("status")} />
            {errors.status && (
              <span className="text-red-600 text-sm">Status is required</span>
            )}
          </label>
        </div>

        <div>
        <p className="mb-2">Proccessing Time</p>
          <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
            <input type="text" className="grow" {...register("proccessingTime")} />
            {errors.processingTime && (
              <span className="text-red-600 text-sm">Processing Time is required</span>
            )}
          </label>
        </div>

        <div>
        <p className="mb-2">User Name</p>
          <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
            <input type="text" className="grow" {...register("userName")} />
            {errors.userName && (
              <span className="text-red-600 text-sm">User Name is required</span>
            )}
          </label>
        </div>

        <div className="">
        <p className="mb-2">User Email</p>
          <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
            <input type="text" className="grow" {...register("userEmail")} />
            {errors.userEmail && (
              <span className="text-red-600 text-sm">User Email is required</span>
            )}
          </label>
        </div>


            <div className="col-span-2 px-96">

        <button className="btn bg-[#024CB5] text-white w-full">Add Craft</button>
            </div>
      </form>
    </div>
  );
};

export default AddCraft;
