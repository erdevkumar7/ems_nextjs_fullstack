// 'use-client'

// import { Box, Button, Typography } from "@mui/material";

// //API calling from frontend
// async function getApiData() {
//     const res = await fetch("https://fakestoreapi.com/products");
//     return res.json();
//   }
  
//   const Product = async () => {
//     const data = await getApiData();
//       // console.log("API2:", data);
  
//     return (
//       <>
//         {data.map((product) => (
//           <Box key={product.id} style={{
//             border: '1px solid #ddd',
//             padding: '10px',
//             marginBottom: '10px',      
//           }}>
//             {/* <p>{product.id}</p> */}
//             <Typography>Title : {product.title}</Typography>
//             <img src={product.image} width='150px' height='150px' alt=""/>
//             <Typography>Price : {product.price}</Typography>
//             <Button variant="contained">Add to Cart</Button>
//           </Box>
//         ))}
//       </>
//     );
//   };
  
//   export default Product;
  

// //   import * as React from 'react';
// // import Paper from '@mui/material/Paper';
// // import Table from '@mui/material/Table';
// // import TableBody from '@mui/material/TableBody';
// // import TableCell from '@mui/material/TableCell';
// // import TableContainer from '@mui/material/TableContainer';
// // import TableHead from '@mui/material/TableHead';
// // import TablePagination from '@mui/material/TablePagination';
// // import TableRow from '@mui/material/TableRow';

// // const columns = [
// //   { id: 'name', label: 'Title', minWidth: 170 },
// //   { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
// //   {
// //     id: 'population',
// //     label: 'Population',
// //     minWidth: 170,
// //     align: 'right',
// //     format: (value) => value.toLocaleString('en-US'),
// //   },
// //   {
// //     id: 'size',
// //     label: 'Size\u00a0(km\u00b2)',
// //     minWidth: 170,
// //     align: 'right',
// //     format: (value) => value.toLocaleString('en-US'),
// //   },
// //   {
// //     id: 'density',
// //     label: 'Density',
// //     minWidth: 170,
// //     align: 'right',
// //     format: (value) => value.toFixed(2),
// //   },
// // ];

// // function createData(name, code, population, size) {
// //   const density = population / size;
// //   return { name, code, population, size, density };
// // }

// // const rows = [
// //   createData('India', 'IN', 1324171354, 3287263),
// //   createData('China', 'CN', 1403500365, 9596961),
// //   createData('Italy', 'IT', 60483973, 301340),
// //   createData('United States', 'US', 327167434, 9833520),
// //   createData('Canada', 'CA', 37602103, 9984670),
// //   createData('Australia', 'AU', 25475400, 7692024),
// //   createData('Germany', 'DE', 83019200, 357578),
// //   createData('Ireland', 'IE', 4857000, 70273),
// //   createData('Mexico', 'MX', 126577691, 1972550),
// //   createData('Japan', 'JP', 126317000, 377973),
// //   createData('France', 'FR', 67022000, 640679),
// //   createData('United Kingdom', 'GB', 67545757, 242495),
// //   createData('Russia', 'RU', 146793744, 17098246),
// //   createData('Nigeria', 'NG', 200962417, 923768),
// //   createData('Brazil', 'BR', 210147125, 8515767),
// // ];

// // export default function ColumnGroupingTable() {
// //   const [page, setPage] = React.useState(0);
// //   const [rowsPerPage, setRowsPerPage] = React.useState(10);

// //   const handleChangePage = (event, newPage) => {
// //     setPage(newPage);
// //   };

// //   const handleChangeRowsPerPage = (event) => {
// //     setRowsPerPage(+event.target.value);
// //     setPage(0);
// //   };

// //   return (
// //     <Paper sx={{ width: '100%' }}>
// //       <TableContainer sx={{ maxHeight: 440 }}>
// //         <Table stickyHeader aria-label="sticky table">
// //           <TableHead>
// //             <TableRow>
// //               <TableCell colSpan={5}>
// //                 <h2>List or product</h2>
// //               </TableCell>
// //             </TableRow>
// //             <TableRow>
// //               {columns.map((column) => (
// //                 <TableCell
// //                   key={column.id}
// //                   align={column.align}
// //                   style={{ top: 57, minWidth: column.minWidth }}
// //                 >
// //                   {column.label}
// //                 </TableCell>
// //               ))}
// //             </TableRow>
// //           </TableHead>
// //           <TableBody>
// //             {rows
// //               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
// //               .map((row) => {
// //                 return (
// //                   <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
// //                     {columns.map((column) => {
// //                       const value = row[column.id];
// //                       return (
// //                         <TableCell key={column.id} align={column.align}>
// //                           {column.format && typeof value === 'number'
// //                             ? column.format(value)
// //                             : value}
// //                         </TableCell>
// //                       );
// //                     })}
// //                   </TableRow>
// //                 );
// //               })}
// //           </TableBody>
// //         </Table>
// //       </TableContainer>
// //       <TablePagination
// //         rowsPerPageOptions={[10, 25, 100]}
// //         component="div"
// //         count={rows.length}
// //         rowsPerPage={rowsPerPage}
// //         page={page}
// //         onPageChange={handleChangePage}
// //         onRowsPerPageChange={handleChangeRowsPerPage}
// //       />
// //     </Paper>
// //   );
// // }
