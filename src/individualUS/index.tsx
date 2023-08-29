import React, { useEffect, useState } from 'react';
import {
  Collapse,
  CardHeader,
  IconButton,
  FormControl,
  Typography,
  Select,
  MenuItem,
  Input,
  Radio,
  Button,
} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
// import { useDispatch} from "react-redux";
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';

// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
// import "./style.css"

import 'bootstrap/dist/css/bootstrap.css';
import { apiGetUrl, apiPostUrl } from '../api/apiUtils';
// import { CheckBox } from '@mui/icons-material';

export function IndividualUs() {
  //States
  const [open, setOpen] = useState('');

  // const [is_US, setUS] = useState(false);
  // const [is_USACH, setUSACH] = useState('');
  // const [selectedValue, setSelectedValue] = useState('b');
  // const [selectedValue1, setSelectedValue1] = useState('b');
  // const [radioButton, setRadioButton] = useState(false);
  const [incomeArr, setIncomeArr] = useState(['intrest']);
  // const [accInfoSection, setAccInfoSection] = useState(false);
  // const [accInfoType, setAccInfoType] = useState('');
  const [bankLocation, setBankLocation] = useState('');
  const [alternateNo, setAlternateNo] = useState(false);

  // const paymentSelection = val => {
  //   console.log(val);
  //   if (val === '') {
  //     setAccInfoSection(false);
  //   } else {
  //     setAccInfoSection(true);
  //     setAccInfoType(val);
  //   }
  // };
  const [countries, setCountries] = useState([]);
  const [countriesCode, setCountriesCode] = useState([]);
  const [incomeCodes, setIncomeCodes] = useState([]);
  const [usStates, setUsStates] = useState([]);
  const [payload, setPayload] = useState({
    agentId: 3,
    businessTypeId: 1,
    isUSEntity: true,
    uniqueIdentifier: '',
    firstName: '',
    lastName: '',
    countryOfCitizenshipId: 1,
    dob: '',
    nameOfDisregarded: '',
    entityName: '',
    usTinTypeId: 1,
    usTin: '',
    foreignTINCountryId: 1,
    foreignTIN: '',
    foreignTINNotAvailable: true,
    alternativeTINFormat: true,
    giin: '',
    permanentResidentialCountryId: 1,
    permanentResidentialStreetNumberandName: '',
    permanentResidentialAptSuite: '',
    permanentResidentialCityorTown: '',
    permanentResidentialStateorProvince: '',
    permanentResidentialZipPostalCode: '',
    isAddressRuralRoute: true,
    isAddressPostOfficeBox: true,
    isCareOfAddress: true,
    isalternativebusinessaddress: true,
    permanentResidentialCountryId1: 1,
    permanentResidentialStreetNumberandName1: '',
    permanentResidentialAptSuite1: '',
    permanentResidentialCityorTown1: '',
    permanentResidentialStateorProvince1: '',
    permanentResidentialZipPostalCode1: '',
    contactFirstName: '',
    contactLastName: '',
    contactEmail: '',
    primaryContactNumberId: 1,
    primaryContactNumber: '',
    alternativeNumberId: 1,
    alternativeNumber: '',
    alternativeNumberId1: 1,
    alternativeNumber1: '',
    incomeTypeId: 1,
    paymentTypeId: 1,
    accountHolderName: '',
    accountBankName: '',
    accountBankBranchLocationId: 1,
    accountNumber: '',
    abaRouting: '',
    iban: '',
    swiftCode: '',
    bankCode: '',
    makePayable: '',
    payResidentalCountryId: 1,
    payStreetNumberAndName: '',
    payAptSuite: '',
    payCityorTown: '',
    payStateOrProvince: '',
    payZipPostalCode: '',
    isCorrectPaymentPurposes: true,
    isConfirmed: true,
  });
    
  useEffect(() => {
    apiGetUrl('GetCountries', '', {})
      .then(res => {
        setCountries(res.data);
        console.log(res.data, 'res.data');
      })
      .catch(err => {
        console.log(err);
      });

    apiGetUrl('GetCountriesCode', '', {})
      .then(res => {
        setCountriesCode(res.data);
        console.log(res.data, 'res.data');
      })
      .catch(err => {
        console.log(err);
      });

    apiGetUrl('GetAllIncomeCodes', '', {})
      .then(res => {
        setIncomeCodes(res.data);
        console.log(res.data, 'res.data');
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (payload.permanentResidentialCountryId == 258) {
      apiGetUrl('GetStateByCountryId', '', {})
        .then(res => {
          setUsStates(res.data);
          console.log(res.data, 'res.data');
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [payload.permanentResidentialCountryId]);

  const handleOpen = val => {
    if (open === val) {
      setOpen('');
    } else setOpen(val);
  };

  // const handleRadio = event => {
  //   setSelectedValue(event.target.value);
  // };

  // const handleRadio1 = event => {
  //   setSelectedValue1(event.target.value);
  // };

  const addIncomeType = () => {
    setIncomeArr(incomeArr => [...incomeArr, '']);
  };

  const handleSub = (e: any) => {
    e.preventDefault();
    apiPostUrl('InsertAccountHolderDetail', '', payload)
      .then(res => {
        console.log(res.data, 'res.data');
      })
      .catch(err => {
        console.log(err);
      });
    console.log(payload, 'payload2');
  };

  const returnFieldName = () => {
    if (payload.paymentTypeId === 1) {
      return 'ABA / Routing';
    } else if (payload.paymentTypeId === 2) {
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
    <section
      className="inner_content"
      style={{ backgroundColor: '#0c3d69', marginBottom: '10px' }}
    >
      <div style={{ fontSize: '32px', fontWeight: '500', color: 'white' }}>
        Account Holder Details
      </div>

      <div className="container-fluid">
        <div className="row"></div>

        <div className="col-lg-12 mt-3" style={{ padding: '8px' }}>
          <Paper elevation={6} style={{ padding: '17px' }}>
            <form>
              {/* Basic Details Section */}
              <CardHeader
                style={{ textAlign: 'left', marginLeft: '13px' }}
                className="flex-row-reverse"
                title={
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'left',
                      marginLeft: '13px',
                    }}
                  >
                    Basic Details
                    <InfoIcon
                      style={{
                        color: '#ffc107',
                        fontSize: '15px',
                        marginLeft: '5px',
                        cursor: 'pointer',
                      }}
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
                    {/* <div className="col-12 mb-4">
                 
                    <label className="mr-2">
                      <Typography align="left">
                        Are you a U.S Individual?
                        <span style={{color:"#ffc107"}}>*</span>
                      </Typography >
                    </label>
                    <input
                      className="mx-2"
                      type="radio"
                      name="ctl00$ContentPlaceHolder1$usindividual"
                      value="chkusindividual"
                    //   onclick="fillcapacity(this);"
                    ></input>
                    <label>Yes</label>
                    <input
                    required
                      className="mx-2"
                      type="radio"
                      name="ctl00$ContentPlaceHolder1$usindividual"
                      value="chknonusindividual"
                    //   onclick="fillcapacity(this);"
                    ></input>
                    <label>No</label>
                  </div> */}
                    <div>
                      <Typography align="left" style={{ marginTop: '20px' }}>
                        Are you a U.S Individual?
                        <span style={{ color: 'red' }}>*</span>
                        <InfoIcon
                          style={{
                            color: '#ffc107',
                            fontSize: '15px',
                            marginBottom: '12px',
                          }}
                          onClick={clickInfo}
                        />
                      </Typography>

                      <div className="d-flex">
                        <Typography className="my-auto">Yes</Typography>
                        <Radio
                          required
                          checked={payload.isUSEntity }
                          onChange={() =>
                            setPayload({ ...payload, isUSEntity: true })
                          }
                          value="yes"
                          name="radio-buttons"
                          inputProps={{ 'aria-label': 'Yes' }}
                        />
                        <Typography className="my-auto">No</Typography>
                        <Radio
                          required
                          checked={!payload.isUSEntity }
                          onChange={() =>
                            setPayload({ ...payload, isUSEntity: false })
                          }
                          // value={!payload.isUSEntity}
                          value="no"
                          name="radio-buttons"
                          inputProps={{ 'aria-label': 'No' }}
                        />
                      </div>
                    </div>

                    <div className="col-lg-3 col-6 col-md-3">
                      <Typography className="d-flex w-100">
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
                        name="uniqueIdentifier"
                        id="outlined"
                        placeholder="Enter Instructor Identifier"
                        onChange={e =>
                          setPayload({
                            ...payload,
                            uniqueIdentifier: e.target.value,
                          })
                        }
                        value={payload.uniqueIdentifier}
                      />
                    </div>
                  </div>
                </FormControl>

                {!payload.isUSEntity ? (
                  <div className="row">
                    <div className="col-lg-3 col-6 col-md-3 mt-2">
                      <FormControl className="w-100">
                        <Typography align="left">
                          First Name<span style={{ color: 'red' }}>*</span>
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
                          name="firstName"
                          placeholder="Enter First Name"
                          onChange={e =>
                            setPayload({
                              ...payload,
                              firstName: e.target.value,
                            })
                          }
                          value={payload.firstName}
                        />
                      </FormControl>
                    </div>
                    <div className="col-lg-3 col-6 col-md-3 mt-2">
                      <FormControl className="w-100">
                        <Typography align="left">
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
                          name="lastName"
                          placeholder="Enter Last Name"
                          onChange={e =>
                            setPayload({ ...payload, lastName: e.target.value })
                          }
                          value={payload.lastName}
                        />
                      </FormControl>
                    </div>
                    <div className="col-lg-3 col-6 col-md-3 mt-2">
                      <FormControl className="w-100">
                        <Typography align="left">
                          Country Of Citizenship
                          <span style={{ color: 'red' }}>*</span>
                        </Typography>
                        <select
                          style={{
                            padding: ' 0 10px',
                            color: '#7e7e7e',
                            fontStyle: 'italic',
                            height: '36px',
                          }}
                          name="countryOfCitizenshipId"
                          id="countryId"
                          onChange={(e: any) =>
                            setPayload({
                              ...payload,
                              countryOfCitizenshipId: e.target.value,
                            })
                          }
                        >
                          <option value="">-Select-</option>
                          {countries.map(({ id, name }) => (
                            <option value={id}>{name}</option>
                          ))}
                          {/* ))} */}
                        </select>
                      </FormControl>
                    </div>
                    <div className="col-lg-3 col-6 col-md-3 mt-2">
                      <FormControl className="w-100">
                        <Typography align="left">
                          Date of Birth<span style={{ color: 'red' }}>*</span>
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
                          type="date"
                          id="outlined"
                          name="dob"
                          onChange={e =>
                            setPayload({ ...payload, dob: e.target.value })
                          }
                          value={payload.dob}
                        />
                      </FormControl>
                    </div>
                    <div className="col-lg-3 col-6 col-md-3 mt-2">
                      <FormControl className="w-100">
                        <Typography align="left">
                          Name of disregarded entity receiving the payments (if
                          applicable)
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
                          name="nameOfDisregarded"
                          placeholder="Enter Business Name"
                          onChange={e =>
                            setPayload({
                              ...payload,
                              nameOfDisregarded: e.target.value,
                            })
                          }
                          value={payload.nameOfDisregarded}
                        />
                      </FormControl>
                    </div>
                  </div>
                ) : (
                  <div className="row">
                    <div className="col-lg-3 col-6 col-md-3 mt-2">
                      <FormControl className="w-100">
                        <Typography align="left">
                          First Name<span style={{ color: 'red' }}>*</span>
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
                          placeholder="Enter First Name"
                        />
                      </FormControl>
                    </div>
                    <div className="col-lg-3 col-6 col-md-3 mt-2">
                      <FormControl className="w-100">
                        <Typography align="left">
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
                  </div>
                )}
              </Collapse>
              <hr className="w-100"></hr>
              {/* Tax Identifier Section */}
              <CardHeader
                style={{ textAlign: 'left', marginLeft: '13px' }}
                className="flex-row-reverse"
                title={
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'left',
                      marginLeft: '13px',
                    }}
                  >
                    Tax Identification Numbers
                    <InfoIcon
                      style={{
                        color: '#ffc107',
                        fontSize: '15px',
                        marginLeft: '5px',
                        cursor: 'pointer',
                      }}
                      onClick={clickInfo}
                    />
                  </div>
                }
                action={
                  <IconButton
                    onClick={() => handleOpen('tax')}
                    aria-label="expand"
                    size="small"
                    style={{ marginTop: '3px' }}
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
                <div className="col-12 d-flex">
                  <div className="col-lg-3 col-6 col-md-3 ">
                    <Typography align="left" className="d-flex w-100">
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
                        name="usTinTypeId"
                        id="Income"
                        defaultValue={1}
                        onChange={(e: any) =>
                          setPayload({
                            ...payload,
                            usTinTypeId: e.target.value,
                          })
                        }
                        value={payload.usTinTypeId}
                      >
                        <option value="">-Select-</option>
                        <option value="1">SSN/ITIN</option>
                        <option value="2">Applied for</option>
                        <option value="3">U.S. TIN not applicable</option>
                      </select>
                    </FormControl>
                  </div>

                  <div className="col-lg-3 col-6 col-md-3 mx-2">
                    <FormControl className="w-100">
                      <Typography align="left">
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
                        name="usTin"
                        placeholder="Enter U.S. TIN"
                        onChange={(e: any) =>
                          setPayload({ ...payload, usTin: e.target.value })
                        }
                        value={payload.usTin}
                      />
                    </FormControl>
                  </div>
                </div>
                {!payload.isUSEntity ? (
                  <div className="col-12 d-flex mt-3">
                    <div className="col-lg-3 col-6 col-md-3 ">
                      <Typography align="left" className="d-flex w-100">
                        Foreign TIN Country
                        <span style={{ color: 'red' }}>*</span>
                      </Typography>

                      <FormControl className="w-100">
                        <select
                          style={{
                            padding: ' 0 10px',
                            color: '#7e7e7e',
                            fontStyle: 'italic',
                            height: '36px',
                          }}
                          name="foreignTINCountryId"
                          id="Income"
                          defaultValue={1}
                          onChange={(e: any) =>
                            setPayload({
                              ...payload,
                              foreignTINCountryId: e.target.value,
                            })
                          }
                          value={payload.foreignTINCountryId}
                        >
                          <option value="">-Select-</option>
                          {countries.map(({ id, name }) => (
                            <option value={id}>{name}</option>
                          ))}
                        </select>
                      </FormControl>
                    </div>

                    <div className="col-lg-3 col-6 col-md-3 mx-2">
                      <FormControl className="w-100">
                        <Typography align="left">
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
                          name="foreignTIN"
                          placeholder="Enter foreign TIN"
                          onChange={(e: any) =>
                            setPayload({
                              ...payload,
                              foreignTIN: e.target.value,
                            })
                          }
                          value={payload.foreignTIN}
                        />
                      </FormControl>
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </Collapse>
              <hr className="w-100"></hr>

              {/* Permanent Residence Section */}
              <CardHeader
                style={{ textAlign: 'left', marginLeft: '13px' }}
                className="flex-row-reverse"
                title={
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'left',
                      marginLeft: '13px',
                    }}
                  >
                    Permanent Residence Address
                    <InfoIcon
                      style={{
                        color: '#ffc107',
                        fontSize: '15px',
                        marginLeft: '5px',
                        cursor: 'pointer',
                      }}
                      onClick={clickInfo}
                    />
                  </div>
                }
                action={
                  <IconButton
                    onClick={() => handleOpen('pra')}
                    aria-label="expand"
                    size="small"
                    style={{ marginTop: '3px' }}
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
                  <Typography align="left" className="d-flex w-100 ">
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
                      name="permanentResidentialCountryId"
                      id="Income"
                      defaultValue={1}
                      onChange={(e: any) =>
                        setPayload({
                          ...payload,
                          permanentResidentialCountryId: e.target.value,
                        })
                      }
                      value={payload.permanentResidentialCountryId}
                    >
                      <option value="">-Select-</option>

                      {countries.map(({ id, name }) => (
                        <option value={id}>{name}</option>
                      ))}
                      {/* ))} */}
                    </select>
                  </FormControl>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                    <FormControl className="w-100">
                      <Typography align="left">
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
                        name="permanentResidentialStreetNumberandName"
                        placeholder="Enter Street Number and Name"
                        onChange={(e: any) =>
                          setPayload({
                            ...payload,
                            permanentResidentialStreetNumberandName:
                              e.target.value,
                          })
                        }
                        value={payload.permanentResidentialStreetNumberandName}
                      />
                    </FormControl>
                  </div>
                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                    <FormControl className="w-100">
                      <Typography align="left">Apt/Suite:</Typography>
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
                        name="permanentResidentialAptSuite"
                        placeholder="Enter Apt/Suite"
                        onChange={(e: any) =>
                          setPayload({
                            ...payload,
                            permanentResidentialAptSuite: e.target.value,
                          })
                        }
                        value={payload.permanentResidentialAptSuite}
                      />
                    </FormControl>
                  </div>
                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                    <FormControl className="w-100">
                      <Typography align="left">
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
                        name="permanentResidentialCityorTown"
                        placeholder="Enter City or Town"
                        onChange={(e: any) =>
                          setPayload({
                            ...payload,
                            permanentResidentialCityorTown: e.target.value,
                          })
                        }
                        value={payload.permanentResidentialCityorTown}
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
                      <Typography align="left">
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
                        name="permanentResidentialStateorProvince"
                        placeholder="Enter State or Province"
                        onChange={(e: any) =>
                          setPayload({
                            ...payload,
                            permanentResidentialStateorProvince: e.target.value,
                          })
                        }
                        value={payload.permanentResidentialStateorProvince}
                      />
                    </FormControl>
                  </div>
                  {/* )} */}
                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                    <FormControl className="w-100">
                      <Typography align="left">
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
                        name="permanentResidentialZipPostalCode"
                        placeholder="Enter Zip or Postal Code"
                        onChange={(e: any) =>
                          setPayload({
                            ...payload,
                            permanentResidentialZipPostalCode: e.target.value,
                          })
                        }
                        value={payload.permanentResidentialZipPostalCode}
                      />
                    </FormControl>
                  </div>
                </div>

                <div>
                  <Typography align="left" style={{ marginTop: '20px' }}>
                    Is there an alternative mailing or business address in the
                    US?
                    <span style={{ color: 'red' }}>*</span>
                    <InfoIcon
                      style={{
                        color: '#ffc107',
                        fontSize: '15px',
                        marginBottom: '12px',
                      }}
                      onClick={clickInfo}
                    />
                  </Typography>

                  <div className="d-flex">
                    <Typography className="my-auto">Yes</Typography>
                    <Radio
                      required
                      checked={payload.isalternativebusinessaddress}
                      onChange={() =>
                        setPayload({
                          ...payload,
                          isalternativebusinessaddress: true,
                        })
                      }
                      value={payload.isalternativebusinessaddress}
                      name="radio-buttons"
                      inputProps={{ 'aria-label': 'A' }}
                    />
                    <Typography className="my-auto">No</Typography>
                    <Radio
                      required
                      checked={!payload.isalternativebusinessaddress}
                      onChange={() =>
                        setPayload({
                          ...payload,
                          isalternativebusinessaddress: false,
                        })
                      }
                      value={!payload.isalternativebusinessaddress}
                      name="radio-buttons"
                      inputProps={{ 'aria-label': 'B' }}
                    />
                  </div>
                </div>

                {/* IF Alternate mailing address */}

                {payload.isalternativebusinessaddress ? (
                  <>
                    <div className="col-lg-3 col-6 col-md-3">
                      <Typography align="left" className="d-flex w-100 ">
                        Residential Country:
                        <span style={{ color: 'red' }}>*</span>
                      </Typography>

                      <FormControl className="w-100">
                        <select
                          style={{
                            padding: ' 0 10px',
                            color: '#7e7e7e',
                            fontStyle: 'italic',
                            height: '36px',
                          }}
                          name="permanentResidentialCountryId1"
                          id="Income"
                          defaultValue={1}
                          onChange={(e: any) =>
                            setPayload({
                              ...payload,
                              permanentResidentialCountryId1: e.target.value,
                            })
                          }
                          value={payload.permanentResidentialCountryId1}
                        >
                          {/* <MenuItem value="0" onClick={() => setUS(false)}>
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
                          </MenuItem> */}
                          <option value="">-Select-</option>
                          <option value={257}>United Kingdom</option>
                          <option value={258}>United States</option>
                          <option value="">---</option>
                          {countries.map(({ id, name }) => (
                            <option value={id}> {name} </option>
                          ))}
                        </select>
                      </FormControl>
                    </div>
                    <div className="row">
                      <div className="col-lg-3 col-6 col-md-3 mt-2">
                        <FormControl className="w-100">
                          <Typography align="left">
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
                            name="permanentResidentialStreetNumberandName1"
                            placeholder="Enter Street Number and Name"
                            onChange={(e: any) =>
                              setPayload({
                                ...payload,
                                permanentResidentialStreetNumberandName1:
                                  e.target.value,
                              })
                            }
                            value={
                              payload.permanentResidentialStreetNumberandName1
                            }
                          />
                        </FormControl>
                      </div>
                      <div className="col-lg-3 col-6 col-md-3 mt-2">
                        <FormControl className="w-100">
                          <Typography align="left">Apt/Suite:</Typography>
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
                            name="permanentResidentialAptSuite1"
                            placeholder="Enter Apt/Suite"
                            onChange={(e: any) =>
                              setPayload({
                                ...payload,
                                permanentResidentialAptSuite1: e.target.value,
                              })
                            }
                            value={payload.permanentResidentialAptSuite1}
                          />
                        </FormControl>
                      </div>
                      <div className="col-lg-3 col-6 col-md-3 mt-2">
                        <FormControl className="w-100">
                          <Typography align="left">
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
                            name="permanentResidentialCityorTown1"
                            placeholder="Enter City or Town"
                            onChange={(e: any) =>
                              setPayload({
                                ...payload,
                                permanentResidentialCityorTown1: e.target.value,
                              })
                            }
                            value={payload.permanentResidentialCityorTown1}
                          />
                        </FormControl>
                      </div>
                      {payload.permanentResidentialCountryId === 258 ? (
                        <div className="col-lg-3 col-6 col-md-3 mt-2">
                          <Typography align="left" className="d-flex w-100 ">
                            State or Province:
                            <span style={{ color: 'red' }}>*</span>
                          </Typography>

                          <FormControl className="w-100">
                            <Select
                              style={{
                                padding: ' 0 10px',
                                color: '#7e7e7e',
                                fontStyle: 'italic',
                                height: '36px',
                              }}
                              name="permanentResidentialStateorProvince1"
                              id="Income"
                              onChange={(e: any) =>
                                setPayload({
                                  ...payload,
                                  permanentResidentialStateorProvince1:
                                    e.target.value,
                                })
                              }
                              value={
                                payload.permanentResidentialStateorProvince1
                              }
                            >
                              <MenuItem value="0">
                                <em>--Select--</em>
                              </MenuItem>
                              {usStates.map(({ name }) => (
                                <MenuItem value={name}>{name}</MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </div>
                      ) : (
                        <div className="col-lg-3 col-6 col-md-3 mt-2">
                          <FormControl className="w-100">
                            <Typography align="left">
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
                              name="permanentResidentialStateorProvince1"
                              placeholder="Enter State or Province"
                              onChange={(e: any) =>
                                setPayload({
                                  ...payload,
                                  permanentResidentialStateorProvince1:
                                    e.target.value,
                                })
                              }
                              value={
                                payload.permanentResidentialStateorProvince1
                              }
                            />
                          </FormControl>
                        </div>
                      )}
                      <div className="col-lg-3 col-6 col-md-3 mt-2">
                        <FormControl className="w-100">
                          <Typography align="left">
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
                            name="permanentResidentialZipPostalCode1"
                            placeholder="Enter Zip or Postal Code"
                            onChange={(e: any) =>
                              setPayload({
                                ...payload,
                                permanentResidentialZipPostalCode1:
                                  e.target.value,
                              })
                            }
                            value={payload.permanentResidentialZipPostalCode1}
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
                style={{ textAlign: 'left', marginLeft: '13px' }}
                className="flex-row-reverse"
                title={
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'left',
                      marginLeft: '13px',
                    }}
                  >
                    Contact Details
                    <InfoIcon
                      style={{
                        color: '#ffc107',
                        fontSize: '15px',
                        marginLeft: '5px',
                        cursor: 'pointer',
                      }}
                      onClick={clickInfo}
                    />
                  </div>
                }
                action={
                  <IconButton
                    onClick={() => handleOpen('cd')}
                    aria-label="expand"
                    size="small"
                    style={{ marginTop: '3px' }}
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
                      <Typography align="left">
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
                        name="contactFirstName"
                        placeholder="Enter First Name"
                        onChange={(e: any) =>
                          setPayload({
                            ...payload,
                            contactFirstName: e.target.value,
                          })
                        }
                        value={payload.contactFirstName}
                      />
                    </FormControl>
                  </div>
                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                    <FormControl className="w-100">
                      <Typography align="left">
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
                        name="contactLastName"
                        placeholder="Enter Last Name"
                        onChange={(e: any) =>
                          setPayload({
                            ...payload,
                            contactLastName: e.target.value,
                          })
                        }
                        value={payload.contactLastName}
                      />
                    </FormControl>
                  </div>
                  <FormControl className="w-100">
                    <div className="row">
                      <div className="col-lg-3 col-6 col-md-3 mt-2 mx-2">
                        <FormControl className="w-100">
                          <Typography align="left">
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
                            name="contactEmail"
                            id="outlined"
                            type="email"
                            placeholder="example@domain.com"
                            onChange={(e: any) =>
                              setPayload({
                                ...payload,
                                contactEmail: e.target.value,
                              })
                            }
                            value={payload.contactEmail}
                          />
                        </FormControl>
                      </div>
                    </div>
                  </FormControl>

                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                    <FormControl className="w-100">
                      <Typography align="left">
                        Primary Contact Number
                      </Typography>
                      <select
                        style={{
                          padding: ' 0 10px',
                          color: '#7e7e7e',
                          fontStyle: 'italic',
                          height: '36px',
                        }}
                        name="primaryContactNumberId"
                        id="Income"
                        onChange={(e: any) =>
                          setPayload({
                            ...payload,
                            primaryContactNumberId: e.target.value,
                          })
                        }
                        value={payload.primaryContactNumberId}
                      >
                        <option value="">-Select-</option>
                        {countriesCode.map(({ id, name }) => (
                          <option value={id}>{name}</option>
                        ))}
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
                        name="primaryContactNumber"
                        placeholder="Enter Primary Number"
                        onChange={(e: any) =>
                          setPayload({
                            ...payload,
                            primaryContactNumber: e.target.value,
                          })
                        }
                        value={payload.primaryContactNumber}
                      />
                    </FormControl>
                  </div>
                  <div className="col-lg-3 col-6 col-md-3 mt-2">
                    <FormControl className="w-100">
                      <Typography align="left">
                        Secondary Contact Number
                      </Typography>
                      <select
                        style={{
                          padding: ' 0 10px',
                          color: '#7e7e7e',
                          fontStyle: 'italic',
                          height: '36px',
                        }}
                        name="alternativeNumberId"
                        id="Income"
                        onChange={(e: any) =>
                          setPayload({
                            ...payload,
                            alternativeNumberId: e.target.value,
                          })
                        }
                        value={payload.alternativeNumberId}
                      >
                        <option value="">-Select-</option>
                        {countriesCode.map(({ id, name }) => (
                          <option value={id}>{name}</option>
                        ))}
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
                        name="alternativeNumber"
                        placeholder="Enter Alternate Mobile No"
                        onChange={(e: any) =>
                          setPayload({
                            ...payload,
                            alternativeNumber: e.target.value,
                          })
                        }
                        value={payload.alternativeNumber}
                      />
                    </FormControl>
                  </div>

                  <div>
                    {alternateNo ? (
                      <div className="col-lg-3 col-6 col-md-3 mt-3">
                        <FormControl className="w-100">
                          <Typography align="left">
                            Secondary Contact Number
                          </Typography>
                          <span className="w-100 d-flex">
                            <select
                              className="w-100"
                              style={{
                                padding: ' 0 10px',
                                color: '#7e7e7e',
                                fontStyle: 'italic',
                                height: '36px',
                              }}
                              name="alternativeNumberId1"
                              id="Income"
                              onChange={(e: any) =>
                                setPayload({
                                  ...payload,
                                  alternativeNumberId1: e.target.value,
                                })
                              }
                              value={payload.alternativeNumberId1}
                            >
                              <option value="">--Select--</option>
                              {countriesCode.map(({ id, name }) => (
                                <option value={id}>{name}</option>
                              ))}
                            </select>
                            <DeleteIcon
                              style={{
                                color: 'red',
                                fontSize: '20px',
                                marginTop: '5px',
                              }}
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
                            name="alternativeNumber1"
                            placeholder="Enter Alternate Mobile No"
                            onChange={(e: any) =>
                              setPayload({
                                ...payload,
                                alternativeNumber1: e.target.value,
                              })
                            }
                            value={payload.alternativeNumber1}
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
                style={{ textAlign: 'left', marginLeft: '13px' }}
                className="flex-row-reverse"
                title={
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'left',
                      marginLeft: '13px',
                    }}
                  >
                    Income Type
                    <span
                      style={{
                        fontSize: '13px',
                        color: 'grey',
                        marginLeft: '4px',
                        marginTop: '11px',
                      }}
                    >
                      (Optional)
                    </span>
                    <InfoIcon
                      style={{
                        color: '#ffc107',
                        fontSize: '15px',
                        marginLeft: '5px',
                        cursor: 'pointer',
                      }}
                      onClick={clickInfo}
                    />
                  </div>
                }
                action={
                  <IconButton
                    onClick={() => handleOpen('it')}
                    aria-label="expand"
                    size="small"
                    style={{ marginTop: '3px' }}
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
                              className="w-100"
                              style={{
                                padding: ' 0 10px',
                                color: '#7e7e7e',
                                fontStyle: 'italic',
                                height: '36px',
                              }}
                              name="incomeTypeId"
                              id="Income"
                              onChange={(e: any) =>
                                setPayload({
                                  ...payload,
                                  incomeTypeId: e.target.value,
                                })
                              }
                              value={payload.incomeTypeId}
                            >
                              <option value="1">-Select-</option>
                              {incomeCodes.map(({ id, name }) => (
                                <option value={id}>{name}</option>
                              ))}
                            </select>
                            <DeleteIcon
                              onClick={() => {
                                setAlternateNo(false);
                              }}
                              style={{
                                color: 'red',
                                fontSize: '20px',
                                marginTop: '8px',
                                marginLeft: '4px',
                              }}
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
                style={{ textAlign: 'left', marginLeft: '13px' }}
                className="flex-row-reverse"
                title={
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'left',
                      marginLeft: '13px',
                    }}
                  >
                    Payment Type
                    <span
                      style={{
                        fontSize: '13px',
                        color: 'grey',
                        marginLeft: '4px',
                        marginTop: '11px',
                      }}
                    >
                      (Optional)
                    </span>
                    <InfoIcon
                      style={{
                        color: '#ffc107',
                        fontSize: '15px',
                        marginLeft: '5px',
                        cursor: 'pointer',
                      }}
                      onClick={clickInfo}
                    />
                  </div>
                }
                action={
                  <IconButton
                    onClick={() => handleOpen('pt')}
                    aria-label="expand"
                    size="small"
                    style={{ marginTop: '3px' }}
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

                  <FormControl className="w-100 d-flex">
                    <span className="w-100 d-flex">
                      <select
                        className="w-100"
                        style={{
                          padding: ' 0 10px',
                          color: '#7e7e7e',
                          fontStyle: 'italic',
                          height: '36px',
                        }}
                        name="paymentTypeId"
                        id="Payment"
                        onChange={(e: any) =>
                          setPayload({
                            ...payload,
                            paymentTypeId: parseInt(e.target.value),
                          })
                        }
                        value={payload.paymentTypeId}
                      >
                        <option value="">Select</option>
                        <option value={1}>ACH</option>
                        <option value={2}>Check</option>
                        <option value={3}>Wire</option>
                      </select>
                      <DeleteIcon
                        style={{
                          color: 'red',
                          fontSize: '20px',
                          marginTop: '8px',
                          marginLeft: '4px',
                        }}
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

              {payload.paymentTypeId ? (
                <>
                  <CardHeader
                    style={{ textAlign: 'left', marginLeft: '13px' }}
                    className="flex-row-reverse"
                    title={
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'left',
                          marginLeft: '13px',
                        }}
                      >
                        Account Information
                        <span
                          style={{
                            fontSize: '13px',
                            color: 'grey',
                            marginLeft: '4px',
                            marginTop: '11px',
                          }}
                        >
                          (Mandatory)
                        </span>
                        <InfoIcon
                          style={{
                            color: '#ffc107',
                            fontSize: '15px',
                            marginLeft: '5px',
                            cursor: 'pointer',
                          }}
                          onClick={clickInfo}
                        />
                      </div>
                    }
                    action={
                      <IconButton
                        onClick={() => handleOpen('ai')}
                        aria-label="expand"
                        size="small"
                        style={{ marginTop: '3px' }}
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
                    {payload.paymentTypeId === 1 ? (
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
                              <Typography align="left">
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
                                name="accountHolderName"
                                placeholder="Enter  Account holder name"
                                onChange={(e: any) =>
                                  setPayload({
                                    ...payload,
                                    accountHolderName: e.target.value,
                                  })
                                }
                                value={payload.accountHolderName}
                              />
                            </FormControl>
                          </div>
                          <div className="col-lg-3 col-6 col-md-3 mt-2">
                            <FormControl className="w-100">
                              <Typography align="left"> Bank name</Typography>
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
                                name="accountBankName"
                                placeholder="Enter Bank name"
                                onChange={(e: any) =>
                                  setPayload({
                                    ...payload,
                                    accountBankName: e.target.value,
                                  })
                                }
                                value={payload.accountBankName}
                              />
                            </FormControl>
                          </div>
                          <div className="col-lg-3 col-6 col-md-3 mt-2">
                            <Typography align="left">
                              Branch Location
                              <span style={{ color: 'red' }}>*</span>
                            </Typography>
                            <FormControl className="w-100">
                              <select
                                style={{
                                  padding: ' 0 10px',
                                  color: '#7e7e7e',
                                  fontStyle: 'italic',
                                  height: '36px',
                                }}
                                // labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                name="accountBankBranchLocationId"
                                onChange={(e: any) =>
                                  setPayload({
                                    ...payload,
                                    accountBankBranchLocationId: e.target.value,
                                  })
                                }
                                value={payload.accountBankBranchLocationId}
                              >
                                {/* <MenuItem value="" onClick={() => setUSACH('')}>
                                  <em>--Select--</em>
                                </MenuItem>
                                <MenuItem
                                  value={1}
                                  onClick={() => setUSACH('UK')}
                                >
                                  UK
                                </MenuItem>
                                <MenuItem
                                  value={2}
                                  onClick={() => setUSACH('US')}
                                >
                                  US
                                </MenuItem>
                                <MenuItem
                                  value={3}
                                  onClick={() => setUSACH('')}
                                >
                                  Others
                                </MenuItem> */}
                                <option value="">-Select-</option>
                                <option value={257}>United Kingdom</option>
                                <option value={258}>United States</option>
                                <option value="">---</option>
                                {countries.map(({ id, name }) => (
                                  <option value={id}> {name} </option>
                                ))}
                              </select>
                            </FormControl>
                          </div>

                          <div className="col-lg-3 col-6 col-md-3 mt-2">
                            <FormControl className="w-100">
                              <Typography align="left">
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
                                name="accountNumber"
                                placeholder="Enter Account Number"
                                onChange={(e: any) =>
                                  setPayload({
                                    ...payload,
                                    accountNumber: e.target.value,
                                  })
                                }
                                value={payload.accountNumber}
                              />
                            </FormControl>
                          </div>

                          <div className="col-lg-3 col-6 col-md-3 mt-2">
                            <FormControl className="w-100">
                              <Typography align="left">
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
                                name="bankCode"
                                placeholder={returnFieldName()}
                                onChange={(e: any) =>
                                  setPayload({
                                    ...payload,
                                    bankCode: e.target.value,
                                  })
                                }
                                value={payload.bankCode}
                              />
                            </FormControl>
                          </div>
                        </div>
                      </>
                    ) : (
                      ''
                    )}
                    {/* Check */}
                    {payload.paymentTypeId === 2 ? (
                      <>
                        <div className="row">
                          <div className="col-lg-3 col-6 col-md-3 mt-2">
                            <FormControl className="w-100">
                              <Typography align="left">
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
                                name="makePayable"
                                placeholder="Enter Make Payable To"
                                onChange={(e: any) =>
                                  setPayload({
                                    ...payload,
                                    makePayable: e.target.value,
                                  })
                                }
                                value={payload.makePayable}
                              />
                            </FormControl>
                          </div>
                          <div className="col-lg-3 col-6 col-md-3 mt-2">
                            <FormControl className="w-100">
                              <Typography align="left">
                                {' '}
                                Residential Country
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
                                name="payResidentalCountryId"
                                placeholder="Enter Residential Country"
                                onChange={(e: any) =>
                                  setPayload({
                                    ...payload,
                                    payResidentalCountryId: e.target.value,
                                  })
                                }
                                value={payload.payResidentalCountryId}
                              />
                            </FormControl>
                          </div>
                          {/* <div className="col-lg-3 col-6 col-md-3 mt-2">
                            <Typography align="left">
                              Doing Business As Name
                              <span style={{ color: 'red' }}>*</span>
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
                          </div> */}

                          <div className="col-lg-3 col-6 col-md-3 mt-2">
                            <FormControl className="w-100">
                              <Typography align="left">
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
                                name="payStreetNumberAndName"
                                placeholder="Enter Street Number And Name"
                                onChange={(e: any) =>
                                  setPayload({
                                    ...payload,
                                    payStreetNumberAndName: e.target.value,
                                  })
                                }
                                value={payload.payStreetNumberAndName}
                              />
                            </FormControl>
                          </div>

                          <div className="col-lg-3 col-6 col-md-3 mt-2">
                            <FormControl className="w-100">
                              <Typography align="left">
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
                                name="payAptSuite"
                                placeholder="Enter Apt/Suite"
                                onChange={(e: any) =>
                                  setPayload({
                                    ...payload,
                                    payAptSuite: e.target.value,
                                  })
                                }
                                value={payload.payAptSuite}
                              />
                            </FormControl>
                          </div>
                          <div className="col-lg-3 col-6 col-md-3 mt-2">
                            <FormControl className="w-100">
                              <Typography align="left">
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
                                name="payCityorTown"
                                placeholder="Enter  City OR Town"
                                onChange={(e: any) =>
                                  setPayload({
                                    ...payload,
                                    payCityorTown: e.target.value,
                                  })
                                }
                                value={payload.payCityorTown}
                              />
                            </FormControl>
                          </div>
                          <div className="col-lg-3 col-6 col-md-3 mt-2">
                            <FormControl className="w-100">
                              <Typography align="left">
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
                                name="payStateOrProvince"
                                placeholder="Enter  State OR Provience"
                                onChange={(e: any) =>
                                  setPayload({
                                    ...payload,
                                    payStateOrProvince: e.target.value,
                                  })
                                }
                                value={payload.payStateOrProvince}
                              />
                            </FormControl>
                          </div>
                          <div className="col-lg-3 col-6 col-md-3 mt-2">
                            <FormControl className="w-100">
                              <Typography align="left">
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
                                name="payZipPostalCode"
                                placeholder="Enter Zip/Postal Code"
                                onChange={(e: any) =>
                                  setPayload({
                                    ...payload,
                                    payZipPostalCode: e.target.value,
                                  })
                                }
                                value={payload.payZipPostalCode}
                              />
                            </FormControl>
                          </div>
                        </div>

                        <div className="d-flex mt-3">
                          <Checkbox />
                          <Typography
                            align="left"
                            style={{ marginTop: '10px' }}
                          >
                            Please check the box to confirm that the above
                            details are correct for payment purposes.
                            <span style={{ color: 'red' }}>*</span>
                          </Typography>
                        </div>
                      </>
                    ) : (
                      ''
                    )}

                    {payload.paymentTypeId === 3 ? (
                      <>
                        <div className="row">
                          <div className="col-lg-3 col-6 col-md-3 mt-2">
                            <FormControl className="w-100">
                              <Typography align="left">
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
                                name="accountHolderName"
                                placeholder="Enter Account holder name"
                                onChange={(e: any) =>
                                  setPayload({
                                    ...payload,
                                    accountHolderName: e.target.value,
                                  })
                                }
                                value={payload.accountHolderName}
                              />
                            </FormControl>
                          </div>
                          <div className="col-lg-3 col-6 col-md-3 mt-2">
                            <FormControl className="w-100">
                              <Typography align="left"> Bank name</Typography>
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
                                name="accountBankName"
                                placeholder="Enter Bank name"
                                onChange={(e: any) =>
                                  setPayload({
                                    ...payload,
                                    accountBankName: e.target.value,
                                  })
                                }
                                value={payload.accountBankName}
                              />
                            </FormControl>
                          </div>
                          <div className="col-lg-3 col-6 col-md-3 mt-2">
                            <Typography align="left">
                              Bank Branch Location
                              <span style={{ color: 'red' }}>*</span>
                            </Typography>
                            <FormControl className="w-100">
                              <select
                                style={{
                                  padding: ' 0 10px',
                                  color: '#7e7e7e',
                                  fontStyle: 'italic',
                                  height: '36px',
                                }}
                                // labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                name="accountBankBranchLocationId"
                                onChange={(e: any) =>
                                  setPayload({
                                    ...payload,
                                    accountBankBranchLocationId: e.target.value,
                                  })
                                }
                                value={payload.accountBankBranchLocationId}
                              >
                                {/* <MenuItem
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
                                </MenuItem> */}
                                <option
                                  value=""
                                  onClick={() => setBankLocation('')}
                                >
                                  -Select-
                                </option>
                                <option
                                  value={257}
                                  onClick={() => setBankLocation('UK')}
                                >
                                  United Kingdom
                                </option>
                                <option
                                  value={258}
                                  onClick={() => setBankLocation('US')}
                                >
                                  United States
                                </option>
                                <option
                                  value=""
                                  onClick={() => setBankLocation('')}
                                >
                                  ---
                                </option>
                                {countries.map(({ id, name }) => (
                                  <option
                                    value={id}
                                    onClick={() => setBankLocation('')}
                                  >
                                    {' '}
                                    {name}{' '}
                                  </option>
                                ))}
                              </select>
                            </FormControl>
                          </div>

                          <div className="col-lg-3 col-6 col-md-3 mt-2">
                            <FormControl className="w-100">
                              <Typography align="left">
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
                                name="accountNumber"
                                placeholder="Enter Account Number"
                                onChange={(e: any) =>
                                  setPayload({
                                    ...payload,
                                    accountNumber: e.target.value,
                                  })
                                }
                                value={payload.accountNumber}
                              />
                            </FormControl>
                          </div>

                          {bankLocation === 'US' ? (
                            <div className="col-lg-3 col-6 col-md-3 mt-2">
                              <FormControl className="w-100">
                                <Typography align="left">
                                  ABA / Routing
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
                                onChange={(e: any) =>
                                  setPayload({
                                    ...payload,
                                    swiftCode: e.target.value,
                                  })
                                }
                                value={payload.swiftCode}
                                />
                              </FormControl>
                            </div>
                          ) : (
                            ''
                          )}
                          {bankLocation !== '' ? (
                            <div className="col-lg-3 col-6 col-md-3 mt-2">
                              <FormControl className="w-100">
                                <Typography align="left">
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
                                  name="iban"
                                  placeholder="Enter IBAN"
                                  onChange={(e: any) =>
                                    setPayload({
                                      ...payload,
                                      iban: e.target.value,
                                    })
                                  }
                                  value={payload.iban}
                                />
                              </FormControl>
                            </div>
                          ) : (
                            ''
                          )}
                          <div className="col-lg-3 col-6 col-md-3 mt-2">
                            <FormControl className="w-100">
                              <Typography align="left">
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
                                name="swiftCode"
                                placeholder="Enter Swift code"
                                onChange={(e: any) =>
                                  setPayload({
                                    ...payload,
                                    swiftCode: e.target.value,
                                  })
                                }
                                value={payload.swiftCode}
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
              <div className="row d-flex mx-1 mt-3 mx-3">
                <div className="d-flex p-0">
                  <div className="w-auto px-2">
                    <Checkbox
                      className="pr-0"
                      checked={payload.isConfirmed}
                      name="radio-buttons"
                      onChange={() =>
                        setPayload({
                          ...payload,
                          isConfirmed: !payload.isConfirmed,
                        })
                      }
                    />
                  </div>
                  <div className="w-auto d-flex p-0">
                    <Typography className="my-auto">
                      I confirm the information above is correct
                    </Typography>
                  </div>
                </div>

                {/* {payload.isConfirmed ? ( */}
                <div className="text-center">
                  <Button
                    type="submit"
                    disabled={!payload.isConfirmed}
                    onClick={handleSub}
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
                {/* ) : (
                  <div className="text-center">
                    <Button
                      type="submit"
                      disabled
                      onClick={handleSubmit}
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
                )} */}
              </div>
            </form>
          </Paper>
        </div>
      </div>
      <div className="container-fluid">
        <footer>
          <div className="row  ">
            <Typography
              className="mx-2"
              align="left"
              style={{ marginBottom: '10px', color: 'white', fontSize: '12px' }}
            >
              © Comply Exchange Ltd.2023 - Version: 2.2.0.29 - Render
              Time:8.6691538s
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
