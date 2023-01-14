import axios from 'axios';
import { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';





const Home = () => {
  const [lists, setLists] = useState([])
  useEffect(() => {
    const loadLists = async () => {
      await axios.get('http://localhost:3003/lists')
        .then((response) => {
          setLists(response.data)
        })
    }
    loadLists()
  }, [])

  
  return (

    <div className='conatainer'>
      <h4>Top 10 Songs</h4>
      <Table striped bordered hover variant="dark">

        <thead>
          <tr>
            <th>#</th>
            <th>Artwork</th>
            <th>Song</th>
            <th>Year of Release</th>
            <th>Artist</th>
            <th>Ratings</th>
          </tr>
        </thead>
        {lists.map((item, index) => (
          <tbody key={index}>
            <tr>
              <td>{index + 1}</td>
              <td ><img src={item.img_src} alt="nice" /></td>
              <td>{item.src}</td>
              <td>{item.year}</td>
              <td>{item.artist}</td>
              <td>
                <Stack spacing={1}>
                <Rating name="size-large" defaultValue={2} size="large" />
                </Stack>
              </td>
            </tr>
          </tbody>
        ))}


      </Table>
    </div>

    

  )
}

export default Home
