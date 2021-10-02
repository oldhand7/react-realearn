import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import fechGifsFrontServer from './actions';
import Gifs from './components/Gifs';
import logo from './images/logo.svg';

const styles = theme => ({
  root: {
    flexFlow: 1,
    textAlign: 'center'
  },
  logo: {
    padding: 15,
    borderBottom: 'solid 1px',
    borderColor: theme.palette.primary.dark
  },
  button: {
    margin: '20px 0',
    padding: '0 0 20px 0'
  }
});

const App = ({ classes, dispatch, gifs }) => (
  <Grid container justify="center" className={classes.root}>
    <Grid item xs={12} className={classes.logo}>
      <img src={logo} alt="Laboratoria" />
    </Grid>
    <Grid item xs={12}>
      <Typography variant="h1" align="center" gutterBottom>
        <FormattedMessage id="hello.world" />
      </Typography>
    </Grid>

    <Grid item xs={12} className={classes.button}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(fechGifsFrontServer)}
      >
        <FormattedMessage id="load.gifs" />
      </Button>
    </Grid>

    <Grid item xs={12}>
      <Gifs data={gifs} />
    </Grid>
  </Grid>
);

const mapStateToProps = state => ({
  gifs: state.gifs
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(App);
