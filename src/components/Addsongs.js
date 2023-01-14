import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";

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
    navigate("/");
  }

  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:3003/lists', lists);
    navigate("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h3 className='col-12 col-sm-6' style={{ color: "Blue", textAlign: 'left' }}>Add a Songs</h3>
        <Nav.Link style={{ color: "black", textAlign: 'right' }} href="/addartist">Add artist</Nav.Link>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="song name"
              name="title"
              value={title}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="year"
              className="form-control form-control-lg"
              placeholder="Year of release"
              name="year"
              value={year}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <h5>Artwork:</h5>
            <input type="file" onChange={handleChange} />
            <img src={file} alt="nice" />
          </div>

          <div className="form-group">
            <input
              type="artist"
              className="form-control form-control-lg"
              placeholder="search for an artist"
              name="artist"
              value={artist}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="container" style={{gap:"10px"}}>
            <button style={{ color: "black", width: "100px", marginTop: "10px", textAlign: 'center' }} >Add User</button>
            <button onClick={handleCancel} style={{ color: "black", width: "100px", textAlign: 'center' }} >Cancel</button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Addsongs;
