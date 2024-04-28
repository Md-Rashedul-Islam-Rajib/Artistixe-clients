/* eslint-disable react/prop-types */
import { GoStarFill } from "react-icons/go";
import { Link } from "react-router-dom";


const SubCategoryCard = ({item}) => {
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
        <div className="flex justify-center">
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="flex flex-col gap-3 p-6">
    <h2 className="card-title">{name}</h2>
    <p>{subCategory}</p>
    <p>{shortDescription.slice(0,100)}</p>
    <div>
      <p>Price :{price}</p>
      <p className="flex items-center gap-1"> <span>Rating :{rating}</span> < GoStarFill className="text-[#E19756]" /></p>
      <p>Proccessing Time : {proccessingTime}</p>
    </div>
    <div className="card-actions justify-end">
    <Link to={`/craftdetails/${_id}`}><button className="btn btn-ghost btn-xs">View Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default SubCategoryCard;