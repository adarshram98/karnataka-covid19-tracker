import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

import styles from "D:/React/tracker/src/components/Cards/Cards.module.css"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));




const Cards = ({ data: { Karnataka } }) => {

  const [spacing, setSpacing] = React.useState(2);


  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };
  const classes = useStyles();
  if (!Karnataka) {
    return 'loading..'
  }
  console.log(Karnataka)
  var District = Karnataka.districtData;
  let wholeArray = Object.keys(District).map(key => District[key]);
  var Dkeys = Object.entries(District)
  var active = 0
  var confirmed = 0
  var recovered = 0
  var dead = 0
  console.log(Dkeys)
  console.log(Dkeys[0][1].active)
  Dkeys.map(d => {
    active += d[1].active;
    recovered += d[1].recovered
    dead += d[1].deceased
    confirmed += d[1].confirmed
  })
  console.log(District[Dkeys])
  return (
    <div >
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            <Grid item>
              <div className={styles.stylecard}>
              <div className="card text-white bg-danger mb-3" >
                <div className="card-header">Confirmed</div>
                <div className="card-body">
                  <h4 className="card-title">{confirmed}</h4>
                </div>
              </div>
              </div>
            </Grid>
            <Grid item>
              <div className={styles.stylecard}>
              <div className="card text-white bg-info mb-3" >
                <div className="card-header"> Active </div>
                <div className="card-body">
                  <h4 className="card-title">{active}</h4>
                </div>
              </div>
              </div>
            </Grid>
            <Grid item>
              <div className="card text-white bg-success mb-3" >
                <div className="card-header">Recovered</div>
                <div className="card-body">
                  <h4 className="card-title">{recovered}</h4>
                </div>
              </div>
            </Grid>
            <Grid item>
              <div className="card text-white bg-mute mb-3" >
                <div className="card-header">Deceased</div>
                <div className="card-body">
                  <h4 className="card-title">{dead}</h4>
                </div>
              </div>
            </Grid> 
          </Grid>
        </Grid>
      </Grid>

      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col" className={styles.text} >District</th>
            <th scope="col" className="text-danger">Confirmed</th>
            <th scope="col" className="text-info">Active</th>
            <th scope="col" className="text-success">Recovered</th>
            <th scope="col" className="text-secondary">Deceased</th>
          </tr>
        </thead>
        <tbody>
          {Dkeys.map((d) => (
            <tr class="table-active" key={d}>
              <th scope="row" className={styles.text}  >{d[0]}</th>
              <td className="text-danger">{d[1].confirmed}</td>
              <td className="text-info">{d[1].active}</td>
              <td className="text-success">{d[1].recovered}</td>
              <td className="text-secondary">{d[1].deceased}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Cards
