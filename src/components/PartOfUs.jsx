import part1 from "../assets/part1.jpg"
import part2 from "../assets/part2.jpg"
import part3 from "../assets/part3.jpg"
import part4 from "../assets/part4.jpg"

const PartOfUs = () => {
    return (
        <div className="mt-24 px-12">
            
            <div className="text-center mb-12">
    <h2 className="text-3xl font-extrabold">Part Of The Art And Creativity</h2>
      </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                <div className="flex p-4">
                    <div className="flex-1">
                        <img src={part1} alt="" />
                    </div>
                    <div className="flex-1 flex flex-col lg:gap-4 justify-center ml-6">
                        <h2 className="text-xl font-bold">The Work in Style</h2>
                        <h6 className="text-[#696140] font-semibold mb-6">Diana Manahis</h6>
                        <p className="font-medium">A Mexican painter known for her surreal self-portraits and vibrant depictions of Mexican culture. She often explored themes of identity, gender, and the human body, drawing inspiration from her own experiences with chronic pain and disability</p>
                    </div>
                </div>
                <div className="flex p-4">
                    <div className="flex-1">
                        <img src={part2} alt="" />
                    </div>
                    <div className="flex-1 flex flex-col gap-4 justify-center ml-6">
                        <h2 className="text-xl font-bold">Forest Road</h2>
                        <h6 className="text-[#696140] font-semibold mb-6">Ma Meilia Deva</h6>
                        <p className="font-medium">A founder of the Impressionist movement, known for his light-filled landscapes that capture fleeting moments and atmospheric effects. He used loose brushstrokes and broken colors to create a sense of movement and light, forever changing the way we see the world</p>
                    </div>
                </div>
                <div className="flex p-4">
                    <div className="flex-1">
                        <img src={part3} alt="" />
                    </div>
                    <div className="flex-1 flex flex-col gap-4 justify-center ml-6">
                        <h2 className="text-xl font-bold">Venice Old Yellow</h2>
                        <h6 className="text-[#696140] font-semibold mb-6">Anna Lufiva</h6>
                        <p className="font-medium">A Japanese contemporary artist who works across various mediums, including installations, paintings, and sculptures. Her work is characterized by repetitive polka dots and mirrored environments, creating immersive experiences that explore themes of infinity, obsession, and the self</p>
                    </div>
                </div>
                <div className="flex p-4">
                    <div className="flex-1">
                        <img src={part4} alt="" />
                    </div>
                    <div className="flex-1 flex flex-col gap-4 justify-center ml-6">
                        <h2 className="text-xl font-bold">Wooden Windmill</h2>
                        <h6 className="text-[#696140] font-semibold mb-6">Cesillia Mivana</h6>
                        <p className="font-medium">An Italian polymath  who was a painter, sculptor, architect, scientist, engineer, and inventor. He is considered one of the greatest artists of all time, known for masterpieces like the Mona Lisa and The Last Supper. His work embodies the Renaissance ideal of "uomo universale" (universal man) with its blend of artistic and scientific genius</p>
                    </div>
                </div>

            </div>






        </div>
    );
};

export default PartOfUs;