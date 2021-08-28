import React from "react";

import { Button } from "Components/Atoms";

const Login = ({ onHide }) => {
  return (
    <>
      <div className="flex flex-row p-6 border-b space-between mb-8">
        <button onClick={onHide} className="mr-4 text-gray-600">
          X
        </button>
        <h4 className="font-semibold text-gray-600">
          Please login to continue
        </h4>
      </div>
      <div className="p-6">
        <input
          class="bg-gray-200 mb-4 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="inline-full-name"
          type="text"
          placeholder="Enter Phone Number"
        />
        <Button block>Login</Button>
      </div>
    </>
  );
};

export default Login;
