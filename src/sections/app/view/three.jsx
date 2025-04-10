'use client';
import { CONFIG } from 'src/global-config';
import { useCallback, useState } from "react";
import { DashboardContent } from 'src/layouts/dashboard/content';
import { Box, Button, Checkbox, Divider, FormControlLabel, Switch, MenuItem, TextField, Typography } from '@mui/material';
import Grid from "@mui/material/Grid2"
import { MobileDatePicker } from "@mui/x-date-pickers";
import dayjs from 'dayjs';
import { varAlpha } from 'minimal-shared/utils';
import { LocalizationProvider } from 'src/locales';

// ----------------------------------------------------------------------

export const metadata = { title: `Page three | Dashboard - ${CONFIG.appName}` };

export function Three({ title = 'Blank', sx }) {
  const [Issued, setIssued] = useState(dayjs(new Date()));
  const [Due, setDue] = useState(dayjs(new Date()));


  return (
    <>
    <Box sx={{display:"flex",gap:2}}>
      <Box sx={{width:"70%",p:5,borderRadius:2, backgroundColor:"#2e3d4e",m:3}}>
            <Grid container sx={{backgroundColor:"#14212f",p:3,borderRadius:2}}>
              <Grid size={4}>
                <Typography variant="h4">Materialize</Typography>
                <Typography variant="subtitle2">Office 149, 450 South Brand Broolklyn San Diego Country, CA 91905,USA +1(123) 456 7891. +44(876) 543 2198</Typography>
              </Grid>
              <Grid size={2}>
              </Grid>
              <Grid size={6}>
                <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                  <Typography variant="h5">Invoice</Typography>
                  <TextField sx={{width:"70%"}} value="#45678"></TextField>
                </Box>
                <LocalizationProvider>
                <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <Typography variant="h5">Date Issued</Typography>
                <MobileDatePicker
                    size="small"
                    orientation="portrait"
                    value={Issued}
                    sx={{width:"70%"}}
                    onChange={(newValue) => setIssued(newValue)}
                    slotProps={{ textField: { fullWidth: true } }}
                  />
                </Box>
                <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <Typography variant="h5">Due Date</Typography>
                <MobileDatePicker
                    size="small"
                    sx={{width:"70%"}}
                    orientation="portrait"
                    value={Due}
                    onChange={(newValue) => setDue(newValue)}
                    slotProps={{ textField: { fullWidth: true } }}
                  />
                  </Box>
               </LocalizationProvider>
              </Grid>
            </Grid>
          <Grid container>
            <Grid size={6}>
              <Typography variant="h5" my={2}>Invoice To</Typography>
          <TextField select value="@baalbet" size="small">
            <MenuItem key={-1} value="@baalbet">Jordan Stevensen</MenuItem>
          </TextField>
            <p>Hall-Robbines PLC</p>
            <p>7777 MEndez Plains</p>
            <p>(616) 865-4180</p>
            <p>don85@johnson.com</p>
            </Grid>
            <Grid size={6}>
              <p my={2}>Bill To:</p>
              <Box sx={{width:200}}>
                <Box sx={{display:"flex", justifyContent:"space-between"}}><Typography variant="subtitle2">Total Due:</Typography>
              <Typography variant="subtitle1">$12,110.55</Typography></Box>
              <Box sx={{display:"flex", justifyContent:"space-between"}}><Typography variant="subtitle1">Bank name:</Typography>
              <Typography variant="subtitle1">American Bank</Typography></Box>
              <Box sx={{display:"flex", justifyContent:"space-between"}}><Typography variant="subtitle1">Country:</Typography>
              <Typography variant="subtitle1">United States</Typography></Box>
              <Box sx={{display:"flex", justifyContent:"space-between"}}><Typography variant="subtitle1">IBAN:</Typography>
              <Typography variant="subtitle1">ETD95732643242</Typography></Box>
              <Box sx={{display:"flex", justifyContent:"space-between"}}><Typography variant="subtitle1">SWIFT code:</Typography>
              <Typography variant="subtitle1">BR91905</Typography></Box>
              </Box>
            </Grid>          
          </Grid>
        <Divider/>

        <Grid container my={2}>
              <Grid size={4}>Item</Grid>
              <Grid size={2}>Cost</Grid>
              <Grid size={2}>Hours</Grid>
              <Grid size={4}>Price</Grid>
        </Grid>
        <Box sx={{p:2, mb:2, border: "solid",
    borderWidth: 1,
    borderRadius: 1,}}>
        <Grid container>
              <Grid size={4}>
                <Box sx={{display:"flex",flexDirection:"column"} } gap={2}>
                <TextField select value="@baalbet" size="small">
                <MenuItem key={-1} value="@baalbet">App Design</MenuItem>
                </TextField>
                <TextField value="Customization & Bug Fixes" size="small">
                </TextField>
                </Box>
              </Grid>
              <Grid size={2}>
                <Box sx={{display:"flex",flexDirection:"column",mx:2}} gap={2}>
                <TextField value="24" size="small">
                </TextField>
                <Typography variant="subtitle2">Discount:0% 0% 0%</Typography>
                </Box>
              </Grid>
              <Grid size={2}>
              <TextField value="1" size="small">
                </TextField>
              </Grid>
              <Grid size={4}>
              <Typography variant="subtitle2" mx={2}>$24.00</Typography>
              </Grid>
        </Grid>
        </Box>
        <Button variant="contained" color="info">➕Add Item</Button>
        <Divider/>
        <Box sx={{display:"flex", justifyContent:"space-between"}}>
                  <Box sx={{width:400}}><Box my={2} sx={{display:"flex", justifyContent:"space-between",alignItems:"center"}}><Typography variant="subtitle2">SalesPerson</Typography><TextField value="Tommy Shelby" size="small">
                </TextField></Box><Box><TextField fullWidth value="Thanks for your business" size="small">
                </TextField></Box></Box>
                  <Box sx={{width:200}}>
                    <Box sx={{display:"flex", justifyContent:"space-between"}}><Typography variant="subtitle2">Subtotal:</Typography><Typography variant="subtitle2">$1800</Typography></Box>
                    <Box sx={{display:"flex", justifyContent:"space-between"}}><Typography variant="subtitle2">Discount:</Typography><Typography variant="subtitle2">$28</Typography></Box>
                    <Box sx={{display:"flex", justifyContent:"space-between"}}><Typography variant="subtitle2">Tax:</Typography><Typography variant="subtitle2">21%</Typography></Box>
                    <Divider/>
                    <Box sx={{display:"flex", justifyContent:"space-between"}}><Typography variant="subtitle2">Total:</Typography><Typography variant="subtitle2">$1690</Typography></Box>
                  </Box>
        </Box>
        <Divider/>
        <Box>
        <Typography variant="subtitle2">Note:</Typography>
        <Box>
        <Typography variant="subtitle2">it was a please working with you and your team. We hope you will keep us in mind for future freelance projects.Thank you!</Typography>
        </Box>
        </Box>
      </Box>
      <Box sx={{width:"20%"}} >
        <Box sx={{p:2, backgroundColor:"#243548", borderRadius:1, my:3, display:"flex", flexDirection:"column", gap:2}}>
        <Button fullWidth variant="contained" color="inherit">Send invoice</Button>
        <Button fullWidth variant="contained" color="inherit">Preview</Button>
        <Button fullWidth variant="contained" color="inherit">Save</Button>
        </Box>
        <TextField fullWidth select value="@baalbet" size="small">
            <MenuItem key={-1} value="@baalbet">Accept Payment Via</MenuItem>
        </TextField>
            
        <Box my={1} sx={{display:"flex",justifyContent:"space-between"}}><Typography variant="subtitle1">Payment Terms</Typography><Switch checked /></Box>
        <Box my={1} sx={{display:"flex",justifyContent:"space-between"}}><Typography variant="subtitle1">Client Notes</Typography><Switch checked /></Box>
        <Box my={1} sx={{display:"flex",justifyContent:"space-between"}}><Typography variant="subtitle1">Payment Stub</Typography><Switch checked /></Box>

      </Box>
      </Box>
    </>);
}



// ----------------------------------------------------------------------
