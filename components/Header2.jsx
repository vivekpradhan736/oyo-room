import Image from "next/image";

const Header2 = () => {
  const List = [
    {
      name: "Banglore",
    },
    {
      name: "Chennai",
    },
    {
      name: "Delhi",
    },
    {
      name: "Gurgaon",
    },
    {
      name: "Hyderabad",
    },
    {
      name: "Kolkata",
    },
    {
      name: "Mumbai",
    },
    {
      name: "Noida",
    },
    {
      name: "Pune",
    },
  ];
  return (
    <div>
      <div className="flex px-24 bg-[#F3F5F7] justify-between">
        {List.map((e) => {
          return (
            <div
              key={e.name}
              className="pl-4 py-3 flex items-center gap-1.5 hover:bg-[#FEFEFE] cursor-pointer"
            >
              <span className="text-xl text-[#484747]">{e.name}</span>
              <Image
                src={"/arrow.png"}
                alt="demo"
                width={200}
                height={200}
                className=" w-5 h-45 mr-5 hover:rotate-180 duration-300 ease-in-out"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header2;
