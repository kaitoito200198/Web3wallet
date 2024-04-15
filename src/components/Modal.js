/* eslint-disable no-lone-blocks */
/*
  @Author:Satellite
  @CreatedAt:2024/4/14
*/

import React, { useState, useRef } from "react";

import Button from "./Button";
import SearchInput from "./SearchInput";

import { Tokens } from "../data/Token";

const Modal = ({ setTokens, token }) => {
  const InputRef = useRef("");
  const [showModal, setShowModal] = useState(false);
  const [Token, setFToken] = useState(Tokens.slice(5));

  const setToken = (name) => {
    setTokens(name);
    setShowModal(false);
  };

  const searchToken = (e) => {
    const searchValue = InputRef.current.value;
    const filteredTokens = Tokens.slice(5).filter((item) =>
      item[0].toLowerCase().includes(searchValue.toLowerCase())
    );
    setFToken(filteredTokens);
  };
  
  return (
    <div className="flex items-center mt-4">
        {Tokens.map((item, index) =>
          item[1] === token ? (
            <Button 
            key={index}
            name={item[0]} 
            icon={item[2]}
            onClick={() => setShowModal(true)}
            className={"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-2xl inline-flex items-center mr-3 ml-3 mb-3"}
            ></Button>
          ) : (
            ""
          )
        )}
      {showModal ? (
        <>
          <div className="absolute flex justify-center items-center overflow-x-hidden overflow-y top-[100] inset-0 z-50 outline-none focus:outline-none rounded-7xl bg-gray-300">
            <div className="relative my-6 mx-auto  w-[26%] ">
              <div className="border-0 rounded-2xl shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 rounded-t ">
                  <h3 className="text-3xl font=semibold">Select a token</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-8 w-8 text-2xl block py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>

                <div className="ml-3 mt-2 mr-3">
                  <SearchInput searchRef={InputRef} onChange={searchToken} />
                </div>

                <div className="gap-6 mt-10">
                  {Tokens.map((token, index) => {
                    return index < 5 ? (
                      <Button
                        name={token[0]}
                        onClick={() => setToken(`${token[1]}`)}
                        icon={token[2]}
                        className={"bg-white hover:bg-gray-100 border text-gray-800 font-bold py-2 px-4 rounded-2xl inline-flex items-center mr-3 ml-3 mb-3"}
                      />
                    ) : null;
                  })}
                </div>
                <hr />
                <div>
                  <h1 className="px-5 text-xl py-3"> Popular Tokens</h1>
                </div>
                <div className="relative p-6 flex-auto h-[500px] overflow-y-auto mb-5">
                    {Token.length>0?
                  <ul className="">
                    { Token.map((token, index) => {
                      return (
                        <li key={index} className="w-full ">
                          <button
                            key={index}
                            onClick={() => setToken(`${token[1]}`)}
                            className=" inline-flex w-full cursor-pointer rounded-lg p-4 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200"
                          >
                             <img src={token[2]} width={40} height={40} alt="image"/>
                            <span>{token[0]}</span>
                          </button>                       
                        </li>
                      );
                    })}
                  </ul>:(<div className="items-center">
                    <h1>No results found.</h1>
                  </div>)}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Modal;
