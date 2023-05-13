import React, { useEffect, useState } from "react";
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore/lite";
import { db } from "../../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const ShowData = () => {
  const classes = useStyles();
  const navigate = useNavigate()
  const [hotels, setHotels] = useState([])
  async function getHotels(db){
    const hotelsCollection = collection(db, 'hotels');
    const hotelsSnapshot = await getDocs(hotelsCollection);
    const hotelsList = hotelsSnapshot.docs.map((doc)=>({...doc.data(), id: doc.id}))
    setHotels(hotelsList)
  }
  useEffect(()=>{
    getHotels(db);
  }, [])
  const del = async(id)=>{
    await deleteDoc(doc(db, 'hotels', id)) 
    navigate('/adminPage')
    window.location.reload();
  }
  return (
    <div>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="Admin Table">
        <TableHead className="bg-green-100">
          <TableRow>
            <TableCell>Name Hotel</TableCell>
            <TableCell>Location Hotel</TableCell>
            <TableCell>Price for one night</TableCell>
            <TableCell>City of the hotel</TableCell>
            <TableCell>Country of the hotel</TableCell>
            <TableCell>Number Phone</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
            <TableCell>View</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {hotels.map((hotel) => (
            <TableRow key={hotel.id}>
              <TableCell>{hotel.hotelName}</TableCell>
              <TableCell>{hotel.hotelLocation}</TableCell>
              <TableCell>{hotel.hotelPrice}</TableCell>
              <TableCell>{hotel.hotelCity}</TableCell>
              <TableCell>{hotel.hotelCountry}</TableCell>
              <TableCell>+38{hotel.hotelNumberPhone}</TableCell>
              <TableCell><Link to={`/edit/${hotel.id}`}>Edit</Link></TableCell>
              <TableCell><button onClick={()=>del(hotel.id)}>Delete</button></TableCell>
              <TableCell><Link to={`/view/${hotel.id}`}>More Details</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default ShowData
