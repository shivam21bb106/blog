import { Http } from "@mui/icons-material";
import { NextResponse } from "next/server";
export async function POST(request){
    const response=NextResponse({message:'Log out successfull'})
    response.cookies.set("token","",{
        httpOnly:true,
        expires:new Data(0),
        path:'/'
    });
    return response;
}