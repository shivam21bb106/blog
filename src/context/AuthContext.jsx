'use client';
import { createContext,useEffect,useState } from "react";

import axios from "axios";
export const AuthContext=createContext();


export const AuthProvider=({children})=>{
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)



    useEffect(()=>{
        const fetchUser=async ()=>{
            try{
            const res=await axios.get('/api/auth/me');
            setUser(res.data.user);
            }
            catch(err){
                setUser(null)
            }
            finally{
                setLoading(false)
            }
        }
        fetchUser();
    },[])


    return (
        <AuthContext.Provider value={{user,setUser,loading}}>
            {children}
        </AuthContext.Provider>
    );

};