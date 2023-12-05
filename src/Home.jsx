import React from "react";
import git from "/image/github.png";
import Sea from "/image/search.png";
import Se from "/image/twitter.png";


function ghome() {
  return (
    <div className=" lg:items-center flex flex-col  ">
      <h1 className=" absolute mt-[100px] ml-[30px] font-semibold text-3xl ">Sing in to your account</h1>
      <p className="absolute mt-[150px] ml-[30px] font-normal text-sm text-gray-500 lg:ml-[-90px]">Don't have an account?</p>
      <p className="absolute mt-[150px] ml-[180px] text-blue-600 font-normal text-sm cursor-pointer hover:underline ">Create free account</p>
      <div className=" absolute flex gap-4 mt-[200px] ml-[30px]">
        <button className="w-[140px] h-[55px] border-2 rounded-xl hover:bg-gray-100"><img className="  w-[30px] ml-[50px]" src={Sea}/></button>
        <button className="w-[140px] h-[55px] border-2 rounded-xl hover:bg-gray-100"><img className="  w-[30px] ml-[50px]" src={Se}/></button>
        <button className="w-[140px] h-[55px] border-2 rounded-xl hover:bg-gray-100"><img className="  w-[30px] ml-[50px]"src={git}/></button>
        </div>
        <hr className="absolute w-[160px] mt-[290px] ml-[30px] lg:ml-[-250px]" />
        <p className="absolute mt-[279px] ml-[200px] text-gray-400 text-sm lg:ml-[30px]">Or continue with</p>
        <hr className="absolute w-[160px] mt-[290px] ml-[316px]" />

        <label htmlFor="" className="absolute mt-[330px] ml-[30px] text-lg text-semibold text-gray-700 lg:ml-[-300px]"> Email address</label>
        <input className=" absolute w-[450px] h-[45px] border-2  mt-[370px] ml-[30px] rounded-lg focus:outline-blue-200 " type="text" placeholder=" Enter email to get started" />
        <label htmlFor="" className="absolute mt-[430px] ml-[30px] text-lg text-semibold text-gray-700 lg:ml-[-330px]"> Password</label>
        <input className=" absolute w-[450px] h-[45px] border-2  mt-[470px] ml-[30px] rounded-lg focus:outline-blue-200 " type="text" placeholder=" Enter your password" />
        <button className="absolute w-[450px] h-[50px] mt-[535px] ml-[30px] bg-blue-500 rounded-xl font-semibold text-lg text-white hover:bg-blue-600" >Sing in</button>

    












</div>
  );
}
export default ghome;
