import { IoMdArrowBack, IoMdMore } from 'react-icons/io';
import { BiArchiveIn } from 'react-icons/bi';
import { MdOutlineReport, MdDeleteOutline, MdOutlineMarkEmailUnread, MdOutlineWatchLater, MdOutlineAddTask, MdOutlineDriveFileMove, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { deleteDoc, doc } from 'firebase/firestore';
import {db} from '../firebase'

const handleBack=(navigate)=>{
    navigate(-1);
}
const handleDelete=async (id,navigate)=>{
    try {
        await deleteDoc(doc(db,"emails",id));
        navigate("/");
    } catch (error) {
        console.log(error);
        
    }
}

export const Message = () => {
    const navigate=useNavigate();
    const {selectedEmail}=useSelector(store=>store.appSlice)
    return (
        <div className='flex-1 bg-white rounded-xl mx-5'>
            <div className='flex items-center justify-between px-4'>
                <div className='flex items-center gap-2 text-gray-700 py-2'>
                    <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <IoMdArrowBack size="20px" onClick={()=>handleBack(navigate)} />
                    </div>
                    <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <BiArchiveIn size="20px" />
                    </div>
                    <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <MdOutlineReport size="20px" />
                    </div>
                    <div onClick={()=>handleDelete(selectedEmail.id,navigate)} className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <MdDeleteOutline size="20px" />
                    </div>
                    <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <MdOutlineMarkEmailUnread size="20px" />
                    </div>
                    <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <MdOutlineWatchLater size="20px" />
                    </div>
                    <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <MdOutlineAddTask size="20px" />
                    </div>
                    <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <MdOutlineDriveFileMove size="20px" />
                    </div>
                    <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <IoMdMore size="20px" />
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <button className='hover:rounded-full hover:bg-gray-100'><MdKeyboardArrowLeft /></button>
                    <button className='hover:rounded-full hover:bg-gray-100'><MdKeyboardArrowRight /></button>
                </div>
            </div>
            <div className="h-[90vh] overflow-y-auto p-4">
                <div className="flex items-center justify-between bg-white gap-1">
                    <div className="flex items-center gap-2">
                        <h1 className="text-xl font-medium">{selectedEmail?.subject}</h1>
                        <span className="text-sm bg-gray-200 rounded-md px-2">Inbox</span>
                    </div>
                    <div className="flex-none text-gray-400 my-5 text-sm">{new Date(selectedEmail?.created?.seconds*1000).toUTCString()}</div>
                </div>

                <div className="text-gray-500 text-sm">
                    <h1>shreya@gmail.com</h1>
                    <span>to me</span>
                </div>

                <div className="my-10">
                    <p>{selectedEmail?.message}</p>
                </div>
            </div>

        </div>

    )
}
