
import { useLoaderData } from 'react-router-dom';
import AllCraftCards from '../components/AllCraftCards';

const AllCraft = () => {
    const data = useLoaderData();
    return (
        <div className="p-16">
            <div className="text-center mb-8">
      <h2 className="text-3xl font-extrabold">All Craft Items</h2>
    </div>

            <div >
            <div className="overflow-x-auto">
  <table className="table">
   
    <thead>
      <tr className='text-center'>
        
        <th> Craft Name</th>
        <th>Price with rating</th>
        <th>Availability</th>
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