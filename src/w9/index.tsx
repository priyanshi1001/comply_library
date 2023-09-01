import React, { useState, ChangeEvent } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import InfoIcon from '@mui/icons-material/Info';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {
  FormControl,
  Typography,
  Button,
  Input,
  Paper,
  Checkbox,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Formw9 from '../reusables/W9';
import Backup from '../reusables/Backup';

export function W9() {
  const [data, setData] = useState({
    id: 0,
    agentId: 0,
    formTypeSelectionId: 0,
    federalTaxClassificationId: 0,
    firstName: '',
    lastName: '',
    businessName: '',
    isExemptionfromBackup: false,
    interestDividendPaymentId: 0,
    brokerTransactionsId: 0,
    barterExchangeTransactionId: 0,
    paymentOver600RequiredId: 0,
    paymentThirdPartyNetworkId: 0,
    isExemptionFATCAReportings: false,
    fatcaReportingId: 0,
    tiN_USTINId: 0,
    tiN_USTIN: '',
    birthCertificate: '',
    certificateOfIncorporation: '',
    drivingLicense: '',
    passport: '',
    powerOfAttorneyStatement: '',
    proofOfResidency: '',
    additionalDocumentId1: 0,
    additionalDocument1: '',
    additionalDocumentId2: 0,
    additionalDocument2: '',
    additionalDocumentId3: 0,
    additionalDocument3: '',
    additionalDocumentId4: 0,
    additionalDocument4: '',
    additionalDocumentId5: 0,
    additionalDocument5: '',
    additionalDocumentId6: 0,
    additionalDocument6: '',
    additionalDocumentId7: 0,
    additionalDocument7: '',
    additionalDocumentId8: 0,
    additionalDocument8: '',
    additionalDocumentId9: 0,
    additionalDocument9: '',
    additionalDocumentId10: 0,
    additionalDocument10: '',
    certification_CorrectTaxpayerIdentification: false,
    certification_IRS: false,
    certification_USCitizenPerson: false,
    certification_FATCACode: false,
    certification_IRSBackupWithHolding: false,
    certification_ElectronicForm: false,
    signedBy: '',
    confirmationCode: '',
    date: '',
    isConfirm: false,
    countryOfIncorporationOrganizationId: 0,
    usFederalTaxClassificationId: 0,
  });

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [report, setReport] = useState<string>('');
  const handleReportChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReport((event.target as HTMLInputElement).value);
  };

  const [selectedTaxClassification, setSelectedTaxClassification] = useState<
    string
  >('');
  const [selectedContinue, setselectedContinue] = useState({
    step1: true,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
    step6: false,
    step7: false,
    step8: false,
  });

  const handleTaxClassificationChange = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedTaxClassification(event.target.value);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const [open1, setOpen1] = useState(false);
  const handleClickOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  return (
    <div
      className="col-12"
      style={{
        backgroundColor: '#0c3d69',
        marginBottom: '10px',
        padding: '20px',
      }}
    >
      <div style={{ display: 'flex' }}>
        <div className="col-4">
          <Paper>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Step 1</Typography>
              </AccordionSummary>
              <AccordionDetails style={{ backgroundColor: '#e3e4e6' }}>
                <Typography align="left" style={{ fontSize: '12px' }}>
                  Name and Address
                </Typography>
              </AccordionDetails>
              <AccordionDetails style={{ backgroundColor: '#e3e4e6' }}>
                <Typography align="left" style={{ fontSize: '12px' }}>
                  Account Information(Optional)
                </Typography>
              </AccordionDetails>
              <AccordionDetails style={{ backgroundColor: '#e3e4e6' }}>
                <Typography align="left" style={{ fontSize: '12px' }}>
                  Tax Identification Number
                </Typography>
              </AccordionDetails>
              <AccordionDetails style={{ backgroundColor: '#e3e4e6' }}>
                <Typography align="left" style={{ fontSize: '12px' }}>
                  Contact Details
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Step 2</Typography>
              </AccordionSummary>
              <AccordionDetails style={{ backgroundColor: '#e3e4e6' }}>
                <Typography align="left" style={{ fontSize: '12px' }}>
                  Federal Tax
                </Typography>
              </AccordionDetails>
              <AccordionDetails style={{ backgroundColor: '#e3e4e6' }}>
                <Typography align="left" style={{ fontSize: '12px' }}>
                  Exemption from Backup Withholding
                </Typography>
              </AccordionDetails>
              <AccordionDetails style={{ backgroundColor: '#e3e4e6' }}>
                <Typography align="left" style={{ fontSize: '12px' }}>
                  Exemption from FATCA reporting
                </Typography>
              </AccordionDetails>
              <AccordionDetails style={{ backgroundColor: '#e3e4e6' }}>
                <Typography align="left" style={{ fontSize: '12px' }}>
                  Tax Identification Number
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Step 3</Typography>
              </AccordionSummary>
              <AccordionDetails style={{ backgroundColor: '#e3e4e6' }}>
                <Typography align="left" style={{ fontSize: '12px' }}>
                  Supporting Documentation
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Step 4</Typography>
              </AccordionSummary>
              <AccordionDetails style={{ backgroundColor: '#e3e4e6' }}>
                <Typography align="left" style={{ fontSize: '12px' }}>
                  Penalties of Perjury Certification
                </Typography>
              </AccordionDetails>
              <AccordionDetails style={{ backgroundColor: '#e3e4e6' }}>
                <Typography align="left" style={{ fontSize: '12px' }}>
                  Exemption from Backup Withholding
                </Typography>
              </AccordionDetails>
              <AccordionDetails style={{ backgroundColor: '#e3e4e6' }}>
                <Typography align="left" style={{ fontSize: '12px' }}>
                  Electronic Signature
                </Typography>
              </AccordionDetails>
              <AccordionDetails style={{ backgroundColor: '#e3e4e6' }}>
                <Typography align="left" style={{ fontSize: '12px' }}>
                  U.S. Tax Certification Complete
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </div>
        {/* step1 */}
        {selectedContinue.step1 ? (
          <>
            <Paper style={{ marginLeft: '5px', width: '80%' }}>
              <div>
                <Typography align="left" style={{ margin: '10px' }}>
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Typography
                      align="left"
                      style={{
                        color: 'black',
                        fontSize: '20px',
                        fontWeight: '550',
                      }}
                    >
                      Select your status for U.S. tax purposes
                    </Typography>
                    <Typography align="right">
                      <Button
                        style={{
                          color: 'black',
                          backgroundColor: '#ffc107',
                          fontWeight: '550',
                          justifyContent: 'flex-end',
                        }}
                      >
                        Federal Tax Classification Guide
                      </Button>
                    </Typography>
                  </div>
                  <div
                    className="col-lg-3 col-6 col-md-3 mt-3"
                    style={{ marginTop: '20px' }}
                  >
                    <Typography
                      align="left"
                      className="d-flex w-100 "
                      style={{ fontSize: '13px' }}
                    >
                      Federal Tax Classification
                      <span style={{ color: 'red' }}>*</span>
                      <InfoIcon
                        style={{ color: '#ffc107', fontSize: '13px' }}
                      />
                    </Typography>

                    <FormControl className="w-100">
                      <select
                        style={{
                          padding: ' 0 10px',
                          color: '#7e7e7e',
                          fontStyle: 'italic',
                          height: '30px',
                          width: '200%',
                        }}
                        name="permanentResidentialCountryId1"
                        id="Income"
                        defaultValue={1}
                        value={selectedTaxClassification}
                        onChange={handleTaxClassificationChange}
                      >
                        <option value="">-Select-</option>
                        <option value={257}>Individual</option>
                        <option value={258}>Individual/sole Propritor</option>
                        <option value={258}>Limited Liability Company</option>
                      </select>
                    </FormControl>
                  </div>
                  {selectedTaxClassification === '257' ? (
                    <div style={{ marginTop: '20px', display: 'flex' }}>
                      <div>
                        <Typography
                          align="left"
                          className="d-flex w-100 "
                          style={{ fontSize: '13px' }}
                        >
                          First Name<span style={{ color: 'red' }}>*</span>
                          <InfoIcon
                            style={{ color: '#ffc107', fontSize: '13px' }}
                          />
                        </Typography>

                        <FormControl className="w-100">
                          <Input
                            name="firstName"
                            value={data.firstName}
                            onChange={handleChange}
                            required
                            style={{
                              width: '150%',
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
                          />
                        </FormControl>
                      </div>
                      <div style={{ marginLeft: '120px' }}>
                        <Typography
                          align="left"
                          className="d-flex w-100 "
                          style={{ fontSize: '13px' }}
                        >
                          Last Name
                        </Typography>

                        <FormControl className="w-100">
                          <Input
                            name="lastName"
                            value={data.lastName}
                            onChange={handleChange}
                            required
                            style={{
                              width: '150%',
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
                          />
                        </FormControl>
                      </div>
                    </div>
                  ) : null}

                  {selectedTaxClassification === '258' ? (
                    <>
                      <div style={{ marginTop: '20px', display: 'flex' }}>
                        <div>
                          <Typography
                            align="left"
                            className="d-flex w-100 "
                            style={{ fontSize: '13px' }}
                          >
                            First Name<span style={{ color: 'red' }}>*</span>
                            <InfoIcon
                              style={{ color: '#ffc107', fontSize: '13px' }}
                            />
                          </Typography>

                          <FormControl className="w-100">
                            <Input
                              required
                              style={{
                                width: '150%',
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
                            />
                          </FormControl>
                        </div>
                        <div style={{ marginLeft: '120px' }}>
                          <Typography
                            align="left"
                            className="d-flex w-100 "
                            style={{ fontSize: '13px' }}
                          >
                            Last Name
                          </Typography>

                          <FormControl className="w-100">
                            <Input
                              required
                              style={{
                                width: '150%',
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
                            />
                          </FormControl>
                        </div>
                      </div>

                      <div>
                        <Typography
                          align="left"
                          className="d-flex w-100 "
                          style={{ fontSize: '13px', marginTop: '15px' }}
                        >
                          Business Name or disregarded entity name if different
                        </Typography>

                        <FormControl className="w-100">
                          <Input
                            name="businessName"
                            value={data.businessName}
                            onChange={handleChange}
                            required
                            style={{
                              width: '200%',
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
                          />
                        </FormControl>
                      </div>
                    </>
                  ) : null}
                </Typography>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '80px',
                }}
              >
                <Button variant="contained" style={{ color: 'white' }}>
                  SAVE & EXIT
                </Button>
                <Button
                  onClick={() => {
                    setselectedContinue({
                      step1: false,
                      step2: true,
                      step3: false,
                      step4: false,
                      step5: false,
                      step6: false,
                      step7: false,
                      step8: false,
                    });
                    // setOpen(true);
                  }}
                  variant="contained"
                  style={{ color: 'white', marginLeft: '15px' }}
                >
                  Continue
                </Button>
              </div>
              <Typography
                align="center"
                style={{
                  color: '#adadac',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '20px',
                }}
              >
                Do you want to go back?
              </Typography>
              <Typography align="center">
                <Button
                  variant="contained"
                  style={{
                    color: 'white',
                    backgroundColor: 'black',
                    marginTop: '10px',
                    marginBottom: '20px',
                  }}
                >
                  Back
                </Button>
              </Typography>
            </Paper>
          </>
        ) : (
          ''
        )}

        {selectedContinue.step2 ? (
          <Paper style={{ marginLeft: '5px', width: '80%' }}>
            <div style={{ margin: '10px' }}>
              <Typography
                align="left"
                style={{ color: 'black', fontSize: '20px', fontWeight: '550' }}
              >
                Exemption from Backup Withholding for U.S. Business &
                Organizations <span style={{ color: 'red' }}>*</span>
                <InfoIcon style={{ color: '#ffc107', fontSize: '13px' }} />{' '}
              </Typography>
              <Typography
                align="left"
                style={{ fontSize: '13px', marginTop: '10px' }}
              >
                Generally, individuals (including sole proprietors) are not
                exempt from backup withholding.
              </Typography>
              <Typography
                align="left"
                style={{
                  fontSize: '13px',
                  fontWeight: '550',
                  marginTop: '10px',
                }}
              >
                Is the business or organization you are making this submission
                for exempt from backup withholding?{' '}
                <span style={{ color: 'red' }}>*</span>
                <InfoIcon style={{ color: '#ffc107', fontSize: '13px' }} />
              </Typography>
              <div style={{ marginTop: '20px', justifyContent: 'center' }}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="isExemptionfromBackup"
                  value={data.isExemptionfromBackup}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="No"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Don't know"
                  />
                </RadioGroup>
              </div>
              <Paper style={{ backgroundColor: '#adadac' }}>
                <Typography
                  style={{
                    margin: '10px',
                    justifyContent: 'center',
                    fontSize: '13px',
                  }}
                >
                  If you are an individual completing the submission, please
                  select either 'Yes' or 'No'. If you are submitting this form
                  as an entity, and are not sure which to select, please refer
                  to the help available or select "Don't Know", where you will
                  be guided through a series of questions to help you determine
                  based on your expected income type.
                </Typography>
              </Paper>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '80px',
              }}
            >
              <Button variant="contained" style={{ color: 'white' }}>
                SAVE & EXIT
              </Button>
              <Button
                onClick={() => {
                  setselectedContinue({
                    step1: false,
                    step2: false,
                    step3: true,
                    step4: false,
                    step5: false,
                    step6: false,
                    step7: false,
                    step8: false,
                  });
                  // setOpen(true);
                }}
                variant="contained"
                style={{ color: 'white', marginLeft: '15px' }}
              >
                Continue
              </Button>
            </div>
            <Typography
              align="center"
              style={{
                color: '#adadac',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20px',
              }}
            >
              Do you want to go back?
            </Typography>
            <Typography align="center">
              <Button
                variant="contained"
                style={{
                  color: 'white',
                  backgroundColor: 'black',
                  marginTop: '10px',
                  marginBottom: '20px',
                }}
              >
                Back
              </Button>
            </Typography>
          </Paper>
        ) : (
          ''
        )}

        {/* step3 */}
        {selectedContinue.step3 ? (
          <Paper style={{ marginLeft: '5px', width: '80%' }}>
            <div style={{ margin: '10px' }}>
              <Typography
                align="left"
                style={{ margin: '10px', fontSize: '20px' }}
              >
                Exemption from FATCA reporting
                <span style={{ color: 'red' }}>*</span>
                <InfoIcon style={{ color: '#ffc107', fontSize: '13px' }} />{' '}
              </Typography>
              <Typography
                align="left"
                style={{ fontSize: '12px', marginTop: '10px' }}
              >
                Will payments be made into an account held outside of the United
                States by a foreign institution?
              </Typography>

              <div style={{ marginTop: '20px', justifyContent: 'center' }}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={report}
                  onChange={handleReportChange}
                >
                  <FormControlLabel
                    value={257}
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value={258}
                    control={<Radio />}
                    label="No"
                  />
                </RadioGroup>
              </div>
              {report === '257' ? (
                <>
                  <Typography
                    align="left"
                    style={{ fontSize: '12px', marginTop: '10px' }}
                  >
                    Please select from the list provided to apply for exemption
                    from FATCA Reporting or select confirm if no exemption
                    applies<span style={{ color: 'red' }}>*</span>
                    <InfoIcon style={{ color: '#ffc107', fontSize: '13px' }} />
                  </Typography>
                  <FormControl className="w-100">
                    <select
                      style={{
                        padding: ' 0 10px',
                        color: '#7e7e7e',
                        fontStyle: 'italic',
                        height: '30px',
                        width: '35%',
                      }}
                      name="permanentResidentialCountryId1"
                      id="Income"
                      defaultValue={1}
                    >
                      <option value="">-Select-</option>
                      <option>Individual</option>
                      <option>Individual/sole Propritor</option>
                      <option>Limited Liability Company</option>
                    </select>
                  </FormControl>
                </>
              ) : null}
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '80px',
              }}
            >
              <Button variant="contained" style={{ color: 'white' }}>
                SAVE & EXIT
              </Button>
              <Button
                onClick={() => {
                  setselectedContinue({
                    step1: false,
                    step2: false,
                    step3: false,
                    step4: true,
                    step5: false,
                    step6: false,
                    step7: false,
                    step8: false,
                  });
                }}
                variant="contained"
                style={{ color: 'white', marginLeft: '15px' }}
              >
                Continue
              </Button>
            </div>
            <Typography
              align="center"
              style={{
                color: '#adadac',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20px',
              }}
            >
              Do you want to go back?
            </Typography>
            <Typography align="center">
              <Button
                variant="contained"
                style={{
                  color: 'white',
                  backgroundColor: 'black',
                  marginTop: '10px',
                  marginBottom: '20px',
                }}
              >
                Back
              </Button>
            </Typography>
          </Paper>
        ) : (
          ''
        )}

        {selectedContinue.step4 ? (
          <Paper style={{ marginLeft: '5px', width: '80%' }}>
            <Typography
              align="left"
              style={{ margin: '10px', fontSize: '20px' }}
            >
              Taxpayer Identification Number{' '}
              <span style={{ color: 'red' }}>*</span>
              <InfoIcon style={{ color: '#ffc107', fontSize: '13px' }} />{' '}
            </Typography>

            <div style={{ margin: '10px', display: 'flex', marginTop: '20px' }}>
              <div>
                <Typography align="left">
                  U.S. TIN Type<span style={{ color: 'red' }}>*</span>
                  <InfoIcon style={{ color: '#ffc107', fontSize: '13px' }} />
                </Typography>
                <select
                  style={{
                    padding: ' 0 10px',
                    color: '#7e7e7e',
                    fontStyle: 'italic',
                    height: '36px',
                    width: '145%',
                  }}
                  name="permanentResidentialCountryId1"
                  id="Income"
                  defaultValue={1}
                ></select>
              </div>

              <div style={{ marginLeft: '100px' }}>
                <Typography align="left">U.S. TIN</Typography>
                <Input
                  required
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
                    padding: ' 0 10px ',
                  }}
                />
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '80px',
              }}
            >
              <Button variant="contained" style={{ color: 'white' }}>
                SAVE & EXIT
              </Button>
              <Button
                onClick={() => {
                  setselectedContinue({
                    step1: false,
                    step2: false,
                    step3: false,
                    step4: false,
                    step5: true,
                    step6: false,
                    step7: false,
                    step8: false,
                  });
                  // setOpen(true);
                }}
                variant="contained"
                style={{ color: 'white', marginLeft: '15px' }}
              >
                Continue
              </Button>
            </div>
            <Typography
              align="center"
              style={{
                color: '#adadac',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20px',
              }}
            >
              Do you want to go back?
            </Typography>
            <Typography align="center">
              <Button
                variant="contained"
                style={{
                  color: 'white',
                  backgroundColor: 'black',
                  marginTop: '10px',
                  marginBottom: '20px',
                }}
              >
                Back
              </Button>
            </Typography>
          </Paper>
        ) : (
          ''
        )}

        {selectedContinue.step5 ? (
          <Paper style={{ marginLeft: '5px', width: '80%' }}>
            <Typography
              align="left"
              style={{ margin: '10px', fontSize: '20px', fontWeight: '550' }}
            >
              Attach Supporting Documentation{' '}
              <span style={{ color: 'red' }}>*</span>
              <InfoIcon
                style={{
                  color: '#ffc107',
                  fontSize: '13px',
                  verticalAlign: 'super',
                }}
              />{' '}
            </Typography>
            <div style={{ margin: '20px' }}>
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  marginTop: '20px',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <Typography align="left">Birth Certificate (Copy)</Typography>
                  <Typography
                    align="left"
                    style={{ fontSize: '13px', color: 'grey' }}
                  >
                    A government issued document that registers the birth of the
                    holder
                  </Typography>
                </div>

                <div style={{ justifyContent: 'flex-end' }}>
                  <Input type="file" />
                </div>
              </div>
              <Divider />
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  marginTop: '20px',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <Typography align="left">
                    Certificate of Incorporation
                  </Typography>
                  <Typography
                    align="left"
                    style={{ fontSize: '13px', color: 'grey' }}
                  >
                    Certificate of Incorporation
                  </Typography>
                </div>

                <div style={{ justifyContent: 'flex-end' }}>
                  <Input type="file" />
                </div>
              </div>
              <Divider />
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  marginTop: '20px',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <Typography align="left">Driving License</Typography>
                  <Typography
                    align="left"
                    style={{ fontSize: '13px', color: 'grey' }}
                  >
                    Driving License
                  </Typography>
                </div>

                <div style={{ justifyContent: 'flex-end' }}>
                  <Input type="file" />
                </div>
              </div>
              <Divider />
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  marginTop: '20px',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <Typography align="left">Passport</Typography>
                  <Typography
                    align="left"
                    style={{ fontSize: '13px', color: 'grey' }}
                  >
                    Passport
                  </Typography>
                </div>

                <div style={{ justifyContent: 'flex-end' }}>
                  <Input type="file" />
                </div>
              </div>
              <Divider />
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  marginTop: '20px',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <Typography align="left">
                    Power of Attorney statement
                  </Typography>
                  <Typography
                    align="left"
                    style={{ fontSize: '13px', color: 'grey' }}
                  >
                    Power of Attorney statement
                  </Typography>
                </div>

                <div style={{ justifyContent: 'flex-end' }}>
                  <Input type="file" />
                </div>
              </div>
              <Divider />
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  marginTop: '20px',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <Typography align="left">Proof of Residency</Typography>
                  <Typography
                    align="left"
                    style={{ fontSize: '13px', color: 'grey' }}
                  >
                    Proof of Residency
                  </Typography>
                </div>

                <div style={{ justifyContent: 'flex-end' }}>
                  <Input type="file" />
                </div>
              </div>
              <Divider />
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '80px',
              }}
            >
              <Button variant="contained" style={{ color: 'white' }}>
                SAVE & EXIT
              </Button>
              <Button
                onClick={() => {
                  setselectedContinue({
                    step1: false,
                    step2: false,
                    step3: false,
                    step4: false,
                    step5: false,
                    step6: false,
                    step7: true,
                    step8: false,
                  });
                  // setOpen(true);
                }}
                variant="contained"
                style={{ color: 'white', marginLeft: '15px' }}
              >
                Continue
              </Button>
            </div>
            <Typography
              align="center"
              style={{
                color: '#adadac',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20px',
              }}
            >
              Do you want to go back?
            </Typography>
            <Typography align="center">
              <Button
                variant="contained"
                style={{
                  color: 'white',
                  backgroundColor: 'black',
                  marginTop: '10px',
                  marginBottom: '20px',
                }}
              >
                Back
              </Button>
            </Typography>
          </Paper>
        ) : (
          ''
        )}

        {selectedContinue.step6 ? (
          <Paper style={{ marginLeft: '5px', width: '80%' }}>
            <Typography
              align="left"
              style={{
                margin: '10px',
                fontSize: '20px',
                fontWeight: '550',
                marginLeft: '20px',
              }}
            >
              Certification <span style={{ color: 'red' }}>*</span>
              <InfoIcon
                style={{
                  color: '#ffc107',
                  fontSize: '13px',
                  verticalAlign: 'super',
                }}
              />{' '}
            </Typography>
            <Typography
              style={{
                margin: '10px',
                fontSize: '12px',
                color: 'grey',
                marginLeft: '20px',
              }}
            >
              Under penalties of perjury, I certify that:
            </Typography>

            <Paper
              style={{
                marginLeft: '20px',
                width: '80%',
                backgroundColor: '#d2d6d3',
              }}
            >
              <div style={{ margin: '10px' }}>
                <Typography style={{ display: 'flex' }}>
                  <Checkbox />
                  <Typography
                    style={{
                      fontSize: '13px',
                      color: 'black',
                      marginTop: '11px',
                    }}
                  >
                    The Number Show on the form is my correct taxpayer
                    identification number
                  </Typography>
                </Typography>
                <Typography style={{ display: 'flex' }}>
                  <Checkbox />
                  <Typography
                    style={{
                      fontSize: '13px',
                      color: 'black',
                      marginTop: '11px',
                    }}
                  >
                    The Number Show on the form is my correct taxpayer
                    identification number
                  </Typography>
                </Typography>
                <Typography style={{ display: 'flex' }}>
                  <Checkbox />
                  <Typography
                    style={{
                      fontSize: '13px',
                      color: 'black',
                      marginTop: '11px',
                    }}
                  >
                    The Number Show on the form is my correct taxpayer
                    identification number
                  </Typography>
                </Typography>
                <Typography style={{ display: 'flex' }}>
                  <Checkbox />
                  <Typography
                    style={{
                      fontSize: '13px',
                      color: 'black',
                      marginTop: '11px',
                    }}
                  >
                    The Number Show on the form is my correct taxpayer
                    identification number
                  </Typography>
                </Typography>
                <Typography style={{ display: 'flex' }}>
                  <Checkbox />
                  <Typography
                    style={{
                      fontSize: '13px',
                      color: 'black',
                      marginTop: '11px',
                    }}
                  >
                    The Number Show on the form is my correct taxpayer
                    identification number
                  </Typography>
                </Typography>
                <Typography
                  style={{
                    fontSize: '11px',
                    color: 'black',
                    marginTop: '10px',
                    marginBottom: '20px',
                  }}
                >
                  Please check the box below if you have been notified by the
                  IRS that you are currently subject to backup withholding
                  because you have failed to report all interest and dividends
                  on your tax return. For real estate transactions, item 2 does
                  not apply.For mortgage interest paid, acquisition or
                  abandonment of secured property, cancellation of debt,
                  contributions to an individual retirement arrangement (IRA),
                  and generally, payments other than interest and dividends, you
                  are not required to sign the Certification, but you must
                  provide your correct TIN. (Please note e-submission through
                  this service requires an e-signature)
                </Typography>
                <Typography style={{ display: 'flex' }}>
                  <Checkbox />
                  <Typography
                    style={{
                      fontSize: '13px',
                      color: 'black',
                      marginTop: '11px',
                    }}
                  >
                    The Number Show on the form is my correct taxpayer
                    identification number
                  </Typography>
                </Typography>
                <Typography style={{ display: 'flex' }}>
                  <Checkbox />
                  <Typography
                    style={{
                      fontSize: '13px',
                      color: 'black',
                      marginTop: '11px',
                    }}
                  >
                    The Number Show on the form is my correct taxpayer
                    identification number
                    <span
                      style={{
                        color: 'blue',
                        fontSize: '13px',
                        marginLeft: '5px',
                      }}
                    >
                      (view Electronic Form)
                    </span>
                  </Typography>
                </Typography>
              </div>
            </Paper>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '40px',
              }}
            >
              <Button variant="contained" style={{ color: 'white' }}>
                SAVE & EXIT
              </Button>
              <Button
                onClick={() => {
                  setselectedContinue({
                    step1: false,
                    step2: false,
                    step3: false,
                    step4: false,
                    step5: false,
                    step6: false,
                    step7: false,
                    step8: true,
                  });
                }}
                variant="contained"
                style={{ color: 'white', marginLeft: '15px' }}
              >
                Continue
              </Button>
            </div>
            <Typography
              align="center"
              style={{
                color: '#adadac',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20px',
              }}
            >
              Do you want to go back?
            </Typography>
            <Typography align="center">
              <Button
                variant="contained"
                style={{
                  color: 'white',
                  backgroundColor: 'black',
                  marginTop: '10px',
                  marginBottom: '20px',
                }}
              >
                Back
              </Button>
            </Typography>
          </Paper>
        ) : (
          ''
        )}

        {selectedContinue.step7 ? (
          <Paper style={{ marginLeft: '5px', width: '80%' }}>
            <Typography
              align="left"
              style={{ margin: '10px', fontSize: '20px', fontWeight: '550' }}
            >
              Part II Certification<span style={{ color: 'red' }}>*</span>
            </Typography>
            <Typography
              style={{ margin: '10px', fontSize: '20px', fontWeight: '550' }}
            >
              W-9 Electronic Substitute Form Statement
            </Typography>
            <Typography
              style={{ margin: '10px', fontSize: '12px', color: 'grey' }}
            >
              The Internal Revenue Service does not require your consent to any
              provisions of this document other than the certifications required
              to avoid backup withholding.
            </Typography>
            <div
              style={{
                margin: '20px',
                display: 'flex',
                marginTop: '20px',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <Typography style={{ fontSize: '15px' }}>
                  Signed by<span style={{ color: 'red' }}>*</span>
                  <InfoIcon
                    style={{
                      color: '#ffc107',
                      fontSize: '13px',
                      verticalAlign: 'super',
                    }}
                  />
                </Typography>
                <select
                  style={{
                    padding: ' 0 10px',
                    color: '#7e7e7e',
                    fontStyle: 'italic',
                    height: '36px',
                    width: '295%',
                  }}
                  name="permanentResidentialCountryId1"
                  id="Income"
                  defaultValue={1}
                ></select>
              </div>

              <div style={{ marginRight: '150px' }}>
                <Typography style={{ fontSize: '15px' }}>
                  Enter Confirmation Code:
                  <span style={{ color: 'red' }}>*</span>
                  <InfoIcon
                    style={{
                      color: '#ffc107',
                      fontSize: '13px',
                      verticalAlign: 'super',
                    }}
                  />
                </Typography>
                <Input
                  type="password"
                  required
                  style={{
                    width: '120%',
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
                />
                <span style={{ fontSize: '12px', color: 'blue' }}>
                  Recover Password
                </span>
              </div>
            </div>
            <Typography align="left" style={{ margin: '10px' }}>
              <Typography style={{ fontSize: '15px' }}>
                Date<span style={{ color: 'red' }}>*</span>
                <InfoIcon
                  style={{
                    color: '#ffc107',
                    fontSize: '13px',
                    verticalAlign: 'super',
                  }}
                />
              </Typography>
              <Input
                type="date"
                required
                style={{
                  width: '28%',
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
              />
            </Typography>

            <Typography style={{ display: 'flex', marginLeft: '10px' }}>
              <Checkbox />
              <Typography
                style={{ fontSize: '13px', color: 'black', marginTop: '7px' }}
              >
                Please "check" box to confirm your acceptance with the above
                declarations{' '}
                <InfoIcon
                  style={{
                    color: '#ffc107',
                    fontSize: '13px',
                    verticalAlign: 'super',
                  }}
                />
              </Typography>
            </Typography>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '40px',
              }}
            >
              <Button variant="contained" style={{ color: 'white' }}>
                SAVE & EXIT
              </Button>
              <Button
                onClick={() => {
                  setselectedContinue({
                    step1: false,
                    step2: false,
                    step3: false,
                    step4: false,
                    step5: false,
                    step6: false,
                    step7: false,
                    step8: false,
                  });
                }}
                variant="contained"
                style={{ color: 'white', marginLeft: '15px' }}
              >
                Submit Electronically
              </Button>
            </div>
            <Typography
              align="center"
              style={{
                color: '#adadac',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20px',
              }}
            >
              Do you want to go back?
            </Typography>
            <Typography align="center">
              <Button
                variant="contained"
                style={{
                  color: 'white',
                  backgroundColor: 'black',
                  marginTop: '10px',
                  marginBottom: '20px',
                }}
              >
                Back
              </Button>
            </Typography>
          </Paper>
        ) : (
          ''
        )}
      </div>

      <Formw9
        open={open}
        setOpen={setOpen}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />

      <Backup
        open={open1}
        setOpen={setOpen1}
        handleClickOpen={handleClickOpen1}
        handleClose={handleClose1}
      />
    </div>
  );
}
