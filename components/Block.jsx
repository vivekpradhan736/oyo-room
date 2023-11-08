import Image from "next/image";

const Block = ({title , para, icon}) => {
  return (
    <div className=" border-r border-gray-200 h-full flex items-center px-6 hover:bg-[#F2F2F2] cursor-pointer">
      <Image
        src={icon}
        alt="demo"
        width={200}
        height={200}
        className=" w-8 h-8  mr-5"
      />
      <div>
        <h3 className=" text-[20px] font-semibold">{title}</h3>
        <p className=" text-gray-400 text-[16px] line-clamp-1">
          {para}
        </p>
      </div>
    </div>
  );
};

export default Block;