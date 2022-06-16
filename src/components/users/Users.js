import React, { useEffect, useState } from 'react';
import classes from './users.module.css';

import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@material-ui/core';
import Loading from '../Loading/Loading';

const Users = () => {
   const [pageNumber, setPageNumber] = useState(1);
   const [loading, setLoading] = useState(false);
   const [Error, setError] = useState(false);
   const [users, setUsers] = useState([]);

   const getUsers = async () => {
      setLoading(true)
      try {
         const res = await fetch(`https://randomuser.me/api/?seed=dexi-interview&results=5&page=${pageNumber}`);
         const data = await res.json();
         setUsers([...users, ...data.results]);
         setLoading(false);
      } catch (error) {
         setLoading(false);
         setError('Something Went Wrong !');
      }
   };

   useEffect(() => {
      getUsers();
   }, [pageNumber]);

   console.log(users);
   return (
      <>
         {!loading ?
            <div className={classes.users}>
               <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                     <TableHead>
                        <TableRow style={{ borderTop: '1px solid #ddd' }}>
                           <TableCell>Name</TableCell>
                           <TableCell>Title</TableCell>
                           <TableCell>email</TableCell>
                           <TableCell>Birthday</TableCell>
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        {users.length > 0 && users.map((user, i) => (
                           <TableRow key={i}>
                              <TableCell >
                                 <div className={classes.containerImg}>
                                    <img src={user.picture.medium} alt="" />
                                    {user.name.first} {user.name.last}
                                 </div>
                              </TableCell>
                              <TableCell >{user.name.title}</TableCell>
                              <TableCell >{user.email}</TableCell>
                              <TableCell >{user.dob.date}</TableCell>
                           </TableRow>
                        ))}
                     </TableBody>
                  </Table>
               </TableContainer >
               <button className={classes.btn} onClick={() => setPageNumber(prevState => prevState + 1)}>Load More</button>
            </div>
            : <Loading />}
      </>
   );
}

export default Users