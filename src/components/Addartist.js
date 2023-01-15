import React, { useState} from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { Row } from "react-bootstrap";
import Popup from "./Popup";

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

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }


  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:3003/lists', lists);
    navigate("/addsongs");
  }
  return (
    <div>
      <input
      className="btn btn-primary"
        type="button"
        value="Artist page"
        onClick={togglePopup}
        style={{width:"500px", margin:"50px"}}
      />
      {isOpen && <Popup
        content={<>
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

              <button style={{ color: "black", width: "100px", textAlign: 'center', }} className="lign-items-start" href="/addartist" >Done</button>
              <button onClick={handleCancel} style={{ color: "black", width: "100px", textAlign: 'center' }} className="lign-items-end">Cancel</button>
            </form>
          </div>
        </>}
        handleClose={togglePopup}
      />}
    </div>
  );
};

export default Addsongs;


















