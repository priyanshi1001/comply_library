import React, { useState } from 'react';
import {
  Collapse,
  CardHeader,
  IconButton,
  FormControl,
  Typography,
  Select,
  MenuItem,
  Input,
 
  Button,
} from '@mui/material';

// import { useDispatch} from "react-redux";
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
// import "./style.css"

import 'bootstrap/dist/css/bootstrap.css';
import Checkbox from '@mui/material/Checkbox';

export function Entity() {
  //States
  const [open, setOpen] = useState('');

  const [is_US, setUS] = useState(false);
  const [is_USACH, setUSACH] = useState('');
  const [selectedValue, setSelectedValue] = useState('b');
  const [selectedValue1, setSelectedValue1] = useState('b');
  const [radioButton, setRadioButton] = useState(false);
  const [incomeArr, setIncomeArr] = useState(['intrest']);
  const [accInfoSection, setAccInfoSection] = useState(false);
  const [accInfoType, setAccInfoType] = useState('');
  const [bankLocation, setBankLocation] = useState('');
  const [alternateNo, setAlternateNo] = useState(false);

  const paymentSelection = val => {
    console.log(val);
    if (val === '') {
      setAccInfoSection(false);
    } else {
      setAccInfoSection(true);
      setAccInfoType(val);
    }
  };

  const handleOpen = val => {
    if (open === val) {
      setOpen('');
    } else setOpen(val);
  };

  const handleRadio = event => {
    setSelectedValue(event.target.value);
  };

  const handleRadio1 = event => {
    setSelectedValue1(event.target.value);
  };

  const addIncomeType = () => {
    setIncomeArr(incomeArr => [...incomeArr, '']);
  };

  const returnFieldName = () => {
    if (is_USACH === 'US') {
      return 'ABA / Routing';
    } else if (is_USACH === 'UK') {
      return 'Sort Code';
    } else {
      return 'Bank Code';
    }
  };

  const clickInfo = () => {
    alert(
      'Instructor Identifier Format is ?*********************** \n 9- Numeric Value Only \n A - Alphabetical Character Only \n* = Alphanumeric Character only \n ? - Characters optional after this'
    );
  };
  return (
    <section className="inner_content" style={{ backgroundColor: '#0c3d69',marginBottom:'10px' }}>
      <div
        style={{ fontSize: '32px', fontWeight: '500', color:'white' }}
      >
        Account Holder Details
      </div>

    
        <div className="container-fluid">
          <div className="row"></div>

          <div className="col-lg-12 mt-3" style={{padding: "8px"}}>
          <Paper elevation={6} style={{ padding: '17px' }}>
            <form>
             
              <CardHeader
                style={{ textAlign: 'left' }}
                className="flex-row-reverse"
                title={
                  <div style={{ display: 'flex', alignItems: 'left',marginLeft: '13px'  }}>
                    Basic Details
                    <InfoIcon
                      style={{ color: '#ffc107', fontSize: '15px', marginLeft: '5px', cursor: 'pointer' }}
                      onClick={clickInfo}
                    />
                  </div>
                }
                action={
                  <IconButton
                    onClick={() => handleOpen('basics')}
                    aria-label="expand"
                    size="small"
                    style={{ marginTop: '3px' }}
                  >
                    {open === 'basics' ? (
                      <RemoveCircleOutlineOutlinedIcon />
                    ) : (
                      <ControlPointOutlinedIcon />
                    )}
                  </IconButton>
                }
              ></CardHeader>

              <Collapse
                className="px-5"
                in={open === 'basics'}
                timeout="auto"
                unmountOnExit
              >
                <FormControl className="w-100">
                  <div className="row">
                   
                    <div>
                      <Typography align="left" style={{ marginTop: '20px' }}>
                        Are you a U.S Individual?
                      
                        <span style={{ color: 'red' }}>*</span>
                        <InfoIcon
                          style={{ color: '#ffc107', fontSize: '15px',marginBottom:"12px" }}
                          onClick={clickInfo}
                        />
                      </Typography>

                      <div className="d-flex">
                        <Typography className="my-auto">Yes</Typography>
                        <Radio
                          required
                          checked={selectedValue1 === 'b'}
                          onChange={handleRadio1}
                          value="b"
                          name="radio-buttons"
                          inputProps={{ 'aria-label': 'B' }}
                        />
                        <Typography className="my-auto">No</Typography>
                        <Radio
                          required
                          checked={selectedValue1 === 'a'}
                          onChange={handleRadio1}
                          value="a"
                          name="radio-buttons"
                          inputProps={{ 'aria-label': 'A' }}
                        />
                      </div>
                    </div>

                    <div className="col-lg-3 col-6 col-md-3">
                      <Typography className="d-flex w-100 ">
                        Unique Identifier<span style={{ color: 'red' }}>*</span>
                        <InfoIcon
                          style={{ color: '#ffc107', fontSize: '15px' }}
                          onClick={clickInfo}
                        />
                      </Typography>
                      <Input
                        required
                        style={{
                          border: ' 1px solid #d9d9d9 ',
                          height: ' 36px',
                          lineHeight: '36px ',
                          background: '#fff ',
                          fontSize: '13px',
                          color: ' #000 ',
                          fontStyle: 'normal',
                          borderRadius: '1px',
                          padding: ' 0 10px ',
                        }}
                        className="w-100 input"
                        name="unique_id"
                        id="outlined"
                        placeholder="Enter Instructor Identifier"
                      />
                    </div>
                  </div>
                </FormControl>

                {selectedValue1 === 'a' ? (
                  <div className="row">
                    <div className="col-lg-3 col-6 col-md-3 mt-2">
                      <FormControl className="w-100">
                        <Typography align='left'>
                          Entity Name<span style={{ color: 'red' }}>*</span>
                        </Typography>
                        <Input
                          style={{
                            border: ' 1px solid #d9d9d9 ',
                            height: ' 36px',
                            lineHeight: '36px ',
                            background: '#fff ',
                            fontSize: '13px',
                            color: ' #000 ',
                            fontStyle: 'normal',
                            borderRadius: '1px',
                            padding: ' 0 10px ',
                          }}
                          required
                          id="outlined"
                          name="first_name"
                          placeholder="Enter Business Name"
                        />
                      </FormControl>
                    </div>
                 
                  </div>
                ) : (
                  <div className="row">
                    <div className="col-lg-3 col-6 col-md-3 mt-2">
                      <FormControl className="w-100">
                        <Typography align='left'>
                          Entity Name<span style={{ color: 'red' }}>*</span>
                        </Typography>
                        <Input
                          style={{
                            border: ' 1px solid #d9d9d9 ',
                            height: ' 36px',
                            lineHeight: '36px ',
                            background: '#fff ',
                            fontSize: '13px',
                            color: ' #000 ',
                            fontStyle: 'normal',
                            borderRadius: '1px',
                            padding: ' 0 10px ',
                          }}
                          required
                          id="outlined"
                          name="first_name"
                          placeholder="Enter Business Name"
                        />
                      </FormControl>
                    </div>
                    {/* <div className="col-lg-3 col-6 col-md-3 mt-2">
                      <FormControl className="w-100">
                        <Typography>
                          Last Name<span style={{ color: 'red' }}>*</span>
                        </Typography>
                        <Input
                          required
                          style={{
                            border: ' 1px solid #d9d9d9 ',
                            height: ' 36px',
                            lineHeight: '36px ',
                            background: '#fff ',
                            fontSize: '13px',
                            color: ' #000 ',
                            fontStyle: 'normal',
                            borderRadius: '1px',
                            padding: ' 0 10px ',
                          }}
                          id="outlined"
                          name="last_name"
                          placeholder="Enter Last Name"
                        />
                      </FormControl>
                    </div> */}
                  </div>
                )}
              </Collapse>
              <hr className="w-100"></hr>
              
              <CardHeader
               style={{ textAlign: 'left' }}
                className="flex-row-reverse"
                title={
                  <div style={{ display: 'flex', alignItems: 'left',marginLeft: '13px'  }}>
                    Tax Identification Numbers
                    <InfoIcon
                      style={{ color: '#ffc107', fontSize: '15px', marginLeft: '5px', cursor: 'pointer' }}
                      onClick={clickInfo}
                    />
                  </div>
                }
               
                action={
                  <IconButton
                    onClick={() => handleOpen('tax')}
                    aria-label="expand"
                    size="small"
                    style={{marginTop:"3px"}}
                  >
                    {open === 'tax' ? (
                      <RemoveCircleOutlineOutlinedIcon />
                    ) : (
                      <ControlPointOutlinedIcon />
                    )}
                  </IconButton>
                }
              ></CardHeader>
              <Collapse
                className="px-5"
                in={open === 'tax'}
                timeout="auto"
                unmountOnExit

              >
                <div className='col-12 d-flex'>
                <div className="col-lg-3 col-6 col-md-3 ">
                  
                    <Typography align='left' className="d-flex w-100 ">
                      U.S. TIN Type<span style={{ color: 'red' }}>*</span>
                    </Typography>

                    <FormControl className="w-100">
                      <select
                        style={{
                          padding: ' 0 10px',
                          color: '#7e7e7e',
                          fontStyle: 'italic',
                          height: '36px',
                        }}
                        name="Income"
                        id="Income"
                        defaultValue={1}
                      >
                        <option value="1">-Select-</option>

                        <option></option>
                      </select>
                    </FormControl>
                    </div>

                     <div className="col-lg-3 col-6 col-md-3 mx-2">
                    <FormControl className="w-100">
                      <Typography align='left'>
                      U.S. TIN
                        <span style={{ color: 'red' }}>*</span>
                      </Typography>
                      <Input
                        required
                        style={{
                          border: ' 1px solid #d9d9d9 ',
                          height: ' 36px',
                          lineHeight: '36px ',
                          background: '#fff ',
                          fontSize: '13px',
                          color: ' #000 ',
                          fontStyle: 'normal',
                          borderRadius: '1px',
                          padding: ' 0 10px ',
                        }}
                        id="outlined"
                        name="street"
                        placeholder="Enter U.S. TIN"
                      />
                    </FormControl>
</div>

</div>  
{selectedValue1 === 'a' ? (
<div className='col-12 d-flex mt-3'>
                <div className="col-lg-3 col-6 col-md-3 ">
                  
                    <Typography align='left' className="d-flex w-100 ">
                    Foreign TIN Country<span style={{ color: 'red' }}>*</span>
                    </Typography>

                    <FormControl className="w-100">
                      <select
                        style={{
                          padding: ' 0 10px',
                          color: '#7e7e7e',
                          fontStyle: 'italic',
                          height: '36px',
                        }}
                        name="Income"
                        id="Income"
                        defaultValue={1}
                      >
                        <option value="1">-Select-</option>

                        <option></option>
                      </select>
                    </FormControl>
                    </div>

                     <div className="col-lg-3 col-6 col-md-3 mx-2">
                    <FormControl className="w-100">
                      <Typography align='left'>
                      Foreign TIN 
                        <span style={{ color: 'red' }}>*</span>
                      </Typography>
                      <Input
                        required
                        style={{
                          border: ' 1px solid #d9d9d9 ',
                          height: ' 36px',
                          lineHeight: '36px ',
                          background: '#fff ',
                          fontSize: '13px',
                          color: ' #000 ',
                          fontStyle: 'normal',
                          borderRadius: '1px',
                          padding: ' 0 10px ',
                        }}
                        id="outlined"
                        name="street"
                        placeholder="Enter U.S. TIN"
                      />
                    </FormControl>
                    <div className="d-flex">
                        <Typography style={{fontSize:'13px',marginTop:'10px'}}>Not Available </Typography>
                        <Radio
                         disabled
                        //   checked={selectedValue1 === 'b'}
                        //   onChange={handleRadio1}
                          value="b"
                          name="radio-buttons"
                          inputProps={{ 'aria-label': 'B' }}
                        />
                        <Typography style={{fontSize:'13px',marginTop:'10px'}}>Alternative TIN Format</Typography>
                        <Radio
                        //   required
                        //   checked={selectedValue1 === 'a'}
                        disabled
                          value="a"
                          name="radio-buttons"
                          inputProps={{ 'aria-label': 'A' }}
                        />
                      </div>
</div>

</div> 

 ) : ("")}
 {selectedValue1 === 'a' ? (
<div className="col-lg-3 col-6 col-md-3 ">
                    <FormControl className="w-100">
                      <Typography align='left'>
                      GIIN
                        <span style={{ color: 'red' }}>*</span>
                        <InfoIcon
                      style={{ color: '#ffc107', fontSize: '15px',marginBottom:"12px" }}
                      onClick={clickInfo}
                    />
                      </Typography>
                      <Input
                        required
                        style={{
                          border: ' 1px solid #d9d9d9 ',
                          height: ' 36px',
                          lineHeight: '36px ',
                          background: '#fff ',
                          fontSize: '13px',
                          color: ' #000 ',
                          fontStyle: 'normal',
                          borderRadius: '1px',
                          padding: ' 0 10px ',
                        }}
                        id="outlined"
                        name="street"
                        type='uppercase'
                        placeholder="Enter GIIN"
                      />
                    </FormControl>
</div>             
   ) : ("")}                 
              </Collapse>
              <hr className="w-100"></hr>

              {/* Permanent Residence Section */}
              <CardHeader
               style={{ textAlign: 'left',  }}
                className="flex-row-reverse"
               
                title={
                  <div style={{ display: 'flex', alignItems: 'left',marginLeft: '13px'  }}>
                    Permanent Residence Address
                    <InfoIcon
                      style={{ color: '#ffc107', fontSize: '15px', marginLeft: '5px', cursor: 'pointer' }}
                      onClick={clickInfo}
                    />
                  </div>
                }
                action={
                  <IconButton
                    onClick={() => handleOpen('pra')}
                    aria-label="expand"
                    size="small"
                    style={{marginTop:"3px"}}
                  >
                    {open === 'pra' ? (
                      <RemoveCircleOutlineOutlinedIcon />
                    ) : (
                      <ControlPointOutlinedIcon />
                    )}
                  </IconButton>
                }
              ></CardHeader>
              <Collapse
                className="px-5 "
                in={open === 'pra'}
                timeout="auto"
                unmountOnExit
              >
                <div className="col-lg-3 col-6 col-md-3">
                  <Typography className="d-flex w-100 ">
                    Residential Country:<span style={{ color: 'red' }}>*</span>
                  </Typography>

                  <FormControl className="w-100">
                    <select
                      style={{
                        padding: ' 0 10px',
                        color: '#7e7e7e',
                        fontStyle: 'italic',
                        height: '36px',
                      }}
                      name="Income"
                      id="Income"
                      defaultValue={1}
                    >
                      <option value="1">-Select-</option>

                      <option>{/* {country.name} */}</option>
                      {/* ))} */}
                    </select>
                  </FormControl>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                    <FormControl className="w-100">
                      <Typography align='left'>
                        Street Number and Name:
                        <span style={{ color: 'red' }}>*</span>
                      </Typography>
                      <Input
                        required
                        style={{
                          border: ' 1px solid #d9d9d9 ',
                          height: ' 36px',
                          lineHeight: '36px ',
                          background: '#fff ',
                          fontSize: '13px',
                          color: ' #000 ',
                          fontStyle: 'normal',
                          borderRadius: '1px',
                          padding: ' 0 10px ',
                        }}
                        id="outlined"
                        name="street"
                        placeholder="Enter Street Number and Name"
                      />
                    </FormControl>
                  </div>
                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                    <FormControl className="w-100">
                      <Typography align='left'>Apt/Suite:</Typography>
                      <Input
                        required
                        style={{
                          border: ' 1px solid #d9d9d9 ',
                          height: ' 36px',
                          lineHeight: '36px ',
                          background: '#fff ',
                          fontSize: '13px',
                          color: ' #000 ',
                          fontStyle: 'normal',
                          borderRadius: '1px',
                          padding: ' 0 10px ',
                        }}
                        id="outlined"
                        name="apt"
                        placeholder="Enter Apt/Suite"
                      />
                    </FormControl>
                  </div>
                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                    <FormControl className="w-100">
                      <Typography align='left'>
                        City or Town:<span style={{ color: 'red' }}>*</span>
                      </Typography>
                      <Input
                        required
                        style={{
                          border: ' 1px solid #d9d9d9 ',
                          height: ' 36px',
                          lineHeight: '36px ',
                          background: '#fff ',
                          fontSize: '13px',
                          color: ' #000 ',
                          fontStyle: 'normal',
                          borderRadius: '1px',
                          padding: ' 0 10px ',
                        }}
                        id="outlined"
                        name="city"
                        placeholder="Enter City or Town"
                      />
                    </FormControl>
                  </div>
                  {/* {is_US ? (
                    <div className="col-lg-3 col-6 col-md-3 mt-2">
                      <FormControl className="w-100">
                        <Select
                          style={{
                            padding: ' 0 10px',
                            color: '#7e7e7e',
                            fontStyle: 'italic',
                            height: '36px',
                            marginTop: '23px',
                          }}
                          defaultValue={0}
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                        >
                          <MenuItem value="0">--Select--</MenuItem>
                          <MenuItem value={1}>Alabama</MenuItem>
                          <MenuItem value={2}>Alaska</MenuItem>
                          <MenuItem value={3}>etc</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  ) : ( */}
                    <div className="col-lg-3 col-6 col-md-3 mt-2">
                      <FormControl className="w-100">
                        <Typography align='left'>
                          State or Province:
                          <span style={{ color: 'red' }}>*</span>
                        </Typography>
                        <Input
                          required
                          style={{
                            border: ' 1px solid #d9d9d9 ',
                            height: ' 36px',
                            lineHeight: '36px ',
                            background: '#fff ',
                            fontSize: '13px',
                            color: ' #000 ',
                            fontStyle: 'normal',
                            borderRadius: '1px',
                            padding: ' 0 10px ',
                          }}
                          id="outlined"
                          name="state"
                          placeholder="Enter State or Province"
                        />
                      </FormControl>
                    </div>
                  {/* )} */}
                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                    <FormControl className="w-100">
                      <Typography align='left'>
                        Zip / Postal Code:
                        <span style={{ color: 'red' }}>*</span>
                      </Typography>
                      <Input
                        required
                        style={{
                          border: ' 1px solid #d9d9d9 ',
                          height: ' 36px',
                          lineHeight: '36px ',
                          background: '#fff ',
                          fontSize: '13px',
                          color: ' #000 ',
                          fontStyle: 'normal',
                          borderRadius: '1px',
                          padding: ' 0 10px ',
                        }}
                        id="outlined"
                        name="state"
                        placeholder="Enter Zip or Postal Code"
                      />
                    </FormControl>
                  </div>
                </div>
                <div className='d-flex'>
               <div>
                  <Typography align="left" style={{ marginTop: '20px' }}>
                  Is this address a Post Office Box?
                    
                    <span style={{ color: 'red' }}>*</span>
                    <InfoIcon
                      style={{ color: '#ffc107', fontSize: '15px',marginBottom:"12px"}}
                      onClick={clickInfo}
                    />
                  </Typography>

                  <div className="d-flex ">
                  <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="No" />
        <FormControlLabel value="male" control={<Radio />} label="Yes" />
     
       
      </RadioGroup>
                    {/* <Typography className="my-auto">Yes</Typography>
                    <Radio
                      required
                    //   checked={selectedValue === 'a'}
                    //   onChange={handleRadio}
                      value="a"
                      name="radio-buttons"
                      inputProps={{ 'aria-label': 'A' }}
                    />
                    <Typography className="my-auto">No</Typography>
                    <Radio
                      required
                    //   checked={selectedValue === 'b'}
                    //   onChange={handleRadio}
                      value="b"
                      name="radio-buttons"
                      inputProps={{ 'aria-label': 'B' }}
                    /> */}
                  </div>
                 
                  </div>
                <div className='mx-5'>
                  <Typography  style={{ marginTop: '20px' }}>
                  Is this an In Care Of address?
                    
                    <span style={{ color: 'red' }}>*</span>
                    <InfoIcon
                      style={{ color: '#ffc107', fontSize: '15px' ,marginBottom:"12px"}}
                      onClick={clickInfo}
                    />
                  </Typography>

                  <div className="d-flex">
                  <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="No" />
        <FormControlLabel value="male" control={<Radio />} label="Yes" />
     
       
      </RadioGroup>
                    {/* <Typography className="my-auto">Yes</Typography>
                    <Radio
                      required
                    //   checked={selectedValue === 'a'}
                    //   onChange={handleRadio}
                      value="a"
                      name="radio-buttons"
                      inputProps={{ 'aria-label': 'A' }}
                    />
                    <Typography className="my-auto">No</Typography>
                    <Radio
                      required
                    //   checked={selectedValue === 'b'}
                    //   onChange={handleRadio}
                      value="b"
                      name="radio-buttons"
                      inputProps={{ 'aria-label': 'B' }}
                    /> */}
                  </div>
                </div>

                <div className='mx-5'>
                  <Typography style={{ marginTop: '20px' }}>
                    Is there an alternative mailing or business address in the
                    US?
                    
                    <span style={{ color: 'red' }}>*</span>
                    <InfoIcon
                      style={{ color: '#ffc107', fontSize: '15px' ,marginBottom:"12px"}}
                      onClick={clickInfo}
                    />
                  </Typography>

                  <div className="d-flex">
                    <Typography className="my-auto">Yes</Typography>
                    <Radio
                      required
                      checked={selectedValue === 'a'}
                      onChange={handleRadio}
                      value="a"
                      name="radio-buttons"
                      inputProps={{ 'aria-label': 'A' }}
                    />
                    <Typography className="my-auto">No</Typography>
                    <Radio
                      required
                      checked={selectedValue === 'b'}
                      onChange={handleRadio}
                      value="b"
                      name="radio-buttons"
                      inputProps={{ 'aria-label': 'B' }}
                    />
                  </div>
                </div>
                </div>
                {/* IF Alternate mailing address */}

                {selectedValue === 'a' ? (
                  <>

<div className="col-lg-3 col-6 col-md-3">
                  <Typography className="d-flex w-100 ">
                    Residential Country:<span style={{ color: 'red' }}>*</span>
                  </Typography>

                  <FormControl className="w-100">
                    <Select
                      style={{
                        padding: ' 0 10px',
                        color: '#7e7e7e',
                        fontStyle: 'italic',
                        height: '36px',
                      }}
                      name="Income"
                      id="Income"
                      defaultValue={1}
                    >
                      <MenuItem value="0" onClick={() => setUS(false)}>
                          <em>--Select--</em>
                        </MenuItem>
                        <MenuItem value={1} onClick={() => setUS(false)}>
                          UK
                        </MenuItem>
                        <MenuItem value={2} onClick={() => setUS(true)}>
                          US
                        </MenuItem>
                        <MenuItem value={3} onClick={() => setUS(false)}>
                          Others
                        </MenuItem>
                    
                    </Select>
                  </FormControl>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                    <FormControl className="w-100">
                      <Typography align='left'>
                        Street Number and Name:
                        <span style={{ color: 'red' }}>*</span>
                      </Typography>
                      <Input
                        required
                        style={{
                          border: ' 1px solid #d9d9d9 ',
                          height: ' 36px',
                          lineHeight: '36px ',
                          background: '#fff ',
                          fontSize: '13px',
                          color: ' #000 ',
                          fontStyle: 'normal',
                          borderRadius: '1px',
                          padding: ' 0 10px ',
                        }}
                        id="outlined"
                        name="street"
                        placeholder="Enter Street Number and Name"
                      />
                    </FormControl>
                  </div>
                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                    <FormControl className="w-100">
                      <Typography align='left'>Apt/Suite:</Typography>
                      <Input
                        required
                        style={{
                          border: ' 1px solid #d9d9d9 ',
                          height: ' 36px',
                          lineHeight: '36px ',
                          background: '#fff ',
                          fontSize: '13px',
                          color: ' #000 ',
                          fontStyle: 'normal',
                          borderRadius: '1px',
                          padding: ' 0 10px ',
                        }}
                        id="outlined"
                        name="apt"
                        placeholder="Enter Apt/Suite"
                      />
                    </FormControl>
                  </div>
                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                    <FormControl className="w-100">
                      <Typography align='left'>
                        City or Town:<span style={{ color: 'red' }}>*</span>
                      </Typography>
                      <Input
                        required
                        style={{
                          border: ' 1px solid #d9d9d9 ',
                          height: ' 36px',
                          lineHeight: '36px ',
                          background: '#fff ',
                          fontSize: '13px',
                          color: ' #000 ',
                          fontStyle: 'normal',
                          borderRadius: '1px',
                          padding: ' 0 10px ',
                        }}
                        id="outlined"
                        name="city"
                        placeholder="Enter City or Town"
                      />
                    </FormControl>
                  </div>
                  {is_US ? (
                    <div className="col-lg-3 col-6 col-md-3 mt-2">
                     <Typography align='left' className="d-flex w-100 ">
                     State or Province:<span style={{ color: 'red' }}>*</span>
                  </Typography>

                  <FormControl className="w-100">
                    <Select
                      style={{
                        padding: ' 0 10px',
                        color: '#7e7e7e',
                        fontStyle: 'italic',
                        height: '36px',
                      }}
                      name="Income"
                      id="Income"
                      defaultValue={1}
                    >
                      <MenuItem value="0" >
                          <em>--Select--</em>
                        </MenuItem>
                        <MenuItem value={1} >
                          UK
                        </MenuItem>
                        <MenuItem value={2} >
                          US
                        </MenuItem>
                        <MenuItem value={3} >
                          Others
                        </MenuItem>
                    
                    </Select>
                  </FormControl>
                    </div>
                  ) : (
                    <div className="col-lg-3 col-6 col-md-3 mt-2">
                      <FormControl className="w-100">
                        <Typography align='left'>
                          State or Province:
                          <span style={{ color: 'red' }}>*</span>
                        </Typography>
                        <Input
                          required
                          style={{
                            border: ' 1px solid #d9d9d9 ',
                            height: ' 36px',
                            lineHeight: '36px ',
                            background: '#fff ',
                            fontSize: '13px',
                            color: ' #000 ',
                            fontStyle: 'normal',
                            borderRadius: '1px',
                            padding: ' 0 10px ',
                          }}
                          id="outlined"
                          name="state"
                          placeholder="Enter State or Province"
                        />
                      </FormControl>
                    </div>
                  )}
                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                    <FormControl className="w-100">
                      <Typography align='left'>
                        Zip / Postal Code:
                        <span style={{ color: 'red' }}>*</span>
                      </Typography>
                      <Input
                        required
                        style={{
                          border: ' 1px solid #d9d9d9 ',
                          height: ' 36px',
                          lineHeight: '36px ',
                          background: '#fff ',
                          fontSize: '13px',
                          color: ' #000 ',
                          fontStyle: 'normal',
                          borderRadius: '1px',
                          padding: ' 0 10px ',
                        }}
                        id="outlined"
                        name="state"
                        placeholder="Enter Zip or Postal Code"
                      />
                    </FormControl>
                  </div>
                </div>

               
                
                  </>
                ) : (
                  ''
                )}
              </Collapse>

              {/* Contact Details */}
              <hr className="w-100"></hr>

              <CardHeader
               style={{ textAlign: 'left' }}
                className="flex-row-reverse"
              
                title={
                  <div style={{ display: 'flex', alignItems: 'left',marginLeft: '13px'  }}>
                    Contact Details
                    <InfoIcon
                      style={{ color: '#ffc107', fontSize: '15px', marginLeft: '5px', cursor: 'pointer' }}
                      onClick={clickInfo}
                    />
                  </div>
                }
                action={
                  <IconButton
                    onClick={() => handleOpen('cd')}
                    aria-label="expand"
                    size="small"
                    style={{marginTop:"3px"}}
                  >
                    {open === 'cd' ? (
                      <RemoveCircleOutlineOutlinedIcon />
                    ) : (
                      <ControlPointOutlinedIcon />
                    )}
                  </IconButton>
                }
              ></CardHeader>

              <Collapse
                className="px-5"
                in={open === 'cd'}
                timeout="auto"
                unmountOnExit
              >
                <div className="row">
                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                    <FormControl className="w-100">
                      <Typography align='left'>
                        First Name<span style={{ color: 'red' }}>*</span>
                      </Typography>
                      <Input
                        required
                        style={{
                          border: ' 1px solid #d9d9d9 ',
                          height: ' 36px',
                          lineHeight: '36px ',
                          background: '#fff ',
                          fontSize: '13px',
                          color: ' #000 ',
                          fontStyle: 'normal',
                          borderRadius: '1px',
                          padding: ' 0 10px ',
                        }}
                        id="outlined"
                        name="first_name"
                        placeholder="Enter First Name"
                      />
                    </FormControl>
                  </div>
                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                    <FormControl className="w-100">
                      <Typography align='left'>
                        Last Name<span style={{ color: 'red' }}>*</span>
                      </Typography>
                      <Input
                        required
                        style={{
                          border: ' 1px solid #d9d9d9 ',
                          height: ' 36px',
                          lineHeight: '36px ',
                          background: '#fff ',
                          fontSize: '13px',
                          color: ' #000 ',
                          fontStyle: 'normal',
                          borderRadius: '1px',
                          padding: ' 0 10px ',
                        }}
                        id="outlined"
                        name="last_name"
                        placeholder="Enter Last Name"
                      />
                    </FormControl>
                  </div>
                  <FormControl className="w-100">
                    <div className="row">
                      <div className="col-lg-3 col-6 col-md-3 mt-2 mx-2">
                        <FormControl className="w-100">
                          <Typography align='left'>
                            Email<span style={{ color: 'red' }}>*</span>
                          </Typography>
                          <Input
                            required
                            style={{
                              border: ' 1px solid #d9d9d9 ',
                              height: ' 36px',
                              lineHeight: '36px ',
                              background: '#fff ',
                              fontSize: '13px',
                              color: ' #000 ',
                              fontStyle: 'normal',
                              borderRadius: '1px',
                              padding: ' 0 10px ',
                            }}
                            name="email"
                            id="outlined"
                            type="email"
                            placeholder="example@domain.com"
                          />
                        </FormControl>
                      </div>
                    </div>
                  </FormControl>

                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                    <FormControl className="w-100">
                      <Typography align='left'>Primary Contact Number</Typography>
                      <select
                        style={{
                          padding: ' 0 10px',
                          color: '#7e7e7e',
                          fontStyle: 'italic',
                          height: '36px',
                        }}
                        name="Income"
                        id="Income"
                      >
                        <option value="">-Select-</option>

                        <option></option>
                      </select>
                      <Input
                        required
                        style={{
                          border: ' 1px solid #d9d9d9 ',
                          height: ' 36px',
                          lineHeight: '36px ',
                          background: '#fff ',
                          fontSize: '13px',
                          color: ' #000 ',
                          fontStyle: 'normal',
                          borderRadius: '1px',
                          padding: ' 0 10px ',
                        }}
                        id="outlined"
                        name="primaryMobileNo"
                        placeholder="Enter Last Name"
                      />
                    </FormControl>
                  </div>
                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                    <FormControl className="w-100">
                      <Typography align='left'>Secondary Contact Number</Typography>
                      <select
                        style={{
                          padding: ' 0 10px',
                          color: '#7e7e7e',
                          fontStyle: 'italic',
                          height: '36px',
                        }}
                        name="Income"
                        id="Income"
                      >
                        <option value="">-Select-</option>

                        <option></option>
                      </select>
                      <Input
                        required
                        style={{
                          border: ' 1px solid #d9d9d9 ',
                          height: ' 36px',
                          lineHeight: '36px ',
                          background: '#fff ',
                          fontSize: '13px',
                          color: ' #000 ',
                          fontStyle: 'normal',
                          borderRadius: '1px',
                          padding: ' 0 10px ',
                        }}
                        id="outlined"
                        name="secondaryMobileNo1"
                        placeholder="Enter Alternate Mobile No"
                      />
                    </FormControl>
                  </div>

                  <div>
                    {alternateNo ? (
                      <div className="col-lg-3 col-6 col-md-3 mt-3">
                        <FormControl className="w-100">
                          <Typography align='left'>Secondary Contact Number</Typography>
                          <span className="w-100 d-flex">
                            
                            <select
                              className="w-100"
                              style={{
                                padding: ' 0 10px',
                                color: '#7e7e7e',
                                fontStyle: 'italic',
                                height: '36px',
                              }}
                              name="Income"
                              id="Income"
                            >
                              <option value="">--Select--</option>

                             
                            </select>
                            <DeleteIcon
                              style={{ color: 'red', fontSize: '20px',marginTop:'5px' }}
                              onClick={() => {
                                setAlternateNo(false);
                              }}
                            />
                          </span>
                          <Input
                            required
                            style={{
                              border: ' 1px solid #d9d9d9 ',
                              height: ' 36px',
                              lineHeight: '36px ',
                              background: '#fff ',
                              fontSize: '13px',
                              color: ' #000 ',
                              fontStyle: 'normal',
                              borderRadius: '1px',
                              padding: ' 0 10px ',
                            }}
                            id="outlined"
                            name="secondaryMobileNo1"
                            placeholder="Enter Alternate Mobile No"
                          />
                        </FormControl>
                      </div>
                    ) : (
                      <Typography
                        style={{
                          color: '#007bff',
                          cursor: 'pointer',
                          fontSize: '12px',
                          marginTop: '8px',
                        }}
                        onClick={() => setAlternateNo(true)}
                      >
                        <a>Add Alternative Number</a>
                      </Typography>
                    )}
                  </div>
                </div>
              </Collapse>

            
              <hr className="w-100 "></hr>

              <CardHeader
               style={{ textAlign: 'left' }}
                className="flex-row-reverse"
                
                title={
                  <div style={{ display: 'flex', alignItems: 'left',marginLeft: '13px'  }}>
                    Income Type
                    <span style={{fontSize:'13px',color:'grey',marginLeft:"4px",marginTop:'11px'}}>
                    (Optional)
                    </span>
                    
                    <InfoIcon
                      style={{ color: '#ffc107', fontSize: '15px', marginLeft: '5px', cursor: 'pointer' }}
                      onClick={clickInfo}
                    />
                  </div>
                }
                action={
                  <IconButton
                    onClick={() => handleOpen('it')}
                    aria-label="expand"
                    size="small"
                    style={{marginTop:"3px"}}
                  >
                    {open === 'it' ? (
                      <RemoveCircleOutlineOutlinedIcon />
                    ) : (
                      <ControlPointOutlinedIcon />
                    )}
                  </IconButton>
                }
              ></CardHeader>
              <Collapse
                className="px-5"
                in={open === 'it'}
                timeout="auto"
                unmountOnExit
              >
                {incomeArr.length &&
                  incomeArr.map(ind => {
                    return (

                      <div className="col-lg-3 col-6 col-md-3 ">
                  
                      <Typography className="d-flex w-100 pb-2">
                      Income Type<span style={{ color: 'red' }}>*</span>
                      </Typography>
  
                      <FormControl className="w-100 d-flex" key={ind}>
                      <span className="w-100 d-flex pb-2">
                        <select
                         className="w-100 "
                          style={{
                            padding: ' 0 10px',
                            color: '#7e7e7e',
                            fontStyle: 'italic',
                            height: '36px',
                          }}
                          name="Income"
                          id="Income"
                          defaultValue={1}
                        >
                          <option value="1">-Select-</option>
  
                          <option>Intrest</option>
                        </select>
                        <DeleteIcon
                         onClick={() => {
                          setAlternateNo(false);
                        }}
                          style={{ color: 'red', fontSize: '20px' ,marginTop:"8px",marginLeft:'4px'}}
                         />
                        </span>
                      </FormControl>
                     
                      </div>
  
                    
                    );
                  })}

                <Typography
                  style={{
                    color: '#007bff',
                    cursor: 'pointer',
                    fontSize: '12px',
                  }}
                  onClick={() => addIncomeType()}
                >
                  <a>Add Income Type</a>
                </Typography>
              </Collapse>
              <hr className="w-100"></hr>

              {/* Payment Type   */}
              <CardHeader
               style={{ textAlign: 'left' }}
                className="flex-row-reverse"
              
                title={
                  <div style={{ display: 'flex', alignItems: 'left',marginLeft: '13px'  }}>
                    Payment Type
                    <span style={{fontSize:'13px',color:'grey',marginLeft:"4px",marginTop:'11px'}}>
                    (Optional)
                    </span>
                    
                    <InfoIcon
                      style={{ color: '#ffc107', fontSize: '15px', marginLeft: '5px', cursor: 'pointer' }}
                      onClick={clickInfo}
                    />
                  </div>
                }
                action={
                  <IconButton
                    onClick={() => handleOpen('pt')}
                    aria-label="expand"
                    size="small"
                    style={{marginTop:'3px'}}
                  >
                    {open === 'pt' ? (
                      <RemoveCircleOutlineOutlinedIcon />
                    ) : (
                      <ControlPointOutlinedIcon />
                    )}
                  </IconButton>
                }
              ></CardHeader>
              <Collapse
                className="px-5"
                in={open === 'pt'}
                timeout="auto"
                unmountOnExit
              >

                
<div className="col-lg-3 col-6 col-md-3 ">
                  
                  <Typography className="d-flex w-100 pb-2">
                  Payment Type<span style={{ color: 'red' }}>*</span>
                  </Typography>

                  <FormControl className="w-100 d-flex" >
                  <span className="w-100 d-flex">

                    <select className='w-100'
                      style={{
                        padding: ' 0 10px',
                        color: '#7e7e7e',
                        fontStyle: 'italic',
                        height: '36px',
                      }}
                      name="Payment"
                      id="Payment"
                      onChange={e => {
                        paymentSelection(e.target.value);
                      }}
                      defaultValue={1}
                    >
                      <option value="1">--Select--</option>

                      <option value="">Select</option>
                    <option value="ACH">ACH</option>
                    <option value="Check">Check</option>
                    <option value="Wire">Wire</option>


                    </select>
                    <DeleteIcon
                      style={{ color: 'red', fontSize: '20px',marginTop:"8px",marginLeft:'4px' }}
                     />
                    </span>
                  </FormControl>
                
                  </div>
                {/* <FormControl>
                  <Typography>Payment Type</Typography>
                  <select
                    style={{
                      padding: ' 0 10px',
                      color: '#7e7e7e',
                      fontStyle: 'italic',
                      height: '36px',
                    }}
                    name="Payment"
                    id="Payment"
                    onChange={e => {
                      paymentSelection(e.target.value);
                    }}
                  >
                    <option value="">Select</option>
                    <option value="ACH">ACH</option>
                    <option value="Check">Check</option>
                    <option value="Wire">Wire</option>
                  </select>
                </FormControl> */}

             
              </Collapse>
              <hr className="w-100"></hr>

            
              {accInfoSection ? (
                <>
                  <CardHeader
                   style={{ textAlign: 'left' }}
                    className="flex-row-reverse"
                   
                    title={
                      <div style={{ display: 'flex', alignItems: 'left',marginLeft: '13px'  }}>
                        Account Information
                        <span style={{fontSize:'13px',color:'grey',marginLeft:"4px",marginTop:'11px'}}>
                        (Mandatory)
                        </span>
                        
                        <InfoIcon
                          style={{ color: '#ffc107', fontSize: '15px', marginLeft: '5px', cursor: 'pointer' }}
                          onClick={clickInfo}
                        />
                      </div>
                    }
                    action={
                      <IconButton
                        onClick={() => handleOpen('ai')}
                        aria-label="expand"
                        size="small"
                        style={{marginTop:'3px'}}
                      >
                        {open !== 'ai' ? (
                          <ControlPointOutlinedIcon />
                        ) : (
                          <RemoveCircleOutlineOutlinedIcon />
                        )}
                      </IconButton>
                    }
                  ></CardHeader>
                  <Collapse
                    className="px-5"
                    in={open === 'ai'}
                    timeout="auto"
                    unmountOnExit
                  >
                    {/* ACH */}
                    {accInfoType === 'ACH' ? (
                      <>
                        {/* <FormControl className="mx-1">
                          <Typography>
                            Account holder name
                            <span style={{ color: 'red' }}>*</span>
                          </Typography>
                          <Input
                            required
                            style={{
                              border: ' 1px solid #d9d9d9 ',
                              height: ' 36px',
                              lineHeight: '36px ',
                              background: '#fff ',
                              fontSize: '13px',
                              color: ' #000 ',
                              fontStyle: 'normal',
                              borderRadius: '1px',
                              padding: ' 0 10px ',
                            }}
                            name="Account_holder_name"
                            id="outlined"
                            placeholder="Enter Account holder name"
                          />
                        </FormControl> */}

                        {/* <FormControl className="mx-1">
                          <Typography>
                            Bank name<span style={{ color: 'red' }}>*</span>
                          </Typography>
                          <Input
                            required
                            style={{
                              border: ' 1px solid #d9d9d9 ',
                              height: ' 36px',
                              lineHeight: '36px ',
                              background: '#fff ',
                              fontSize: '13px',
                              color: ' #000 ',
                              fontStyle: 'normal',
                              borderRadius: '1px',
                              padding: ' 0 10px ',
                            }}
                            name="bank_name"
                            id="outlined"
                            placeholder="Enter Bank name"
                          />
                        </FormControl> */}

                        {/* <FormControl className="mx-1">
                          <Typography>
                            Residential Country:
                            <span style={{ color: 'red' }}>*</span>
                          </Typography>
                          <Select
                            style={{
                              padding: ' 0 10px',
                              color: '#7e7e7e',
                              fontStyle: 'italic',
                              height: '36px',
                            }}
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                           
                          >
                            <MenuItem value="" onClick={() => setUSACH('')}>
                              <em>--Select--</em>
                            </MenuItem>
                            <MenuItem value={1} onClick={() => setUSACH('UK')}>
                              UK
                            </MenuItem>
                            <MenuItem value={2} onClick={() => setUSACH('US')}>
                              US
                            </MenuItem>
                            <MenuItem value={3} onClick={() => setUSACH('')}>
                              Others
                            </MenuItem>
                          </Select>
                        
                        </FormControl> */}

                        {/* <FormControl className="mx-1">
                          <Typography>
                            Account Number
                            <span style={{ color: 'red' }}>*</span>
                          </Typography>
                          <Input
                            required
                            style={{
                              border: ' 1px solid #d9d9d9 ',
                              height: ' 36px',
                              lineHeight: '36px ',
                              background: '#fff ',
                              fontSize: '13px',
                              color: ' #000 ',
                              fontStyle: 'normal',
                              borderRadius: '1px',
                              padding: ' 0 10px ',
                            }}
                            name="account_number"
                            id="outlined"
                            placeholder="Enter Account Number"
                          />
                        </FormControl> */}
                        {/* <FormControl className="mx-1">
                          <Typography>
                            {returnFieldName()}
                            <span style={{ color: 'red' }}>*</span>
                          </Typography>
                          <Input
                            required
                            style={{
                              border: ' 1px solid #d9d9d9 ',
                              height: ' 36px',
                              lineHeight: '36px ',
                              background: '#fff ',
                              fontSize: '13px',
                              color: ' #000 ',
                              fontStyle: 'normal',
                              borderRadius: '1px',
                              padding: ' 0 10px ',
                            }}
                            name="bankCode"
                            id="outlined"
                            placeholder={returnFieldName()}
                          />
                        </FormControl> */}
  <div className="row">
                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                    <FormControl className="w-100">
                      <Typography align='left'>
                      Account holder name
                        <span style={{ color: 'red' }}>*</span>
                      </Typography>
                      <Input
                        required
                        style={{
                          border: ' 1px solid #d9d9d9 ',
                          height: ' 36px',
                          lineHeight: '36px ',
                          background: '#fff ',
                          fontSize: '13px',
                          color: ' #000 ',
                          fontStyle: 'normal',
                          borderRadius: '1px',
                          padding: ' 0 10px ',
                        }}
                        id="outlined"
                        name="street"
                        placeholder="Enter  Account holder name"
                      />
                    </FormControl>
                  </div>
                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                    <FormControl className="w-100">
                      <Typography align='left'> Bank name</Typography>
                      <Input
                        required
                        style={{
                          border: ' 1px solid #d9d9d9 ',
                          height: ' 36px',
                          lineHeight: '36px ',
                          background: '#fff ',
                          fontSize: '13px',
                          color: ' #000 ',
                          fontStyle: 'normal',
                          borderRadius: '1px',
                          padding: ' 0 10px ',
                        }}
                        id="outlined"
                        name="apt"
                        placeholder="Enter Bank name"
                      />
                    </FormControl>
                  </div>
                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                  
                      <Typography align='left'>
                        Branch Location<span style={{ color: 'red' }}>*</span>
                      </Typography>
                      <FormControl className="w-100">
                      <Select
                            style={{
                              padding: ' 0 10px',
                              color: '#7e7e7e',
                              fontStyle: 'italic',
                              height: '36px',
                            }}
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                           
                          >
                        <MenuItem value="" onClick={() => setUSACH('')}>
                        <em>--Select--</em>
                      </MenuItem>
                      <MenuItem value={1} onClick={() => setUSACH('UK')}>
                        UK
                      </MenuItem>
                      <MenuItem value={2} onClick={() => setUSACH('US')}>
                        US
                      </MenuItem>
                      <MenuItem value={3} onClick={() => setUSACH('')}>
                        Others
                      </MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                
                   
                
                    <div className="col-lg-3 col-6 col-md-3 mt-2">
                      <FormControl className="w-100">
                        <Typography align='left'>
                         Account Number
                          <span style={{ color: 'red' }}>*</span>
                        </Typography>
                        <Input
                          required
                          style={{
                            border: ' 1px solid #d9d9d9 ',
                            height: ' 36px',
                            lineHeight: '36px ',
                            background: '#fff ',
                            fontSize: '13px',
                            color: ' #000 ',
                            fontStyle: 'normal',
                            borderRadius: '1px',
                            padding: ' 0 10px ',
                          }}
                          id="outlined"
                          name="state"
                          placeholder="Enter Account Number"
                        />
                      </FormControl>
                    </div>
                
                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                    <FormControl className="w-100">
                      <Typography align='left'>
                      {returnFieldName()}
                        <span style={{ color: 'red' }}>*</span>
                      </Typography>
                      <Input
                        required
                        style={{
                          border: ' 1px solid #d9d9d9 ',
                          height: ' 36px',
                          lineHeight: '36px ',
                          background: '#fff ',
                          fontSize: '13px',
                          color: ' #000 ',
                          fontStyle: 'normal',
                          borderRadius: '1px',
                          padding: ' 0 10px ',
                        }}
                        id="outlined"
                        name="state"
                        placeholder={returnFieldName()}
                      />
                    </FormControl>
                  </div>
                </div>


                      </>
                    ) : (
                      ''
                    )}
                    {/* Check */}
                    {accInfoType === 'Check' ? (
                      <>
                    <div className="row">
                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                    <FormControl className="w-100">
                      <Typography align='left'>
                     Make Payable To
                        <span style={{ color: 'red' }}>*</span>
                      </Typography>
                      <Input
                        required
                        style={{
                          border: ' 1px solid #d9d9d9 ',
                          height: ' 36px',
                          lineHeight: '36px ',
                          background: '#fff ',
                          fontSize: '13px',
                          color: ' #000 ',
                          fontStyle: 'normal',
                          borderRadius: '1px',
                          padding: ' 0 10px ',
                        }}
                        id="outlined"
                        name="street"
                        placeholder="Enter Make Payable To"
                      />
                    </FormControl>
                  </div>
                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                    <FormControl className="w-100">
                      <Typography align='left'> Residential Country</Typography>
                      <Input
                        required
                        style={{
                          border: ' 1px solid #d9d9d9 ',
                          height: ' 36px',
                          lineHeight: '36px ',
                          background: '#fff ',
                          fontSize: '13px',
                          color: ' #000 ',
                          fontStyle: 'normal',
                          borderRadius: '1px',
                          padding: ' 0 10px ',
                        }}
                        id="outlined"
                        name="apt"
                        placeholder="Enter Residential Country"
                      />
                    </FormControl>
                  </div>
                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                  
                      <Typography align='left'>
                        Doing Business As Name<span style={{ color: 'red' }}>*</span>
                      </Typography>
                      <FormControl className="w-100">
                      <Select
                        required
                        style={{
                          border: ' 1px solid #d9d9d9 ',
                          height: ' 36px',
                          lineHeight: '36px ',
                          background: '#fff ',
                          fontSize: '13px',
                          color: ' #000 ',
                          fontStyle: 'normal',
                          borderRadius: '1px',
                          padding: ' 0 10px ',
                        }}
                        id="outlined"
                        name="city"
                        placeholder="Enter Doing Business As Name"
                      />
                    </FormControl>
                  </div>
                
                    <div className="col-lg-3 col-6 col-md-3 mt-2">
                      <FormControl className="w-100">
                        <Typography align='left'>
                         Street Number And Name
                          <span style={{ color: 'red' }}>*</span>
                        </Typography>
                        <Input
                          required
                          style={{
                            border: ' 1px solid #d9d9d9 ',
                            height: ' 36px',
                            lineHeight: '36px ',
                            background: '#fff ',
                            fontSize: '13px',
                            color: ' #000 ',
                            fontStyle: 'normal',
                            borderRadius: '1px',
                            padding: ' 0 10px ',
                          }}
                          id="outlined"
                          name="state"
                          placeholder="Enter Street Number And Name"
                        />
                      </FormControl>
                    </div>
                
                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                    <FormControl className="w-100">
                      <Typography align='left'>
                       Apt/Suite
                        <span style={{ color: 'red' }}>*</span>
                      </Typography>
                      <Input
                        required
                        style={{
                          border: ' 1px solid #d9d9d9 ',
                          height: ' 36px',
                          lineHeight: '36px ',
                          background: '#fff ',
                          fontSize: '13px',
                          color: ' #000 ',
                          fontStyle: 'normal',
                          borderRadius: '1px',
                          padding: ' 0 10px ',
                        }}
                        id="outlined"
                        name="state"
                        placeholder="Enter Apt/Suite"
                      />
                    </FormControl>
                  </div>
                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                    <FormControl className="w-100">
                      <Typography align='left'>
                      City OR Town
                        <span style={{ color: 'red' }}>*</span>
                      </Typography>
                      <Input
                        required
                        style={{
                          border: ' 1px solid #d9d9d9 ',
                          height: ' 36px',
                          lineHeight: '36px ',
                          background: '#fff ',
                          fontSize: '13px',
                          color: ' #000 ',
                          fontStyle: 'normal',
                          borderRadius: '1px',
                          padding: ' 0 10px ',
                        }}
                        id="outlined"
                        name="street"
                        placeholder="Enter  City OR Town"
                      />
                    </FormControl>
                  </div>
                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                    <FormControl className="w-100">
                      <Typography align='left'>
                      State OR Provience
                        <span style={{ color: 'red' }}>*</span>
                      </Typography>
                      <Input
                        required
                        style={{
                          border: ' 1px solid #d9d9d9 ',
                          height: ' 36px',
                          lineHeight: '36px ',
                          background: '#fff ',
                          fontSize: '13px',
                          color: ' #000 ',
                          fontStyle: 'normal',
                          borderRadius: '1px',
                          padding: ' 0 10px ',
                        }}
                        id="outlined"
                        name="street"
                        placeholder="Enter  State OR Provience"
                      />
                    </FormControl>
                  </div>
                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                    <FormControl className="w-100">
                      <Typography align='left'>
                      Zip/Postal Code
                        <span style={{ color: 'red' }}>*</span>
                      </Typography>
                      <Input
                        required
                        style={{
                          border: ' 1px solid #d9d9d9 ',
                          height: ' 36px',
                          lineHeight: '36px ',
                          background: '#fff ',
                          fontSize: '13px',
                          color: ' #000 ',
                          fontStyle: 'normal',
                          borderRadius: '1px',
                          padding: ' 0 10px ',
                        }}
                        id="outlined"
                        name="street"
                        placeholder="Enter Zip/Postal Code"
                      />
                    </FormControl>
                  </div>
                </div>
              

                        <div className='d-flex mt-3'>
                        <Checkbox />
                        <Typography align="left" style={{marginTop:"10px"}}>
                          Please check the box to confirm that the above details are correct for payment purposes.
                          <span style={{ color: 'red' }}>*</span>
                        </Typography>
                        </div>
                      </>
                    ) : (
                      ''
                    )}
                 
                    {accInfoType === 'Wire' ? (


                      <>

<div className="row">
                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                    <FormControl className="w-100">
                      <Typography>
                      Account holder name
                        <span style={{ color: 'red' }}>*</span>
                      </Typography>
                      <Input
                        required
                        style={{
                          border: ' 1px solid #d9d9d9 ',
                          height: ' 36px',
                          lineHeight: '36px ',
                          background: '#fff ',
                          fontSize: '13px',
                          color: ' #000 ',
                          fontStyle: 'normal',
                          borderRadius: '1px',
                          padding: ' 0 10px ',
                        }}
                        id="outlined"
                        name="street"
                        placeholder="Enter Account holder name"
                      />
                    </FormControl>
                  </div>
                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                    <FormControl className="w-100">
                      <Typography> Bank name</Typography>
                      <Input
                        required
                        style={{
                          border: ' 1px solid #d9d9d9 ',
                          height: ' 36px',
                          lineHeight: '36px ',
                          background: '#fff ',
                          fontSize: '13px',
                          color: ' #000 ',
                          fontStyle: 'normal',
                          borderRadius: '1px',
                          padding: ' 0 10px ',
                        }}
                        id="outlined"
                        name="apt"
                        placeholder="Enter Bank name"
                      />
                    </FormControl>
                  </div>
                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                  
                      <Typography>
                        Bank Branch Location<span style={{ color: 'red' }}>*</span>
                      </Typography>
                      <FormControl className="w-100">
                      <Select
                            style={{
                              padding: ' 0 10px',
                              color: '#7e7e7e',
                              fontStyle: 'italic',
                              height: '36px',
                            }}
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                          >
                            <MenuItem
                              value=""
                              onClick={() => setBankLocation('')}
                            >
                              <em>--Select--</em>
                            </MenuItem>
                            <MenuItem
                              value={1}
                              onClick={() => setBankLocation('UK')}
                            >
                              UK
                            </MenuItem>
                            <MenuItem
                              value={2}
                              onClick={() => setBankLocation('US')}
                            >
                              US
                            </MenuItem>
                            <MenuItem
                              value={3}
                              onClick={() => setBankLocation('xyz')}
                            >
                              Others
                            </MenuItem>
                          </Select>
                    </FormControl>
                  </div>
                
                   
                
                    <div className="col-lg-3 col-6 col-md-3 mt-2">
                      <FormControl className="w-100">
                        <Typography>
                         Account Number
                          <span style={{ color: 'red' }}>*</span>
                        </Typography>
                        <Input
                          required
                          style={{
                            border: ' 1px solid #d9d9d9 ',
                            height: ' 36px',
                            lineHeight: '36px ',
                            background: '#fff ',
                            fontSize: '13px',
                            color: ' #000 ',
                            fontStyle: 'normal',
                            borderRadius: '1px',
                            padding: ' 0 10px ',
                          }}
                          id="outlined"
                          name="state"
                          placeholder="Enter Account Number"
                        />
                      </FormControl>
                    </div>

                    {bankLocation === 'US' ? (
                       <div className="col-lg-3 col-6 col-md-3 mt-2">
                       <FormControl className="w-100">
                         <Typography>
                            ABA / Rounting
                           <span style={{ color: 'red' }}>*</span>
                         </Typography>
                         <Input
                           required
                           style={{
                             border: ' 1px solid #d9d9d9 ',
                             height: ' 36px',
                             lineHeight: '36px ',
                             background: '#fff ',
                             fontSize: '13px',
                             color: ' #000 ',
                             fontStyle: 'normal',
                             borderRadius: '1px',
                             padding: ' 0 10px ',
                           }}
                           id="outlined"
                           name="state"
                           placeholder="Enter ABA / Rounting"
                         />
                       </FormControl>
                     </div>

) : (
  ''
)}
                {bankLocation !== '' ? (
                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                    <FormControl className="w-100">
                      <Typography>
                       IBAN
                        <span style={{ color: 'red' }}>*</span>
                      </Typography>
                      <Input
                        required
                        style={{
                          border: ' 1px solid #d9d9d9 ',
                          height: ' 36px',
                          lineHeight: '36px ',
                          background: '#fff ',
                          fontSize: '13px',
                          color: ' #000 ',
                          fontStyle: 'normal',
                          borderRadius: '1px',
                          padding: ' 0 10px ',
                        }}
                        id="outlined"
                        name="state"
                        placeholder="Enter IBAN"
                      />
                    </FormControl>
                  </div>
                  ) : (
                    ''
                  )}
                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                    <FormControl className="w-100">
                      <Typography>
                       Swift code
                        <span style={{ color: 'red' }}>*</span>
                      </Typography>
                      <Input
                        required
                        style={{
                          border: ' 1px solid #d9d9d9 ',
                          height: ' 36px',
                          lineHeight: '36px ',
                          background: '#fff ',
                          fontSize: '13px',
                          color: ' #000 ',
                          fontStyle: 'normal',
                          borderRadius: '1px',
                          padding: ' 0 10px ',
                        }}
                        id="outlined"
                        name="state"
                        placeholder="Enter Swift code"
                      />
                    </FormControl>
                  </div>
                </div>
                        {/* <FormControl className="mx-1">
                          <Typography>
                            Account holder name
                            <span style={{ color: 'red' }}>*</span>
                          </Typography>
                          <Input
                            required
                            style={{
                              border: ' 1px solid #d9d9d9 ',
                              height: ' 36px',
                              lineHeight: '36px ',
                              background: '#fff ',
                              fontSize: '13px',
                              color: ' #000 ',
                              fontStyle: 'normal',
                              borderRadius: '1px',
                              padding: ' 0 10px ',
                            }}
                            name="account_holder_name"
                            id="outlined"
                            placeholder="Enter Account holder name"
                          />
                        </FormControl> */}

                        {/* <FormControl className="mx-1">
                          <Typography>
                            Bank name<span style={{ color: 'red' }}>*</span>
                          </Typography>
                          <Input
                            required
                            style={{
                              border: ' 1px solid #d9d9d9 ',
                              height: ' 36px',
                              lineHeight: '36px ',
                              background: '#fff ',
                              fontSize: '13px',
                              color: ' #000 ',
                              fontStyle: 'normal',
                              borderRadius: '1px',
                              padding: ' 0 10px ',
                            }}
                            name="bank_name"
                            id="outlined"
                            placeholder="Enter Bank name"
                          />
                        </FormControl> */}

                        {/* <FormControl className="mx-1">
                          <Typography>
                            Bank Branch Location:
                            <span style={{ color: 'red' }}>*</span>
                          </Typography>
                          <Select
                            style={{
                              padding: ' 0 10px',
                              color: '#7e7e7e',
                              fontStyle: 'italic',
                              height: '36px',
                            }}
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                          >
                            <MenuItem
                              value=""
                              onClick={() => setBankLocation('')}
                            >
                              <em>--Select--</em>
                            </MenuItem>
                            <MenuItem
                              value={1}
                              onClick={() => setBankLocation('UK')}
                            >
                              UK
                            </MenuItem>
                            <MenuItem
                              value={2}
                              onClick={() => setBankLocation('US')}
                            >
                              US
                            </MenuItem>
                            <MenuItem
                              value={3}
                              onClick={() => setBankLocation('xyz')}
                            >
                              Others
                            </MenuItem>
                          </Select>
                       
                        </FormControl> */}

                        {/* <FormControl className="mx-1">
                          <Typography>
                            Account number
                            <span style={{ color: 'red' }}>*</span>
                          </Typography>
                          <Input
                            required
                            style={{
                              border: ' 1px solid #d9d9d9 ',
                              height: ' 36px',
                              lineHeight: '36px ',
                              background: '#fff ',
                              fontSize: '13px',
                              color: ' #000 ',
                              fontStyle: 'normal',
                              borderRadius: '1px',
                              padding: ' 0 10px ',
                            }}
                            name="account_number"
                            id="outlined"
                            placeholder="Enter Account number"
                          />
                        </FormControl> */}
                        {/* {bankLocation === 'US' ? (
                          // <FormControl className="mx-1">
                          //   <Typography>
                          //     ABA / Rounting
                          //     <span style={{ color: 'red' }}>*</span>
                          //   </Typography>
                          //   <Input
                          //     required
                          //     style={{
                          //       border: ' 1px solid #d9d9d9 ',
                          //       height: ' 36px',
                          //       lineHeight: '36px ',
                          //       background: '#fff ',
                          //       fontSize: '13px',
                          //       color: ' #000 ',
                          //       fontStyle: 'normal',
                          //       borderRadius: '1px',
                          //       padding: ' 0 10px ',
                          //     }}
                          //     name="aba"
                          //     id="outlined"
                          //     placeholder="Enter ABA / Rounting"
                          //   />
                          // </FormControl>
                        ) : (
                          ''
                        )} */}

                        {/* {bankLocation !== '' ? (
                          <>
                            <FormControl>
                              <Typography>IBAN</Typography>
                              <Input
                                style={{
                                  border: ' 1px solid #d9d9d9 ',
                                  height: ' 36px',
                                  lineHeight: '36px ',
                                  background: '#fff ',
                                  fontSize: '13px',
                                  color: ' #000 ',
                                  fontStyle: 'normal',
                                  borderRadius: '1px',
                                  padding: ' 0 10px ',
                                }}
                                name="iban"
                                id="outlined"
                                placeholder="Enter IBAN"
                              />
                            </FormControl>
                            <FormControl className="mx-1">
                              <Typography>Swift code</Typography>
                              <Input
                                style={{
                                  border: ' 1px solid #d9d9d9 ',
                                  height: ' 36px',
                                  lineHeight: '36px ',
                                  background: '#fff ',
                                  fontSize: '13px',
                                  color: ' #000 ',
                                  fontStyle: 'normal',
                                  borderRadius: '1px',
                                  padding: ' 0 10px ',
                                }}
                                name="swift_code"
                                id="outlined"
                                placeholder="Enter Swift code"
                              />
                            </FormControl>
                          </>
                        ) : (
                          ''
                        )} */}
                      </>
                    ) : (
                      ''
                    )}
                  </Collapse>
                </>
              ) : (
                ''
              )}
              <div className="row d-flex mx-1 mt-3 mx-2">
                <div className="d-flex p-0">
                  <div className="w-auto px-2">
                    <Checkbox
                      className="pr-0"
                      checked={radioButton === true}
                      onChange={() => {
                        setRadioButton(!radioButton);
                      }}
                      value={true}
                      name="radio-buttons"
                    />
                  </div>
                  <div className="w-auto d-flex p-0">
                    <Typography className="my-auto">
                      I confirm the information above is correct
                    </Typography>
                  </div>
                </div>

                {radioButton === true ? (
                  <div className="text-center">
                    <Button
                      type="submit"
                      disabled
                      style={{
                        border: '1px solid #0095dd',
                        background: '#0095dd',
                        height: '45px',
                        lineHeight: 'normal',
                        textAlign: 'center',
                        fontSize: '16px',
                        textTransform: 'uppercase',
                        borderRadius: '0px',
                        color: '#fff',
                        padding: '0 35px',
                        letterSpacing: '1px',
                      }}
                      className="btn btn_submit  btn-primary-agent"
                    >
                      Continue
                    </Button>
                  </div>
                ) : (
                  <div className="text-center">
                    <Button
                      type="submit"
                      disabled
                      style={{
                        border: '1px solid #0095dd',
                        backgroundColor: '#D2D2D4',
                        borderColor: '#d2d2d2',
                        color: '#4a4a4a',
                        height: '45px',
                        lineHeight: 'normal',
                        textAlign: 'center',
                        fontSize: '16px',
                        textTransform: 'uppercase',
                        borderRadius: '0px',

                        padding: '0 35px',
                        letterSpacing: '1px',
                      }}
                      className="btn btn_submit  btn-primary-agent"
                    >
                      Continue
                    </Button>
                  </div>
                )}
              </div>
             
            </form>
            </Paper>
          </div>
        </div>
        <div className="container-fluid">
          <footer>
            <div className="row mx-1">
             
              <Typography className="mx-2" align="left" style={{marginBottom:'10px',color:'white',fontSize:"12px"}}>
                © Comply Exchange Ltd.2023 - Version: 2.2.0.29 - Render Time:8.6691538s
              </Typography>

            
              <div className="col-12 col-sm-8 col-md-6 col-lg-6 footer_nav">
                <ul className="nav inner_header_right"></ul>
              </div>
            </div>
          </footer>
        </div>
     
    </section>
  );
}
