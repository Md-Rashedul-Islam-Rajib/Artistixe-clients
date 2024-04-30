/* eslint-disable react/prop-types */

import axios from "axios";
import { useContext } from "react";
import { GoStarFill } from "react-icons/go";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthProvider";


const MyCraftCard = ({item,crafts,setCrafts}) => {
  const {theme} = useContext(AuthContext);
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

      const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it'
        }).then((result)=>{
          if(result.isConfirmed){
            axios.delete(`https://assignment-10-server-rho-one.vercel.app/myitems/${userEmail}/${_id}`)
        .then(data => {
          console.log(data.data)
          if(data.data.deletedCount > 0){

            Swal.fire({
              title: "Deleted!",
              text: "Your craft deleted successfully!",
              icon: "success"
            })
           
          }
        })
        const remaining = crafts.filter((craft)=>craft._id !== _id);
        setCrafts(remaining);
          }
        });
        
      }

    return (
        <div className="flex justify-center">
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="flex flex-col grow gap-3 p-6">
    <h2 className="card-title">{name}</h2>
    <p>{subCategory}</p>
    <p>{shortDescription.slice(0,100)}</p>
    <div className="flex justify-between">
      <p>Price :{price}</p>
      <p className="flex items-center gap-1"> <span>Rating :{rating}</span> < GoStarFill className="text-[#E19756]" /></p>
    </div>
      <p>Proccessing Time : {proccessingTime}</p>
    <div className="card-actions justify-between">
    <Link to={`/craftdetails/${_id}`}><button className={`btn text-white btn-ghost btn-sm ${theme=='luxury'? 'bg-[#DCA54C]':'bg-[#044FB2]'}`}>View Details</button></Link>
    <button onClick={()=> handleDelete(_id)} className={`btn text-white btn-ghost btn-sm ${theme=='luxury'? 'bg-[#DCA54C]':'bg-[#044FB2]'}`}>Delete</button>
    <Link to={`/updatecraft/${_id}`}><button className={`btn text-white btn-ghost btn-sm ${theme=='luxury'? 'bg-[#DCA54C]':'bg-[#044FB2]'}`}>Update</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default MyCraftCard;