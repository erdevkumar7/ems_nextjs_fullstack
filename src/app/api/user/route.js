import { NextResponse } from "next/server"

export const GET = async(req)=>{
    const reqHeaders = new Headers(req.Headers)
    const {searchParams} = new URL(req.url)
    // console.log('headersss:', searchParams.get("search"))
    const searchData = req.nextUrl.searchParams
    console.log('searchData',searchData)
   return NextResponse.json({"msg":"hello next API"})
}

export async function POST(req){
    // //get body data
    const body = await req.json();
    console.log(body);

    // // get formData  
    // const formDataValue = await req.formData()
    // console.log("formDataValue:  ",formDataValue)
    return NextResponse.json(body)
}