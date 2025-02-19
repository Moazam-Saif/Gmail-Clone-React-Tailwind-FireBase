
import Avatar from "@mui/material/Avatar";
import { CiCircleQuestion, CiSettings } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { PiDotsNineBold } from "react-icons/pi";

export const Navbar=()=>{
    return (
        <div className="flex items-center justify-between mx-3 h-16">
            <div className="flex items-center gap-10">
                <div className="flex items-center gap-2">
                    <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
                    <GiHamburgerMenu size="20px"/>
                    </div>
                    <img className="w-8" src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png" alt="gmail-icon"/>
                    <h1 className="text-2xl text-gray-500 font-medium">Gmail</h1>
                </div>
            </div>
            <div className="md:block hidden w-[50%] mr-30">
                <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
                    <IoIosSearch size={"24px"} className="text-gray-700"/>
                    <input type="text" className="rounded-full w-full bg-transparent outline-none px-1" placeholder="Search Mail"></input>
                </div>
            </div>
            <div className="md:block hidden">
                <div className="flex items-center gap-2">
                    <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
                        <CiCircleQuestion size={"20px"}/>
                    </div>
                    <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
                        <CiSettings size={"20px"}/>
                    </div>
                    <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
                        <PiDotsNineBold size={"20px"}/>
                    </div>
                    <div className="cursor-pointer">
                        <Avatar src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" size="20" round={true}/>
                    </div>
                
                </div>
            </div>
        </div>
    )
}