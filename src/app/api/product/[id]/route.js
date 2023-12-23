import { NextResponse } from "next/server";

export const GET = async (req) => {
    const res = await fetch("https://fakestoreapi.com/products/1");
    const data = await res.json();
    return NextResponse.json(data);
 
  //   const reqHeaders = new Headers(req.Headers);
  //     const {searchParams} = new URL(req.url)
  //     // console.log('headersss:', searchParams.get("search"))
  //     const searchData = req.nextUrl.searchParams
  //     console.log('searchData',searchData)
  //    return NextResponse.json({"msg":"hello next API"})
};