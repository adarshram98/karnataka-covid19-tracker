import React from 'react'

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
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

const Cards =({data:{Karnataka}}) =>{
    
    const classes = useStyles();
    if(!Karnataka)
    {
        return 'loading..'
    }
    console.log(Karnataka)
    var District = Karnataka.districtData;
    let wholeArray = Object.keys(District).map(key => District[key]);
    var Dkeys = Object.entries(District)

    console.log(Dkeys)
    console.log(Dkeys[0][1].active)
    Dkeys.map(d=>{
      console.log(d[1].active)
    })
    console.log(District[Dkeys])
    return (
    <div >
     
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>District</TableCell>
              <TableCell align="right">Confirmed</TableCell>
              <TableCell align="right">Active</TableCell>
              <TableCell align="right">Recovered</TableCell>
              <TableCell align="right">Deceased</TableCell>
             
            </TableRow>
          </TableHead>
          <TableBody>
             {Dkeys.map((d) => (
              <TableRow key={d}>
                <TableCell component="th" scope="row">
                  {d[0]}
                </TableCell>
                <TableCell align="right">{d[1].confirmed}</TableCell>
                <TableCell align="right">{d[1].active}</TableCell>
                <TableCell align="right">{d[1].recovered}</TableCell>
                <TableCell align="right">{d[1].deceased}</TableCell>
                
              </TableRow> 
            ))} 
           
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    );
}

export default Cards
