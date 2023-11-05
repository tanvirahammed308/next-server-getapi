import { userList } from "@/utility/db"
import { NextResponse } from "next/server";

export const GET=()=>{
    const data=userList;
    console.log(data)
    return NextResponse.json(data)

}