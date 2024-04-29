
import { GoStarFill } from 'react-icons/go';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link, useLoaderData } from 'react-router-dom';

const CraftDetails = () => {
    const craft = useLoaderData();
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
      } = craft;

    return (
        <div>

<p className="my-4"> <Link to='/' className="flex items-center"><IoMdArrowRoundBack /> <span className="font-semibold"> Craft details /</span> Home</Link> </p>
            <div className='flex justify-center '>
                <img className='h-96 w-96 lg:h-[480px] lg:w-[900px]' src={image} alt="" />
            </div>

            <div className='flex flex-col lg:flex-row justify-between p-4 lg:mx-72'>
                <div className='lg:w-[70%] flex flex-col gap-4'>
                            <div>
                                <h2 className='font-bold text-2xl'>{name}</h2>
                            </div>
                            <div>
                                <p className='text-lg font-medium'>{shortDescription}</p>
                            </div>
                            <div className='flex justify-between'>
                                <p><span className='font-bold'>Processing Time : </span>{proccessingTime} Hours</p>
                                <p className='mr-6'><span className='font-bold'>Customizable : </span>{customization}</p>
                                
                            </div>
                            <div className='flex justify-between'>
                                {userName && <p><span className='font-bold'>Uploaded By : </span>{userName}</p>}
                                {userEmail && <p className='mr-6'><span className='font-bold'>Email : </span>{userEmail}</p>}
                                
                            </div>


                    </div>
                <div className='lg:w-[30%] ml-6 flex justify-between lg:flex-col lg:justify-normal gap-4'>
                    <div>
                        <h2 className='font-bold text-lg'>Sub Category</h2>
                        <p>{subCategory}</p>
                    </div>
                    <div>
                        <h2 className='font-bold text-lg'>Price</h2>
                        <p>{price}</p>
                    </div>
                    <div>
                        <h2 className='font-bold text-lg'>Rating</h2>
                        <p className="flex items-center gap-1"><span>{rating}</span> < GoStarFill className="text-[#E19756]" /></p>
                    </div>
                    <div>
                        <h2 className='font-bold text-lg'>Status</h2>
                        <p>{status}</p>
                    </div>
                </div>
            </div>





            </div>
        
    );
};

export default CraftDetails;