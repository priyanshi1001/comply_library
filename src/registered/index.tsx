import React, { useState } from 'react';
import { Typography, Button } from '@mui/material';

import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import 'bootstrap/dist/css/bootstrap.css';
import DialogEdit from "../reusables/ElectronicSign"

export function Registered() {
  //States
  const [radioButton, setRadioButton] = useState("");
  const [showTextField, setShowTextField] = useState(false); 

  const handleRadioChange = (event) => {
    const value = event.target.value;
    setRadioButton(value);

    
    if (value === "15") {
      setShowTextField(true);
    } else {
      setShowTextField(false);
    }
  };


  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section
      className="inner_content"
      style={{ backgroundColor: '#0c3d69', marginBottom: '10px' }}
    >
      <div className="container-fluid">
        <div className="col-lg-12" style={{ padding: '18px' }}>
          <Paper elevation={6} style={{ padding: '17px' }}>
            <Typography
              style={{
                fontSize: '32px',
                marginTop: '10px',
                marginBottom: '15px',
              }}
              align="left"
            >
              Registered Address - Additional Information Requirement
            </Typography>
            <Divider style={{ background: 'black' ,marginTop:'35px',marginBottom:"15px"}} />

            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              onChange={handleRadioChange} 

            >
              <FormControlLabel
               
                value="1"
                control={<Radio />}
                label="I/We have appointed a different country of residency based adviser who manages our tax related correspondence."
              />
              <Divider style={{ background: 'black' ,marginTop:'12px',marginBottom:"12px"}} />

              <FormControlLabel
               
                value="2"
                control={<Radio />}
                label="I have arranged for another person to receive my mail for personal security or convenience purposes.ale"
              />
              <Divider style={{background: 'black' ,marginTop:'12px',marginBottom:"12px"}}/>
              <FormControlLabel
               
                value="3"
                control={<Radio />}
                label="I am a foreign government-related individual assigned to a diplomatic post, consulate, embassy or international organization in the different country of residency."
              />
              <Divider style={{ background: 'black' ,marginTop:'12px',marginBottom:"12px"}} />
              <FormControlLabel
               
                value="4"
                control={<Radio />}
                label="We have appointed a different country of residency based Power of Attorney who manages our tax related correspondence."
              />
              <Divider style={{background: 'black' ,marginTop:'12px',marginBottom:"12px"}} />
              <FormControlLabel
               
                value="5"
                control={<Radio />}
                label="I am the spouse or unmarried child (under age 21) of a foreign student, teacher, trainee, intern, exchange visitor, international organization employee, or foreign government-related individual, who lives at the same address."
              />
              <Divider style={{ background: 'black' ,marginTop:'12px',marginBottom:"12px"}} />
              <FormControlLabel
               
                value="6"
                control={<Radio />}
                label="I am a student at a different country of residency educational institution."
              />
              <Divider style={{ background: 'black' ,marginTop:'12px',marginBottom:"12px" }} />
              <FormControlLabel
               
                value="7"
                control={<Radio />}
                label="I am a teacher at a different country of residency educational institution, a trainee or intern, or a participant in an educational or cultural exchange visitor program."
              />
              <Divider style={{ background: 'black' ,marginTop:'12px',marginBottom:"12px"}}/>
              <FormControlLabel
               
                value="8"
                control={<Radio />}
                label="The telephone number provided is a different country of residency number that routes through to my country of residency."
              />
              <Divider style={{ background: 'black' ,marginTop:'12px',marginBottom:"12px"}} />
              <FormControlLabel
               
                value="9"
                control={<Radio />}
                label="I/We are temporarily living in the United States but will not be present for more than 181 days averaged over the current and preceding years according to the U.S. substantial Presence Test."
              />
              <Divider style={{ background: 'black' ,marginTop:'12px',marginBottom:"12px"}} />
              <FormControlLabel
               
                value="10"
                control={<Radio />}
                label="We have established a virtual office in the U.S. and have all our calls and post redirected to our non U.S. address."
              />
              <Divider style={{ background: 'black' ,marginTop:'12px',marginBottom:"12px"}} />
              <FormControlLabel
               
                value="11"
                control={<Radio />}
                label="You are not using this form to document a financial account as defined in Regulations section 1.1471-5(b) and you are either not making a treaty claim or you are making a treaty claim but have provided a valid U.S. TIN."
              />
              <Divider style={{ background: 'black' ,marginTop:'12px',marginBottom:"12px"}} />
              <FormControlLabel
               
                value="12"
                control={<Radio />}
                label="A resident in a jurisdiction that has been identified on the IRS’s List of Jurisdictions That Do Not Issue Foreign TINs."
              />
              <Divider style={{ background: 'black' ,marginTop:'12px',marginBottom:"12px"}} />
              <FormControlLabel
               
                value="13"
                control={<Radio />}
                label="A government, international organization, or foreign central bank of issue."
              />
              <Divider style={{ background: 'black' ,marginTop:'12px',marginBottom:"12px"}} />
              <FormControlLabel
               
                value="14"
                control={<Radio />}
                label="A resident of a U.S. territory."
              />
              <Divider style={{ background: 'black' ,marginTop:'12px',marginBottom:"12px"}} />


              <FormControlLabel
               
                value="15"
                control={<Radio />}
                label="None of the above (you must provide a written statement)."
              />
              
            </RadioGroup>

            {showTextField && (
                <Typography align='left' style={{marginBottom:"25px"}}>
                <TextField
                fullWidth
                
                multiline
                rows={4}
              
               />
                </Typography>
               
            )}



            {radioButton ? (
              <div className="text-center">
                <Button
                 onClick={() => {
                  setOpen(true);
                  
                 
                }}
                  type="submit"
                 
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
                  Confirm
                </Button>
              </div>
            ) : (
              <div className="text-center">
                <Button
                  type="submit"
                  
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
                  Confirm
                </Button>
              </div>
            )}
          </Paper>
        </div>
      </div>
      <div className="container-fluid">
        <footer>
          <div className="row mx-1">
            <Typography
              className="mx-2"
              align="left"
              style={{ marginTop: '10px', color: 'white', fontSize: '12px' }}
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

  <DialogEdit
  open={open} 
  setOpen={setOpen}
  handleClickOpen={handleClickOpen}
  handleClose={handleClose}
/>
    </section>
  );
}
