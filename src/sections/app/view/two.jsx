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
import Grid from '@mui/material/Grid2';

const TABLE_HEAD = [
  { id: 'item', label: 'ITEM' },
  { id: 'description', label: 'DESCRIPTION', align: 'left' },
  { id: 'hours', label: 'HOURS', align: 'left' },
  { id: 'qty', label: 'QTY', align: 'left' },
  { id: 'price', label: 'PRICE', align: 'left' },
];

const TABLE_DATA = [
  { item: 'Premium Branding Package', description: "Branding & Promotion", hours: 48, qty: 1, price: "$32" },
  { item: 'Social Media', description: "Social Media templates", hours: 42, qty: 1, price: "$28" },
  { item: 'Web Design', description: "Web designing package", hours: 46, qty: 1, price: "$24" },
  { item: 'SEO', description: "Search engine optimination", hours: 40, qty: 1, price: "$22" },
];

// ----------------------------------------------------------------------

export function Two() {

  return (
    <DashboardContent maxWidth="xl">
      {/* <Box sx={{ display: "flex", p: 5, height: "100vh", justifyContent: "space-between" }}> */}
      <Grid container >
        <Grid size={{ xs: 12, md: 10 }} pr={{ xs: 0, md: 2 }}>
          <Box sx={{ backgroundColor: "#1C252E", borderRadius: "20px", p: 5, justifyContent: "center", height: "fit-content" }}>
            <Box sx={{ backgroundColor: "#1C253E", mx: "auto", marginTop: "30px", display: "flex", borderRadius: "10px", justifyContent: "space-between", width: "90%" }}>
              <Box sx={{ width: "30%", p: 2, backgroundColor: "#1C253E" }}>
                <div style={{ fontSize: "15px", marginBottom: "20px", color: "white" }}>Materialize</div>
                <div style={{ fontSize: "12px", color: "lightgray" }}>Office 149, 450 South Brand Brooklyn</div>
                <div style={{ fontSize: "12px", color: "lightgray" }}>San Diego County, CA 91905,USA</div>
                <div style={{ fontSize: "12px", color: "lightgray" }}>+1(123) 456 7891, +44(876) 543 2198</div>
              </Box>
              <Box sx={{ width: "30%", p: 2, backgroundColor: "#1C253E" }}>
                <div style={{ fontSize: "15px", marginBottom: "20px", color: "white" }}>Invoice #3492</div>
                <div style={{ fontSize: "12px", color: "lightgray" }}>Date Issued: 25/08/2020</div>
                <div style={{ fontSize: "12px", color: "lightgray" }}>Date Due: 29/08/2020</div>
              </Box>
            </Box>
            <Box sx={{ backgroundColor: "#1C252E", mx: "auto", marginTop: "10px", display: "flex", borderRadius: "10px", justifyContent: "space-between", width: "90%" }}>
              <Box sx={{ width: "50%", backgroundColor: "#1C252E" }}>
                <div style={{ fontSize: "15px", marginBottom: "20px", color: "white" }}>Invoice To:</div>
                <div style={{ fontSize: "12px", color: "lightgray" }}>Thomas shelby</div>
                <div style={{ fontSize: "12px", color: "lightgray" }}>Shelby Company Limited</div>
                <div style={{ fontSize: "12px", color: "lightgray" }}>Small Health, B10 0HF,UK</div>
                <div style={{ fontSize: "12px", color: "lightgray" }}>718-986-6062</div>
                <div style={{ fontSize: "12px", color: "lightgray" }}>peakyFBlinders@gmail.com</div>
              </Box>
              <Box sx={{ width: "50%", backgroundColor: "#1C252E", display: "flex" }}>
                <Box sx={{ width: "30%", backgroundColor: "#1C252E" }}>
                  <div style={{ fontSize: "15px", marginBottom: "20px", color: "white" }}>Bill To:</div>
                  <div style={{ fontSize: "12px", color: "lightgray" }}>Total Due:</div>
                  <div style={{ fontSize: "12px", color: "lightgray" }}>Bank name:</div>
                  <div style={{ fontSize: "12px", color: "lightgray" }}>Country:</div>
                  <div style={{ fontSize: "12px", color: "lightgray" }}>IBAN:</div>
                  <div style={{ fontSize: "12px", color: "lightgray" }}>SWFT code:</div>
                </Box>
                <Box sx={{ width: "70%", backgroundColor: "#1C252E", paddingTop: "20px" }}>
                  <div style={{ fontSize: "12px", color: "lightgray", marginTop: "20px" }}>$12,110,55</div>
                  <div style={{ fontSize: "12px", color: "lightgray" }}>American Bank</div>
                  <div style={{ fontSize: "12px", color: "lightgray" }}>United States</div>
                  <div style={{ fontSize: "12px", color: "lightgray" }}>ETD95476212874685</div>
                  <div style={{ fontSize: "12px", color: "lightgray" }}>BR91905</div>
                </Box>

              </Box>
            </Box>
            <Box sx={{ backgroundColor: "#1C252E", mx: "auto", marginTop: "10px", display: "flex", borderRadius: "10px", width: "90%" }}>
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
            <Box sx={{ backgroundColor: "#1C252E", mx: "auto", marginTop: "10px", display: "flex", borderRadius: "10px", justifyContent: "space-between", width: "90%" }}>
              <Box sx={{ width: "40%", backgroundColor: "#1C252E" }}>
                <div style={{ fontSize: "15px", marginBottom: "20px", color: "white" }}>Salesperson: Tommy Shelby</div>
                <div style={{ fontSize: "12px", color: "lightgray" }}>Thanks for your business</div>
              </Box>
              <Box sx={{ width: "20%", backgroundColor: "#1C252E" }}>
                <div style={{ display: "flex", justifyContent: "space-between", margin: "2px" }}> <div style={{ fontSize: "14px", color: "white", margin: "2px" }}>Subtotal: </div>
                  <div style={{ fontSize: "14px", color: "lightgray", margin: "2px" }}> $1800</div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", margin: "2px" }}> <div style={{ fontSize: "14px", color: "white", margin: "2px" }}>Discount: </div>
                  <div style={{ fontSize: "14px", color: "lightgray", margin: "2px" }}> $28</div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", margin: "2px" }}> <div style={{ fontSize: "14px", color: "white", margin: "2px" }}>Tax: </div>
                  <div style={{ fontSize: "14px", color: "lightgray", margin: "2px" }}> 21%</div>
                </div>
                <Divider />
                <div style={{ display: "flex", justifyContent: "space-between", margin: "2px" }}> <div style={{ fontSize: "14px", color: "white", margin: "2px" }}>Total: </div>
                  <div style={{ fontSize: "14px", color: "lightgray", margin: "2px" }}> $1690</div>
                </div>
              </Box>
            </Box>
            <Box sx={{ backgroundColor: "#1C252E", mx: "auto", marginTop: "10px", borderRadius: "10px", justifyContent: "start", width: "90%" }}>
              <Divider></Divider>
              <div style={{ display: "flex", color: "gray", margin: "2px", fontSize: "13px", alignItems: "center" }}><div style={{ color: "white", margin: "2px", fontSize: "14px" }}>Note:</div>It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects, Thank You!</div>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 2 }} pl={{ xs: 0, md: 2 }}>
          <Box sx={{ backgroundColor: "#1C252E", borderRadius: "20px", p: 2, height: "35%", alignItems: "center", justifyContent: "center" }}>
            <Button fullWidth variant="contained" color="info"><i className="fa fa-send"></i> Send Invoice</Button>
            <Button fullWidth variant="outlined" color="disabled" sx={{ mt: 1 }}>Download</Button>
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1, gap: 1 }}>
              <Button fullWidth variant="outlined" color="disabled">Print</Button>
              <Button fullWidth variant="outlined" color="disabled">Edit</Button>
            </Box>
            <Button fullWidth variant="contained" color="success" sx={{ mt: 1 }}>(ICON)Add Payment</Button>
          </Box>
        </Grid>
      </Grid>
    </DashboardContent>
  );
}
