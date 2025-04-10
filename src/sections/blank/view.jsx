'use client';

import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

import { Scrollbar } from 'src/components/scrollbar';
import { TableHeadCustom } from 'src/components/table';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { DashboardContent } from 'src/layouts/dashboard';
import { Button, Divider } from '@mui/material';

const TABLE_HEAD = [
  { id: 'item', label: 'ITEM' },
  { id: 'description', label: 'DESCRIPTION', align: 'left' },
  { id: 'hours', label: 'HOURS', align: 'left' },
  { id: 'qty', label: 'QTY', align: 'left' },
  { id: 'price', label: 'PRICE', align: 'left' },
];

const TABLE_DATA = [
  { item: 'Premium Branding Package', description: "Branding & Promotion", hours:48, qty:1, price:"$32"},
  { item: 'Social Media', description: "Social Media templates", hours:42, qty:1, price:"$28" },
  { item: 'Web Design', description: "Web designing package", hours:46, qty:1, price:"$24"},
  { item: 'SEO', description: "Search engine optimination", hours:40, qty:1, price:"$22" },
];

// ----------------------------------------------------------------------

export function BlankView() {

  return (
    <Box sx={{display:"flex",p:5,height:"100vh",justifyContent:"space-between"}}>
      <Box sx={{width:"80%",backgroundColor:"#1C252E",borderRadius:"20px",justifyContent:"center",height:"fit-content"}}>
        <Box sx={{backgroundColor:"#1C253E",mx:"auto",marginTop:"30px",display:"flex",borderRadius:"10px", justifyContent:"space-between",width:"90%"}}>
          <Box sx={{width:"30%",p:2,backgroundColor:"#1C253E"}}>
            <p style={{fontSize:"15px",marginBottom:"20px",color:"white"}}>Materialize</p>
            <p style={{fontSize:"12px",color:"lightgray"}}>Office 149, 450 South Brand Brooklyn</p>
            <p style={{fontSize:"12px",color:"lightgray"}}>San Diego County, CA 91905,USA</p>
            <p style={{fontSize:"12px",color:"lightgray"}}>+1(123) 456 7891, +44(876) 543 2198</p>
            </Box>
          <Box sx={{width:"30%",p:2,backgroundColor:"#1C253E"}}>
            <p style={{fontSize:"15px",marginBottom:"20px",color:"white"}}>Invoice #3492</p>
            <p style={{fontSize:"12px",color:"lightgray"}}>Date Issued: 25/08/2020</p>
            <p style={{fontSize:"12px",color:"lightgray"}}>Date Due: 29/08/2020</p>
            </Box>
        </Box>
        <Box sx={{backgroundColor:"#1C252E",mx:"auto",marginTop:"10px",display:"flex",borderRadius:"10px", justifyContent:"space-between",width:"90%"}}>
          <Box sx={{width:"50%",backgroundColor:"#1C252E"}}>
            <p style={{fontSize:"15px",marginBottom:"20px",color:"white"}}>Invoice To:</p>
            <p style={{fontSize:"12px",color:"lightgray"}}>Thomas shelby</p>
            <p style={{fontSize:"12px",color:"lightgray"}}>Shelby Company Limited</p>
            <p style={{fontSize:"12px",color:"lightgray"}}>Small Health, B10 0HF,UK</p>
            <p style={{fontSize:"12px",color:"lightgray"}}>718-986-6062</p>
            <p style={{fontSize:"12px",color:"lightgray"}}>peakyFBlinders@gmail.com</p>
            </Box>
          <Box sx={{width:"50%",backgroundColor:"#1C252E",display:"flex"}}>
                <Box sx={{width:"30%",backgroundColor:"#1C252E"}}>
                  <p style={{fontSize:"15px",marginBottom:"20px",color:"white"}}>Bill To:</p>
                  <p style={{fontSize:"12px",color:"lightgray"}}>Total Due:</p>
                  <p style={{fontSize:"12px",color:"lightgray"}}>Bank name:</p>
                  <p style={{fontSize:"12px",color:"lightgray"}}>Country:</p>
                  <p style={{fontSize:"12px",color:"lightgray"}}>IBAN:</p>
                  <p style={{fontSize:"12px",color:"lightgray"}}>SWFT code:</p>
                </Box>
                <Box sx={{width:"70%",backgroundColor:"#1C252E",paddingTop:"38px"}}>
                  <p style={{fontSize:"12px",color:"lightgray",marginTop:"20px"}}>$12,110,55</p>
                  <p style={{fontSize:"12px",color:"lightgray"}}>American Bank</p>
                  <p style={{fontSize:"12px",color:"lightgray"}}>United States</p>
                  <p style={{fontSize:"12px",color:"lightgray"}}>ETD95476212874685</p>
                  <p style={{fontSize:"12px",color:"lightgray"}}>BR91905</p>
                </Box>
            
            </Box>
        </Box>
        <Box sx={{backgroundColor:"#1C252E",mx:"auto",marginTop:"10px",display:"flex",borderRadius:"10px",width:"90%"}}>
            <Table sx={{ minWidth: 600 }}>
            <TableHeadCustom headCells={TABLE_HEAD} />

            <TableBody>
              {TABLE_DATA.map((row) => (
                <TableRow key={row.item}>
                  <TableCell align="left">{row.item}</TableCell>
                  <TableCell align="left">{row.description}</TableCell>
                  <TableCell align="left">{row.hours}</TableCell>
                  <TableCell align="left">{row.qty}</TableCell>
                  <TableCell align="left">{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

        </Box>
        <Box sx={{backgroundColor:"#1C252E",mx:"auto",marginTop:"10px",display:"flex",borderRadius:"10px", justifyContent:"space-between",width:"90%"}}>
          <Box sx={{width:"40%",backgroundColor:"#1C252E"}}>
            <p style={{fontSize:"15px",marginBottom:"20px",color:"white"}}>Salesperson: Tommy Shelby</p>
            <p style={{fontSize:"12px",color:"lightgray"}}>Thanks for your business</p>
            </Box>
          <Box sx={{width:"20%",backgroundColor:"#1C252E"}}>
                <p style={{display:"flex",justifyContent:"space-between",margin:"2px"}}> <p style={{fontSize:"14px",color:"white",margin:"2px"}}>Subtotal: </p>
                    <p style={{fontSize:"14px",color:"lightgray",margin:"2px"}}> $1800</p>
                </p>
                <p style={{display:"flex",justifyContent:"space-between",margin:"2px"}}> <p style={{fontSize:"14px",color:"white",margin:"2px"}}>Discount: </p>
                    <p style={{fontSize:"14px",color:"lightgray",margin:"2px"}}> $28</p>
                </p>
                <p style={{display:"flex",justifyContent:"space-between",margin:"2px"}}> <p style={{fontSize:"14px",color:"white",margin:"2px"}}>Tax: </p>
                    <p style={{fontSize:"14px",color:"lightgray",margin:"2px"}}> 21%</p>
                </p>
                <Divider />
                <p style={{display:"flex",justifyContent:"space-between",margin:"2px"}}> <p style={{fontSize:"14px",color:"white",margin:"2px"}}>Total: </p>
                    <p style={{fontSize:"14px",color:"lightgray",margin:"2px"}}> $1690</p>
                </p>
            </Box>
        </Box>
        <Box sx={{backgroundColor:"#1C252E",mx:"auto",marginTop:"10px",borderRadius:"10px", justifyContent:"start",width:"90%"}}>
        <Divider></Divider>
        <p style={{display:"flex",color:"gray",margin:"2px",fontSize:"13px",alignItems:"center"}}><p style={{color:"white",margin:"2px",fontSize:"14px"}}>Note:</p>It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects, Thank You!</p>
        </Box>
      </Box>
      <Box sx={{width:"17%" ,backgroundColor:"#1C252E",borderRadius:"20px",p:2,height:"35%",alignItems:"center",justifyContent:"center"}}>
        <Box sx={{alignItems:"center",justifyContent:"center",display:"flex",m:1}}>
          <Button variant="contained" color="info">(ICON)Send Invoice</Button>
        </Box>
        <Box sx={{alignItems:"center",justifyContent:"center",display:"flex",m:1}}>
          <Button variant="outlined" color="disabled">Download</Button>
        </Box>
        <Box sx={{display:"flex",justifyContent:"space-around",m:1}}>
          <Button variant="outlined" color="disabled">Print</Button>
          <Button variant="outlined" color="disabled">Edit</Button>
        </Box>
        <Box sx={{alignItems:"center",justifyContent:"center",display:"flex",m:1}}>
          <Button variant="contained" color="success">(ICON)Add Payment</Button>
        </Box>
      </Box>
    </Box>
  );
}
