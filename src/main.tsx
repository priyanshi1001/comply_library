import React, { useState } from 'react';
import axios from 'axios';

export function Test() {
  return <div>Abc</div>;
}

type ButtonProps = {
  style: React.CSSProperties;
  children: React.ReactNode;
  primaryColor: string;
  secondaryColor: string;
  borderColor: string;
  borderRadius: string;
  inputAlignment: string;
  inputTextColor: string;
  labelColor: string;
  labelText: string;
};

export function ComplyForm(props: ButtonProps) {
  let obj = {
    first_name: '',
    last_name: '',
    dob: '',
    pan: '',
    office_addr: '',
    residential_addr: '',
  };
  const [isIndividual, setIndividual] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const [data, setData] = useState(obj);

  const getData = () => {
    axios
      .get(`/api/v1/getApi`)
      .then(res => {
        console.log(res.data.data[0]);
        data.first_name = res.data.data[0].first_name;
        data.last_name = res.data.data[0].last_name;
        data.pan = res.data.data[0].pan;
        data.office_addr = res.data.data[0].office_addr;
        console.log(res.data.data[0]);
        setData({ ...data, first_name: res.data.data[0].first_name });
        setData({ ...data, last_name: res.data.data[0].last_name });
        setData({ ...data, pan: res.data.data[0].pan });
        setData({ ...data, office_addr: res.data.data[0].office_addr });
        alert('API Called Successfully');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(data);
    axios
      .post('/api/v1/postApi', data)
      .then(response => console.log(response))
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div>
      {!isClicked ? (
        <>
          <div className='heading'>Select Individual or Entity</div >
          <div className="row">
            <div
              className="col-6"
              onClick={() => {
                setIndividual(true);
                setClicked(true);
              }}
            >
              <button className="btn btn_primary border1">Individual</button>
            </div>
            <div
              className="col-6"
              onClick={() => {
                setIndividual(false);
                setClicked(true);
              }}
            >
              <button className="btn btn_primary border1">Entity</button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className="row"
            style={{
              justifyContent: `${props.inputAlignment}`,
            }}
          >
            {isIndividual ? (
              <h1 style={{ backgroundColor: `${props.primaryColor}` }}>
                Individual
              </h1>
            ) : (
              <h1 style={{ backgroundColor: `${props.primaryColor}` }}>
                Entity
              </h1>
            )}
          </div>
          <button
            onClick={getData}
            style={{ backgroundColor: `${props.secondaryColor}` }}
            className="btn btn_primary border1 mb-3rem"
          >
            Get Data
          </button>
          <div className="mainRow">
            <form onSubmit={e => handleSubmit(e)}>
              <div className="row">
                <label
                  style={{
                    color: `${props.labelColor}`,
                  }}
                  className="col-lg-3 col-6 col-md-3"
                >
                  First Name
                </label>
                <input
                  className="col-lg-3 col-6 col-md-3"
                  style={{
                    borderRadius: `${props.borderRadius}`,
                    border: `1px solid ${props.borderColor}`,
                    color: `${props.inputTextColor}`,
                  }}
                  name="first_name"
                  value={data.first_name}
                  placeholder="Enter First Name"
                  onChange={handleChange}
                />
              </div>
              <div className="row">
                <label
                  style={{
                    color: `${props.labelColor}`,
                  }}
                  className="col-lg-3 col-6 col-md-3"
                >
                  Last Name
                </label>
                <input
                  name="last_name"
                  style={{
                    borderRadius: `${props.borderRadius}`,
                    border: `1px solid ${props.borderColor}`,
                    color: `${props.inputTextColor}`,
                  }}
                  className="col-lg-3 col-6 col-md-3"
                  onChange={handleChange}
                  value={data.last_name}
                  placeholder="Enter Last Name"
                />
              </div>
              <div className="row">
                <label
                  style={{
                    color: `${props.labelColor}`,
                  }}
                  className="col-lg-3 col-6 col-md-3"
                >
                  D.O.B
                </label>
                <input
                  name="dob"
                  style={{
                    borderRadius: `${props.borderRadius}`,
                    border: `1px solid ${props.borderColor}`,
                    color: `${props.inputTextColor}`,
                  }}
                  type="date"
                  className="col-lg-3 col-6 col-md-3"
                  onChange={handleChange}
                  value={data.dob}
                  placeholder="Enter D.O.B"
                />
              </div>
              <div className="row">
                <label
                  style={{
                    color: `${props.labelColor}`,
                  }}
                  className="col-lg-3 col-6 col-md-3"
                >
                  PAN Number
                </label>
                <input
                  name="pan"
                  style={{
                    borderRadius: `${props.borderRadius}`,
                    border: `1px solid ${props.borderColor}`,
                    color: `${props.inputTextColor}`,
                  }}
                  className="col-lg-3 col-6 col-md-3"
                  onChange={handleChange}
                  value={data.pan}
                  placeholder="Enter PAN Number"
                />
              </div>
              <div className="row">
                <label
                  style={{
                    color: `${props.labelColor}`,
                  }}
                  className="col-lg-3 col-6 col-md-3"
                >
                  Office Address
                </label>
                <textarea
                  name="office_addr"
                  className="col-lg-3 col-6 col-md-3"
                  onChange={handleChange}
                  style={{
                    borderRadius: `${props.borderRadius}`,
                    border: `1px solid ${props.borderColor}`,
                    color: `${props.inputTextColor}`,
                  }}
                  value={data.office_addr}
                  placeholder="Enter Office Address"
                />
              </div>
              <div className="row">
                <label
                  style={{
                    color: `${props.labelColor}`,
                  }}
                  className="col-lg-3 col-6 col-md-3"
                >
                  residential Address
                </label>
                <textarea
                  name="residential_addr"
                  className="col-lg-3 col-6 col-md-3"
                  onChange={handleChange}
                  style={{
                    borderRadius: `${props.borderRadius}`,
                    border: `1px solid ${props.borderColor}`,
                    color: `${props.inputTextColor}`,
                  }}
                  value={data.residential_addr}
                  placeholder="Enter residential Address"
                />
              </div>
              <div>
                <button
                  style={{ backgroundColor: `${props.primaryColor}` }}
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
