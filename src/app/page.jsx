'use client'

import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <>
    <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}>
      <h1>Home page </h1>
      <Button variant="contained" onClick={()=> router.push('/product')}>Go To product</Button>
    </Box>
    </>
  );
}
