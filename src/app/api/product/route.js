import axios from "axios";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return NextResponse.json(data);
 
  //   const reqHeaders = new Headers(req.Headers);
  //     const {searchParams} = new URL(req.url)
  //     // console.log('headersss:', searchParams.get("search"))
  //     const searchData = req.nextUrl.searchParams
  //     console.log('searchData',searchData)
  //    return NextResponse.json({"msg":"hello next API"})
};

export const HandleGetProduct = async(id)=>{
    return axios({
        method: 'Get',
        url: `https://fakestoreapi.com/products/${id}`
    }).then((prod)=>{
        return prod
    }).catch((err)=>{
        console.log(err)
    })
}

export async function POST(req) {
  // //get body data
  const body = await req.json();
  console.log(body);

  // // get formData
  // const formDataValue = await req.formData()
  // console.log("formDataValue:  ",formDataValue)
  return NextResponse.json(body);
}
