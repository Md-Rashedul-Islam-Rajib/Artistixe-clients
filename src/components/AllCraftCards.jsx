/* eslint-disable react/prop-types */
import { GoStarFill } from "react-icons/go";

const AllCraftCards = ({ item }) => {
  const {
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
    <div>
      <div className="card w-96 glass">
        <figure>
          <img
            src={image}
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{shortDescription}</p>

            <div className="flex justify-between">
                <div className="flex flex-col gap-4">
                    <p>{subCategory}</p>
                    <p>{proccessingTime} hours</p>
                </div>
                <div className="flex flex-col gap-4">
                    <p>{price}</p>
                    <p className="flex items-center gap-1">{rating}< GoStarFill className="text-[#E19756]" /></p>
                </div>
            </div>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCraftCards;
