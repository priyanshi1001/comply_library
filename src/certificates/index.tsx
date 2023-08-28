import React from 'react';
import { useState }  from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import Form from "../reusables/Formguide"

export function Certificates() {

const clickInfo = () => {
    alert(
      'Instructor Identifier Format is ?*********************** \n 9- Numeric Value Only \n A - Alphabetical Character Only \n* = Alphanumeric Character only \n ? - Characters optional after this'
    );
  };

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [selectedCard, setSelectedCard] = useState("");

  const handleCardSelect = (cardId) => {
    setSelectedCard(cardId);
  };

  const cards = [
    { id: 'W-9', title: 'W-9', description: 'Used by individuals and entities to certify US Tax ID number' },
    { id: 'W-8BEN', title: 'W-8BEN', description: 'Used by individuals to certify beneficial owner, or account holder of financial institution, and claim treaty benefits' },
    { id: 'W-8BEN-E', title: 'W-8BEN-E', description: 'Used by entities to certify beneficial owner, or account holder of financial institution, and claim treaty benefits' },
    { id: 'W-8ECI', title: 'W-8ECI', description: 'Used by individuals, or entities, to certify beneficial owner receiving U.S. sourced income that is effectively connected with a U.S. trade or business ' },
    { id: 'W-8EXP', title: 'W-8EXP', description: 'Used by governments, or other tax exempt entities, to certify beneficial owner, or account holder of financial institution' },
    { id: 'W-8IMY', title: 'W-8IMY', description: 'Used by entities to certify intermediary, or flow through entity, receiving payments on behalf of another person' },
    { id: 'form 8233', title: 'form 8233', description: 'Used by individuals to certify beneficial owner claiming treaty exemption on compensation for personal services' },
 
  ];

  return (

    <section className="inner_content" style={{ backgroundColor: '#0c3d69',marginBottom:'10px' }}>
      <div style={{padding:"17px"}}>
            <div style={{justifyContent:'space-between',display:"flex"}}>
            <Typography align="left"
      style={{ fontSize: '32px', fontWeight: '500', color:'white' ,marginLeft:"10px"}}
    >
     Certificate Selection for U.S. Tax Purposes 
     <InfoIcon
        style={{ color: '#ffc107', fontSize: '15px', marginLeft: '5px', cursor: 'pointer' ,verticalAlign:"super"}}
         onClick={clickInfo}
                    />
    </Typography >
    <Typography align='right'>
        <Button  onClick={() => {
                  setOpen(true);
                  
                }} style={{backgroundColor:'#ffc107',color:'black',fontSize:"10px",fontWeight:'550'}}>Form Guide</Button>
    </Typography>
            </div>
        
    <div className='d-flex row'>
    {cards.map((card) => (
    <Card key={card.id}
    className="mx-3 mt-3"
    sx={{
      width: '330px',
      border: selectedCard === card.id ? '7px solid #ffc107' : '2px solid transparent',
    }}
    onClick={() => handleCardSelect(card.id)}>
      <CardContent>
       
        <Typography variant="h5" component="div">
        {card.title}
        </Typography>
       
        <Typography  style={{fontSize:"12px",marginTop:"14px"}}>
        {card.description}
          <br />
         
        </Typography>
        <Button className="mt-4"size="small">Read More</Button>
      </CardContent>
      
    </Card>
))}

    {/* <Card className="mx-3 mt-3"sx={{ width:"330px"}}>
      <CardContent>
       
        <Typography variant="h5" component="div">
          W-8BEN
        </Typography>
       
        <Typography style={{fontSize:"12px",marginTop:"14px"}}>
        Used by individuals to certify beneficial owner, or account holder of financial institution, and claim treaty benefits
          <br />
          {'"a benevolent smile"'}
        </Typography>
        <Button className="mt-4"size="small">Read More</Button>
      </CardContent>
     
    </Card>
    <Card className="mx-3 mt-3"sx={{ width:"330px"}}>
      <CardContent>
       
        <Typography variant="h5" component="div">
        W-8BEN-E
        </Typography>
       
        <Typography style={{fontSize:"12px",marginTop:"14px"}}>
        Used by entities to certify beneficial owner, or account holder of financial institution, and claim treaty benefits
          <br />
          {'"a benevolent smile"'}
        </Typography>
        <Button className="mt-4"size="small">Read More</Button>
      </CardContent>
     
    </Card>
    <Card className="mx-3 mt-3"sx={{ width:"330px"}}>
      <CardContent>
       
        <Typography variant="h5" component="div">
         W-8ECI
        </Typography>
       
        <Typography style={{fontSize:"12px",marginTop:"14px"}}>
        Used by individuals, or entities, to certify beneficial owner receiving U.S. sourced income that is effectively connected with a U.S. trade or business 
          <br />
          {'"a benevolent smile"'}
        </Typography>
        <Button className="mt-4"size="small">Read More</Button>
      </CardContent>
     
    </Card>
    <Card className="mx-3 mt-3"sx={{ width:"330px"}}>
      <CardContent>
       
        <Typography variant="h5" component="div">
          W-8EXP
        </Typography>
       
        <Typography style={{fontSize:"12px",marginTop:"14px"}}>
        Used by governments, or other tax exempt entities, to certify beneficial owner, or account holder of financial institution
          <br />
          {'"a benevolent smile"'}
        </Typography>
        <Button className="mt-4"size="small">Read More</Button>
      </CardContent>
      
    </Card>
    <Card className="mx-3 mt-3"sx={{ width:"330px"}}>
      <CardContent>
       
        <Typography variant="h5" component="div">
         W-8IMY
        </Typography>
       
        <Typography style={{fontSize:"12px",marginTop:"14px"}}>
        Used by entities to certify intermediary, or flow through entity, receiving payments on behalf of another person
          <br />
          {'"a benevolent smile"'}
        </Typography>
        <Button className="mt-4"size="small">Read More</Button>
      </CardContent>
     
    </Card>
    <Card className="mx-3 mt-3"sx={{ width:"330px"}}>
      <CardContent>
       
        <Typography variant="h5" component="div">
         form 8233
        </Typography>
       
        <Typography style={{fontSize:"12px",marginTop:"14px"}}> 
       Used by individuals to certify beneficial owner claiming treaty exemption on compensation for personal services
          <br />
          {'"a benevolent smile"'}
        </Typography>
        <Button className="mt-4"size="small">Read More</Button>
      </CardContent>
     
    </Card> */}

    {selectedCard ? (
                  <div className="text-center">
                  <Button
                  style={{ fontSize: '16px' }}
                  size="small"
                  type="submit"
                  variant="contained"
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
    </div>

  <Form
  open={open} 
  setOpen={setOpen}
  handleClickOpen={handleClickOpen}
  handleClose={handleClose}
/>
   
    </section>

  );

}