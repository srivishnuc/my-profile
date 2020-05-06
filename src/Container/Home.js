import React from 'react';
import {
    withStyles, Typography,
    Avatar, Box, Grid
} from '@material-ui/core'
import MyLinks from '../Container/MyLinks'


import mypic from '../images/mypic.jpg'


const useStyles = (style) =>
    ({
        box: {
            margin: style.spacing(1)
        },
        large: {
            width: '150px',
            left: '15%',
            height: '125px',
            border: '3px',
            borderStyle: 'solid',
            borderColor: 'white',
            '&:hover': {
                cursor: 'grab',
                width: '165px',
                left: '2%'
            }
        },
        header: {
            postion: 'static',
            '&:hover': {
                cursor: 'none',
                fontWeight: 800
            },
            fontSize: '1.2rem',
            '@media (min-width:600px)': {
                fontSize: '1.5rem',
            },
            [style.breakpoints.up('md')]: {
                fontSize: '2.4rem',
            },
        },
    })


const details = { myDetails1: "{Name: 'Sri Vishnu' ,", myDetails2: "Role: 'Web Developer'};" }

class Home extends React.Component {

    constructor() {
        super()
        this.state = {}
    }



    render() {

        const { classes } = this.props

        return (




            <Box className={classes.box}>
                <Grid container
                    direction="column"
                    alignContent="center"
                    justify="center">
                    <Grid item  >
                        <Avatar alt="Sri Vishnu C" src={mypic} className={classes.large} />
                    </Grid>
                    <Grid item>
                        <Typography className={classes.header} variant="h3" color="secondary">{details.myDetails1}</Typography>
                        <Typography className={classes.header} variant="h3" color="primary">{details.myDetails2}</Typography>
                    </Grid>
                </Grid>
                <MyLinks />
            </Box >




        )
    }

}



export default withStyles(useStyles)(Home);
