"use client";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Product = () => {
  const [data, setProdData] = useState("");
  const router = useRouter();
  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = async () => {
    const data = await fetch("http://localhost:3000/api/product");
    const prodData = await data.json();
    setProdData(prodData);
  };

  const handleProduct = (id) => {
    router.push(`/product/${id}`);
  };

  return (
    <>
      {!data ? (
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
        <Box>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Product Listing
          </Typography>
          {data.map((product) => (
            <Box
              key={product.id}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                marginBottom: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
              onClick={() => handleProduct(product.id)}
            >
              <Typography>Title : {product.title}</Typography>
              <Box
                component={"img"}
                src={product.image}
                width={"150px"}
                height={"150px"}
                alt="Image"
              />
              <Typography>Price : {product.price}</Typography>
              <Button variant="contained">Add to Cart</Button>
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};

export default Product;
