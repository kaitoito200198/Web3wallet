/*
  @Author:Satellite
  @CreatedAt:2024/4/14
*/
import Modal from "./Modal";
const PayCard = ({InputRef,inputMoney,setTokens,token ,Price, fee, text}) => {
  return (
    <div className="">
      <div className="flex">
        <span className=" mt-3 mx-3 mb-0">{text}</span>
      </div>
      <div className="flex justify-between p-2 items-center ">
        <input
          ref={InputRef}
          onChange={inputMoney}
          placeholder="0"
       
          className="bg-transparent text-4xl ml-2 w-[250px] border-none focus:border-none focus:outline-none"
        />
        <Modal setTokens={setTokens} token={token} />
      </div>
      <div className="flex ml-10">
        <span className=" ">${(Price - fee * Price).toFixed(3)}</span>
      </div>
    </div>
  );
};

export default PayCard;
