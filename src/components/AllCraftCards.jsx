/* eslint-disable react/prop-types */
import { GoStarFill } from "react-icons/go";
import { Link } from "react-router-dom";

const AllCraftCards = ({ item }) => {
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
  
  return (
  
      <tr className='text-center'>
        
        <td>
          <div className="flex items-center gap-3 justify-center">
            <div className="avatar">
              <div className="mask mask-squircle w-16 h-16">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{subCategory}</div>
            </div>
          </div>
        </td>
        <td>
          {price}
          <br/>
          <p className="mt-2 badge-sm flex items-center justify-center gap-1"> <span>{rating}</span> < GoStarFill className="text-[#E19756]" /></p>
        </td>
        <td>{status}</td>
        <th>
          <Link to={`/craftdetails/${_id}`}><button className="btn btn-ghost btn-xs">View Details</button></Link>
        </th>
      </tr>






      
     
    
  );
};

export default AllCraftCards;
