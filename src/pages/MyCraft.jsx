import { Link, useLoaderData } from "react-router-dom";
import MyCraftCard from "../components/MyCraftCard";
import { useContext, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import axios from "axios";
import { AuthContext } from "../context/AuthProvider";

const MyCraft = () => {
  const {user} = useContext(AuthContext);
  const useremail = user.email;
  console.log(useremail);
  const data = useLoaderData();
  const [crafts,setCrafts] = useState(data);
// const res = crafts.filter(item=> item.customization =="No");
// console.log(res);


// filter method via backend
const handleFilter = (event) => {
  const response = event.target.value;
  if(response == "Yes"){
    axios.get(`https://assignment-10-server-rho-one.vercel.app/myitems/${useremail}/customization_value_yes`)
    .then(result => {
      console.log(result.data);
      const filterByYes = result.data;
      setCrafts(filterByYes)
    })
  }
  if(response == "No"){
    axios.get(`https://assignment-10-server-rho-one.vercel.app/${useremail}/customization_value_no`)
    .then(result => {
      console.log(result.data);
      const filterByNo = result.data;
      setCrafts(filterByNo)
    })
  }
  if(response == "Default"){
    axios.get(`https://assignment-10-server-rho-one.vercel.app/myitems/${useremail}`)
    .then(result => {
      console.log(result.data);
      const unfilteredData = result.data;
      setCrafts(unfilteredData)
    })
  }
}










// filter method via frontend

  // const handleFilter = (event) => {
  //   const response = event.target.value;
  //   if(response == "Yes"){
  //     const filteredDataTrue = crafts.filter(item=> item.customization =="Yes");
  //     setCrafts(filteredDataTrue);
  //     console.log(filteredDataTrue);
  //   }
  //    if (response == "No") {
  //     const filteredDataFalse = crafts.filter(item=> item.customization =="No");
  //     setCrafts(filteredDataFalse);
  //     console.log(filteredDataFalse);
  //   }
  // }
  return (
    <div className="mt-16">


<p className="my-4 text-xs lg:text-base">
   <Link to='/' className="flex items-center">
    <IoMdArrowRoundBack /> <span className="font-semibold"> My Crafts /</span> Home</Link>
     </p>


      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold">My Craft Items</h2>
      </div>



              <div>
              <select onChange={handleFilter} className="select select-accent">
                <option value="Default">Customization</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                
              </select>
              </div>



      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 gap-6">
        {crafts.map((item, idx) => (
          <MyCraftCard key={idx} item={item} crafts={crafts} setCrafts={setCrafts}></MyCraftCard>
        ))}
      </div>
    </div>
  );
};

export default MyCraft;
