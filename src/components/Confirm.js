/*
  @Author:Satellite
  @CreatedAt:2024/4/14
*/

import { TEToast } from "tw-elements-react";

const Confirm = ({ show }) => {
  return (
    <div className="absolute top-10 justify-center mx-auto">
      <TEToast staticToast open={true}>
        <div className=" flex items-center justify-between rounded-t-lg border-b-2 border-neutral-100 border-opacity-100 bg-clip-padding px-4 pb-2 pt-2.5">
          <p className="font-bold text-neutral-500 dark:text-neutral-200 text-xl">
            Do you confirm?
          </p>
          <div className="flex items-center">
            <button
              type="button"
              className="ml-2 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
              onClick={() => show(false)}
              aria-label="Close"
            >
              <span className="text-black opacity-7 h-8 w-8 text-xl block bg-gray-400 py-0 rounded-full">
                x
              </span>
            </button>
          </div>
        </div>
        <button
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg bg-blue-600 text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full hover:scale-[1.02] focus:scale-[1.02] active:scale-100 text-white"
          type="button"
        >
        Yes.I am sure
        </button>
      </TEToast>
    </div>
  );
};

export default Confirm;
