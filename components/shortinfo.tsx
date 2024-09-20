import React from 'react';

const ShortListInfo: React.FC = () => {
  return (
    <div className="w-full relative h-[50.7px] text-left text-[4.19px] text-black font-montserrat">
      <div className="absolute top-[0px] left-[0px] shadow-[0px_0px_11.63px_rgba(0,_0,_0,_0.05)] rounded-[11.63px] bg-white w-[363px] h-[50.7px]" />
      <div className="absolute top-[6.4px] left-[120.19px] border-gray border-r-[0.2px] border-solid box-border w-[0.2px] h-[38.2px]" />
      <div className="absolute top-[6.17px] left-[242.58px] border-gray border-r-[0.2px] border-solid box-border w-[0.2px] h-[38.2px]" />

      <div className="absolute top-[13.96px] left-[40px] w-[46px] h-[22px]">
        <img className="absolute top-[0px] left-[15.38px] w-[9.8px] h-[9.8px]" alt="" src="Group 19.svg" />
        <div className="absolute top-[12.04px] left-[0px] w-[46px] h-2.5">
          <div className="absolute top-[0px] left-[1px] font-semibold">Delivery Available</div>
          <div className="absolute top-[6px] left-[0px] text-[3.02px] whitespace-pre-wrap">Working Time: 10 AM to 10 PM</div>
        </div>
      </div>

      <div className="absolute top-[13.96px] left-[158px] w-[55px] h-[23.1px]">
        <img className="absolute top-[0px] left-[18.61px] w-[9.8px] h-[9.8px]" alt="" src="Group 19.svg" />
        <div className="absolute top-[13.04px] left-[0px] w-[55px] h-2.5">
          <div className="absolute top-[0px] left-[0px] font-semibold">Kappad, Kozhikode, Kerala</div>
          <div className="absolute top-[6.04px] left-[13.73px] text-[3.02px]">Our Location</div>
        </div>
      </div>

      <div className="absolute top-[13.96px] left-[287.14px] w-8 h-[23.1px]">
        <img className="absolute top-[0px] left-[10.94px] w-[9.8px] h-[9.8px]" alt="" src="Group 19.svg" />
        <div className="absolute top-[12.57px] left-[0px] w-8 h-[10.5px]">
          <div className="absolute top-[0px] left-[0px] font-semibold">+0123 456 7891</div>
          <div className="absolute top-[6.52px] left-[3.96px] text-[3.02px]">Phone Number</div>
        </div>
      </div>

      <img className="absolute top-[16.52px] left-[300.64px] w-[4.9px] h-[4.9px]" alt="" src="Vector.svg" />
      <img className="absolute top-[16.29px] left-[179.41px] w-[4.2px] h-[5.1px]" alt="" src="Group 17.svg" />
    </div>
  );
};

export default ShortListInfo;
