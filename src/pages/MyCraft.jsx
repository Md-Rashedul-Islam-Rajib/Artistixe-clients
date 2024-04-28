import { useLoaderData } from "react-router-dom";
import MyCraftCard from "../components/MyCraftCard";
import { useState } from "react";

const MyCraft = () => {
  const data = useLoaderData();
  const [crafts,setCrafts] = useState(data)
  return (
    <div className="mt-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold">Add Craft Item</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {crafts.map((item, idx) => (
          <MyCraftCard key={idx} item={item} crafts={crafts} setCrafts={setCrafts}></MyCraftCard>
        ))}
      </div>
    </div>
  );
};

export default MyCraft;
