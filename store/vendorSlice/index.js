import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const VendRegister = createAsyncThunk('vendors/register',async ( load )=>{
   const Register  = await axios.post( 'https://staging.nene.ng/api/vendors/register', load,{
    headers:{
      "Content-Type":'application/json'
    }
   })

   return Register
 })
 export const VendLogin = createAsyncThunk('vendors/login',async ( load )=>{
  const Login  = await axios.post( 'https://staging.nene.ng/api/vendors/login', load,{
   headers:{
     "Content-Type":'application/json'
   }
  })
  return Login
})


const Vendor = createSlice({
   name: 'vendor',
   initialState:'',
   reducers: {
     decrement: (state) => state - 1,
     incrementByAmount: (state, action) => state + action.payload,
   },
})

export default Vendor.reducer