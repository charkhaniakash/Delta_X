// import React from 'react'
// import { Form, Row, Col, Button, } from 'react-bootstrap'

// const Addartist = () => {
//   return (
//     <Form >
//       <div className='container' >
//         <Form.Group as={Row}  className="mb-3" controlId="formPlaintextPassword">
//           <Form.Label column sm="2">
//             Artist name
//           </Form.Label>
//           <Col sm="10">
//             <Form.Control/>
//           </Col>
//         </Form.Group>

//         <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
//           <Form.Label column sm="2">
//           Date of Birth
//           </Form.Label>
//           <Col sm="10">
//             <Form.Control/>
//           </Col>
//         </Form.Group>
//         <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
//         <Form.Label column sm="2">
//           Bio
//           </Form.Label>
//         <textarea class="form-control" id="exampleFormControlTextarea4" rows="3"></textarea>
//         </Form.Group>
//         <div className='mt-5'>
//           <Button variant="primary"  size="mg">
//             Submit
//           </Button>{' '}
//           <Button variant="secondary" size="mg">
//             cancel
//           </Button>
//         </div>

//       </div>
//     </Form>
//   )
// }

// export default Addartist



import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { Row } from "react-bootstrap";

const Addsongs = () => {
  const navigate = useNavigate()
  const [lists, setLists] = useState({
    title: "",
    year: "",
    artist: ""
  });

  const { title, year, artist } = lists;
  const onInputChange = e => {
    setLists({ ...lists, [e.target.name]: e.target.value });
  };

  const handleCancel = () => {
    setLists('')
    navigate("/addsongs");
  }

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:3003/lists', lists);
    navigate("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <h4 as={Row} className="mb-3">Artist Name
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="song name"
                name="title"
                value={title}
                onChange={e => onInputChange(e)}
              />
            </h4>
            <h4 as={Row} className="mb-3">Year of Release
              <input
                type="year"
                className="form-control form-control-lg"
                placeholder="2000"
                name="year"
                value={year}
                onChange={e => onInputChange(e)}
              />
            </h4>

          </div>
          <div className="form-group">
            <h4>Bio</h4>
            <textarea name="artist" value={artist} onChange={e => onInputChange(e)} class="form-control" id="exampleFormControlTextarea4" rows="3"></textarea>
          </div>

          <button style={{color: "black",width:"100px",marginBlock:"60px",marginLeft:"600px",textAlign: 'center' }} className="lign-items-end">Done</button>
          <button onClick={handleCancel} style={{color: "black",width:"100px" ,textAlign: 'center' }} className="lign-items-end">Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default Addsongs;
