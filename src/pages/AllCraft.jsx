
import { Link, useLoaderData } from 'react-router-dom';
import AllCraftCards from '../components/AllCraftCards';
import { IoMdArrowRoundBack } from 'react-icons/io';

const AllCraft = () => {
    const data = useLoaderData();
    return (
        <div className="md:p-8">

<p className="my-4 text-xs lg:text-base"> <Link to='/' className="flex items-center"><IoMdArrowRoundBack /> <span className="font-semibold"> All Craft /</span> Home</Link> </p>
            <div className="text-center mb-8">
      <h2 className="text-3xl font-extrabold">All Craft Items</h2>
    </div>

            <div >
            <div className="overflow-x-auto">
  <table className="table">
   
    <thead>
      <tr>
        
        <th> Craft Name</th>
        <th>Price with rating</th>
        <th className='hidden md:grid'>Availability</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {data.map((item,idx)=><AllCraftCards key={idx} item={item}></AllCraftCards>)}
    
      
    </tbody>
  
    
    
  </table>
</div>
           
            </div>
        </div>
    
    );

};

export default AllCraft;