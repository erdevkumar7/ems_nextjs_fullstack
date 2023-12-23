"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Box, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { HandleGetProduct } from "@/app/api/product/route";

const ProducDetail = () => {
  const [uniqueProduct, setUniqueProduct] = useState("");
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    getUniqueProduct();
  }, []);

  const getUniqueProduct = async () => {
    const data = await HandleGetProduct(id);
    setUniqueProduct(data.data)
    // http://localhost:3000/api/product/${id}
    // fetch(`https://fakestoreapi.com/products/${id}`)
    //   .then((res) => res.json())
    //   .then((json) => setUniqueProduct(json));
  };

  //   console.log(params);
  return (
    <>
      {!uniqueProduct ? (
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <CircularProgress size={"1.6rem"} />
        </Box>
      ) : (
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <h1>ProducDetail</h1>
          <h4>Title: {uniqueProduct.title}</h4>
          <Typography>Description: {uniqueProduct.description}</Typography>
          <Box
            component={"img"}
            src={uniqueProduct.image}
            width={"150px"}
            height={"150px"}
          />
          <Typography>Price: {uniqueProduct.price}</Typography>
        </Box>
      )}
    </>
  );
};

export default ProducDetail;
