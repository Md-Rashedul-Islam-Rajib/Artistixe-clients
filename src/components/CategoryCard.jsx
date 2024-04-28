/* eslint-disable react/prop-types */


const CategoryCard = ({item}) => {
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
        <div className="flex justify-center">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{subCategory}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View All</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default CategoryCard;