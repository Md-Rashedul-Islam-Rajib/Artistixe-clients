const Exhibotion = () => {
  return (
    <div className="mt-24">
        
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold">Exhibition with fun</h2>
      </div>

      <div className="flex flex-col gap-8">
        <div className="px-10">
          <div className="bg-[#3C3C3C] h-40 flex justify-between">
            <div className="bg-[#6A6142] jus text-white w-[10%] flex justify-center items-center">
              <h2 className="font-bold text-lg">11</h2>
            </div>
            <div className="flex flex-col gap-2 text-[#e2e2e2] justify-center items-center">
              <h2 className="text-lg font-medium">FRIDAY,SEPT 2024</h2>
              <p>San't Erasmo Vencie 2,123</p>
            </div>
            <div className="flex flex-col gap-2 text-[#e2e2e2] justify-center items-center">
              <h2 className="text-[#B5A86F] text-lg mb-2 font-medium">
                EXHIBITION OPEN
              </h2>
              <p>Daily : 10 AM - 6 PM</p>
              <p>Sunday : 11 AM - 4 PM</p>
            </div>
            <div className="flex flex-col gap-2 text-[#e2e2e2] justify-center items-center">
              <h2 className="text-[#B5A86F] text-lg mb-2 font-medium">
                ADDMISSION TICKET
              </h2>
              <p>Adult : $15</p>
              <p>Student :$11</p>
            </div>
            <div className="flex flex-col gap-2 text-[#e2e2e2] justify-center mr-[5%]">
              <h2 className="text-[#B5A86F] text-lg font-medium">SOLD OUT</h2>
            </div>
          </div>
        </div>

        <div className="px-10">
          <div className="bg-[#3C3C3C] h-40 flex justify-between">
            <div className="bg-[#6A6142] jus text-white w-[10%] flex justify-center items-center">
              <h2 className="font-bold text-lg">28</h2>
            </div>
            <div className="flex flex-col gap-2 text-[#e2e2e2] justify-center items-center">
              <h2 className="text-lg font-medium">MONDAY, NOV 2024</h2>
              <p>San't Erasmo Vencie 2,123</p>
            </div>
            <div className="flex flex-col gap-2 text-[#e2e2e2] justify-center items-center">
              <h2 className="text-[#B5A86F] text-lg mb-2 font-medium">
                EXHIBITION OPEN
              </h2>
              <p>Daily : 10 AM - 6 PM</p>
              <p>Sunday : 11 AM - 4 PM</p>
            </div>
            <div className="flex flex-col gap-2 text-[#e2e2e2] justify-center items-center">
              <h2 className="text-[#B5A86F] text-lg mb-2 font-medium">
                ADDMISSION TICKET
              </h2>
              <p>Adult : $15</p>
              <p>Student :$11</p>
            </div>
            <div className="flex flex-col gap-2 text-[#e2e2e2] justify-center mr-[5%]">
              <button className="bg-[#B5A86F] text-lg font-semibold text-[#3c3c3c] p-2">
                FIND OUT MORE
              </button>
            </div>
          </div>
        </div>
        <div className="px-10">
          <div className="bg-[#3C3C3C] h-40 flex justify-between">
            <div className="bg-[#6A6142] jus text-white w-[10%] flex justify-center items-center">
              <h2 className="font-bold text-lg">15</h2>
            </div>
            <div className="flex flex-col gap-2 text-[#e2e2e2] justify-center items-center">
              <h2 className="text-lg font-medium">TUESDAY, DEC 2024</h2>
              <p>San't Erasmo Vencie 2,123</p>
            </div>
            <div className="flex flex-col gap-2 text-[#e2e2e2] justify-center items-center">
              <h2 className="text-[#B5A86F] text-lg mb-2 font-medium">
                EXHIBITION OPEN
              </h2>
              <p>Daily : 10 AM - 6 PM</p>
              <p>Sunday : 11 AM - 4 PM</p>
            </div>
            <div className="flex flex-col gap-2 text-[#e2e2e2] justify-center items-center">
              <h2 className="text-[#B5A86F] text-lg mb-2 font-medium">
                ADDMISSION TICKET
              </h2>
              <p>Adult : $15</p>
              <p>Student :$11</p>
            </div>
            <div className="flex flex-col gap-2 text-[#e2e2e2] justify-center mr-[5%]">
              <button className="bg-[#B5A86F] text-lg font-semibold text-[#3c3c3c] p-2">
                FIND OUT MORE
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex px-16 gap-8 mt-8">
        <div className=" w-[30%] flex flex-col gap-4">
          <h2 className="text-lg font-bold">Curated Visits</h2>
          <p className="font-medium">
            Go beyond the surface and unlock the hidden stories within our
            exhibitions with a curated tour led by a museum expert.Our docents,
            specially trained in the intricacies of the current exhibition, will
            guide you on an insightful journey.Explore the themes and narratives
            that the curator weaved into the exhibition layout and object
            selection
          </p>
        </div>
        <div className="flex gap-4 items-center justify-between w-[70%] px-8">
          <div>
            <div>
              <h2 className="text-6xl">82</h2>
            </div>
            <div className="text-center">
              <p>Exhibitons</p>
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-6xl">100k</h2>
            </div>
            <div className="text-center">
              <p>Visitors</p>
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-6xl">15</h2>
            </div>
            <div className="text-center">
              <p>Awards</p>
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-6xl">500</h2>
            </div>
            <div className="text-center">
              {" "}
              <p>Collections</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exhibotion;
