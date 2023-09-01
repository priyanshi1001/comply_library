import { Fragment } from 'react';
import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';

import Paper from '@mui/material/Paper';


import DialogContentText from '@mui/material/DialogContentText';
import React from 'react';

import {  Button, Typography,Input } from '@mui/material';

const Form = (props:any) => {
  const { open, setOpen } = props;
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Dialog open={open} keepMounted onClose={handleClose} >
        <DialogContent>
          <DialogContentText>
            <form>
              {
                <Typography
                  align="left"
                  style={{ fontSize: '20px', color: '#04506e',fontWeight:"550",marginBottom:"10px" }}
                >
                  Save & Exit - Account Registration
                </Typography>
              }
              

          <Paper elevation={3} style={{ padding: '17px',backgroundColor:'#d4d9d4',overflow:"auto",height:"165px" }}>
              <Typography
                align="left"
                className="mt-1"
                style={{fontSize: '15px', color: '#383a3b',fontWeight:"550" }}
              >
                Registration
              </Typography>
             

              <Typography
                align="left"
                
                style={{ fontSize: '12px', color: '#383a3b' }}
              >
            This should be the same as the one used in the form submission process.
              </Typography>
              <Typography
                align="left"
                className="mt-2"
                style={{ fontSize: '15px', color: '#383a3b',fontWeight:"550",marginTop:"20px" ,marginBottom:"20px" }}
              >
              Note : Token has been sent to the email address.
              </Typography>
              <Typography
                align="left"
                className="mt-3"
                style={{ fontSize: '15px', color: '#383a3b',fontWeight:"550",marginTop:"20px" }}
              >
                Token
              </Typography>
             

              <Typography
                align="left"
                
                style={{ fontSize: '12px', color: '#383a3b' }}
              >
            The Token (PIN) will have been sent to the email address used during the submission process, please enter here. If not received please look in your spam or junk mail file.
              </Typography>

              <Typography
                align="left"
                className="mt-3"
                style={{ fontSize: '15px', color: '#383a3b',fontWeight:"550",marginTop:"20px"  }}
              >
                Password
              </Typography>
             

              <Typography
                align="left"
                
                style={{ fontSize: '12px', color: '#383a3b' }}
              >
          Enter your password for the registration, needed to log back in and continue with the submission of this Form. If you forget your password there is a password reset facility.
              </Typography>
              <Typography
                align="left"
                className="mt-3"
                style={{fontSize: '15px', color: '#383a3b',fontWeight:"550",marginTop:"20px"  }}
              >
                Confirm Password
              </Typography>
             

              <Typography
                align="left"
                
                style={{ fontSize: '12px', color: '#383a3b' }}
              >
           Please re-enter your password for confirmation
              </Typography>
              <Typography
                align="left"
                
                style={{ fontSize: '12px', color: '#383a3b',marginTop:"5px" }}
              >
         A new Token (PIN) for validating you E-Signature will be sent to you when you restart the submession process from the URL provided.
              </Typography>


             
             
</Paper>


<div style={{margin:'20px',display:"flex",marginTop:"20px",justifyContent:"space-between"}}>
                       <div>
                       <Typography  style={{fontSize:"12px"}}>
                       Email<span style={{ color: 'red' }}>*</span>
                    
                       </Typography>
                       <Input
                        type='password'
                        
                        style={{
                          width: '100%',
                          border: ' 1px solid #d9d9d9 ',
                          height: ' 36px',
                          lineHeight: '36px ',
                          background: '#fff ',
                          fontSize: '13px',
                          color: ' #000 ',
                          fontStyle: 'normal',
                          borderRadius: '1px',
                          }}
                       />
                       </div>
                      
                       <div >
                       <Typography style={{fontSize:"12px"}}>
                       Token:<span style={{ color: 'red' }}>*</span>
                     
                       </Typography>
                        <Input
                        type='password'
                        
                        style={{
                          width: '60%',
                          border: ' 1px solid #d9d9d9 ',
                          height: ' 36px',
                          lineHeight: '36px ',
                          background: '#fff ',
                          fontSize: '13px',
                          color: ' #000 ',
                          fontStyle: 'normal',
                          borderRadius: '1px',
                          padding: ' 0 10px ',}}
                       />
                       <span style={{fontSize:"10px",color:"blue",marginLeft:"10px"}}>Recover Password</span>
                       </div>
                     
                      
                      </div>

                      <div style={{margin:'20px',display:"flex",marginTop:"20px",justifyContent:"space-between"}}>
                       <div>
                       <Typography  style={{fontSize:"12px"}}>
                      Password<span style={{ color: 'red' }}>*</span>
                    
                       </Typography>
                       <Input
                        type='password'
                        
                        style={{
                          width: '100%',
                          border: ' 1px solid #d9d9d9 ',
                          height: ' 36px',
                          lineHeight: '36px ',
                          background: '#fff ',
                          fontSize: '13px',
                          color: ' #000 ',
                          fontStyle: 'normal',
                          borderRadius: '1px',
                          }}
                       />
                       </div>
                      
                       <div style={{marginRight:"95px"}}>
                       <Typography style={{fontSize:"12px"}}>
                       Confirm Password<span style={{ color: 'red' }}>*</span>
                     
                       </Typography>
                        <Input
                        type='password'
                        
                        style={{
                          width: '100%',
                          border: ' 1px solid #d9d9d9 ',
                          height: ' 36px',
                          lineHeight: '36px ',
                          background: '#fff ',
                          fontSize: '13px',
                          color: ' #000 ',
                          fontStyle: 'normal',
                          borderRadius: '1px',
                          padding: ' 0 10px '
                          }}
                       />
                      
                       </div>
                     
                      
                      </div>
              <Typography align="center" style={{ marginTop: '30px' }}>
                <Button
                  
                  size="small"
                  type="submit"
                  onClick={handleClose}
                  variant="contained"
                >
                  SAVE
                </Button>
              </Typography>
            </form>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default Form;
