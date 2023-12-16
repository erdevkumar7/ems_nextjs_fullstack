"use client"
import LearnDataFetch from "@/components/LearnDataFetch";
import ChildDataPass from "@/components/childDataPass";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser ] = useState({name:"devendra",age:30})

  return (
    <>
      <h1>hello nextjs</h1>
      <hr />
      {/* <LearnDataFetch /> */}
      <h2>{user.name}</h2>
      <ChildDataPass data={user} setUser={setUser}/>
    </>
  )
}
