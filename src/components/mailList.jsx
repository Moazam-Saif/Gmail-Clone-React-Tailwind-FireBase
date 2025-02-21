import { useEffect, useState } from "react";
import {Mail} from "./mail";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setEmails } from "../redux/appSlice";

export const MailList=()=>{
    const dispatch=useDispatch();
    const {emails,searchInput}=useSelector(store=>store.appSlice);
    const [tempEmails,setTempEmails]=useState([]);

    useEffect(()=>{
        console.log("Use Effect 1")
        const q=query(collection(db,"emails"), orderBy('created','desc'));
        const getData=onSnapshot(q,(snapshot)=>{
            const allEmails=snapshot.docs.map((doc)=>({...doc.data(),id:doc.id}));
            dispatch(setEmails(allEmails));
            console.log("hello "+tempEmails);
        });
        
        
        return ()=>getData();
    },[])

    useEffect(()=>{
        if(searchInput){
            console.log("Use effect 2");
            console.log(emails);
            const filteredEmails=emails?.filter((email)=>{return email?.subject.toLowerCase().includes(searchInput?.toLowerCase())
                || email?.to.toLowerCase().includes(searchInput?.toLowerCase()) || email?.message.toLowerCase().includes(searchInput?.toLowerCase())});
            setTempEmails(filteredEmails);
            console.log(filteredEmails);
        }
        else(
            setTempEmails(emails)
        )
            
        },[searchInput,emails])
        

    return (
    <>
    {tempEmails?.map((email)=><Mail email={email}/>)}
    </>)
}