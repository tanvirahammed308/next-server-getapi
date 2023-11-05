import { userList } from "@/utility/db"
import { NextResponse } from "next/server"

export const GET=(req,content)=>{
    console.log(content.params.id)

    const singleId=userList.filter((item)=>item.id ==content.params.id);

    return NextResponse.json(singleId.length ==0?{result:'not found'}:{result:singleId[0]})
}