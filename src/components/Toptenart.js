import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'



const Toptenart = () => {


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
        <React.Fragment>
            <h2>Top 10 Artists</h2>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Song</th>
                        <th>Year of Release</th>
                        <th>Artist</th>
                    </tr>
                </thead>
                {lists.map((item, index) => {
                    return (
                        <tbody key={item.id}>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item.title}</td>
                                <td>{item.year}</td>
                                <td>{item.artist}</td>
                            </tr>
                        </tbody>
                    )



                })}


            </Table>
        </React.Fragment>

    )
}

export default Toptenart