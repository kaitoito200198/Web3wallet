/*
  @Author:Satellite
  @CreatedAt:2024/4/14
*/
import { useEffect, useState, useRef } from "react";

import getParams from "../utils/getParams";

import Confirm from "../components/Confirm";
import SwapButton from "../components/SwapButton";
import Title from "../components/Title";
import PayCard from "../components/PayCard";

const Home = () => {
  const InputRef1 = useRef(null);
  const InputRef2 = useRef(null);

  const params = getParams();
console.log(params)
  const [rate, setRate] = useState(1);
  const [firstToken, setToken1] = useState(params.token1||'ETH1');
  const [secondToken, setToken2] = useState(params.token2||'ETH1');
  const [Price, setPrice] = useState(0);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setRate(Number(firstToken.substr(3)) / Number(secondToken.substr(3)));
    
      InputRef2.current.value = (Number(InputRef1.current.value) * Number(firstToken.substr(3)) / Number(secondToken.substr(3))).toFixed(3);
      setPrice(Number(InputRef1.current.value) * 10);
    
    window.history.replaceState(
      { page: "newPage" },
      "New Page Title",
      `/?token1=${firstToken}&token2=${secondToken}`
    );
  }, [firstToken, secondToken]);

  const inputMoney1 = () => {
    InputRef2.current.value = (Number(InputRef1.current.value) * rate).toFixed(3);
    setPrice(Number(InputRef1.current.value) * 10);
  };

  const inputMoney2 = () => {
    InputRef1.current.value = (Number(InputRef2.current.value) / rate).toFixed(3);
    setPrice((Number(InputRef2.current.value) / rate) * 10);
  };

  const changeToken = () => {
    const temp = InputRef2.current.value;
    InputRef2.current.value = InputRef1.current.value;
    InputRef1.current.value = temp;
    setToken1(secondToken);
    setToken2(firstToken);
  };


  return (
    <div className="bg-white p-3">
      {/*Here is first card  */}
      <Title />
      <div className="bg-gray-100  shadow-2xl rounded-2xl mt-10">
        <PayCard
          InputRef={InputRef1}
          inputMoney={inputMoney1}
          setTokens={setToken1}
          token={firstToken}
          Price={Price}
          fee= {0}
          text={"You Pay"}
        />
      </div>
      <div className="flex justify-center mt-[-10px] ">
        <SwapButton onClick={changeToken} />
      </div>

     {/*Here is second card  */}
      <div className=" bg-gray-100  shadow-2xl rounded-2xl mt-[-10px]">
        <PayCard
          InputRef={InputRef2}
          inputMoney={inputMoney2}
          setTokens={setToken2}
          token={secondToken}
          Price={Price}
          fee= {0.1}
          text={"You Receive"}
        />
      </div>
      <div className="flex justify-center w-full bg-pink-100 mt-5 p-5 rounded-2xl text-fuchsia-400 text-2xl">
        <button onClick={() => setShowToast(true)}>Connect wallet</button>
      </div>
      {showToast && <Confirm show={setShowToast} />}
    </div>
  );
};

export default Home;
