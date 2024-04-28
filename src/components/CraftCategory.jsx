import { useLoaderData } from "react-router-dom";
import CategoryCard from "./CategoryCard";

const CraftCategory = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="mt-16 mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold">Art & Craft Categories</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
      {data.map((item, idx) => (
        <CategoryCard key={idx} item={item}></CategoryCard>
      ))}
      </div>
    </div>
  );
};

export default CraftCategory;
