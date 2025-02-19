import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../redux/appSlice';

export const SendMail = () => {
    const [formData,setFormData]=useState({to:"",subject:"",message:""})
    const open=useSelector(store=>store.appSlice.open);
    const dispatch=useDispatch();

    const handleChange=(e)=>{
      setFormData(prevFormData=>({...prevFormData,[e.target.name]:e.target.value}))
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(formData);
    }
   
  return (

    <div className={`${open? "block":"hidden"} bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}>
      <div className="flex px-3 py-2 bg-[#F2F6FC] justify-between rounded-t-md">
        <h1>New Message</h1>
        <div onClick={()=>{dispatch(setOpen(false))}} className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
          <RxCross2 size={10} />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col p-3 gap-2">
        <input type="text" onChange={handleChange} placeholder="To" name="to" className="outline-none py-1" />
        <input type="text" onChange={handleChange} placeholder="Subject" name="subject" className="outline-none py-1" />
        <textarea name="message" onChange={handleChange} cols="30" rows="10" className="outline-none py-1"></textarea>
        <button type="submit" onClick={()=>{dispatch(setOpen(false))}} className="bg-[#0B57D0] rounded-full w-fit px-4 text-white font-medium">
          Send
        </button>
      </form>
    </div>
  );
};


