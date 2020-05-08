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
            width: '140px',
            left: '15%',
            height: '130px',
            border: '3px',
            borderStyle: 'solid',
            borderColor: 'white',
            '&:hover': {
                cursor: 'grab',
                width: '125px',
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


var details = { myDetails1: "{Name: 'Sri Vishnu' ,", myDetails2: "Role: 'Web Developer'};", myDetails3: `Role: 'ERP - Support'};` }

class Home extends React.Component {

    constructor() {
        super()
        this.state = { detailChange: true }
    }


    componentDidMount() {
        this.iterate = setInterval(() => this.changeValue(), 2000)
    }

    changeValue() {

        this.setState(prevState => ({
            detailChange: !prevState.detailChange
        }))
    }

    render() {

        const { classes } = this.props
        const { detailChange } = this.state

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
                    </Grid>
                </Grid>
                <Grid container
                    direction="column"
                    alignContent="center"
                    justify="center">
                    <Grid item  >
                        <Typography className={classes.header} variant="h3" color="primary">{detailChange ? details.myDetails2 : details.myDetails3}</Typography>
                    </Grid>
                </Grid>
                <MyLinks />
            </Box >




        )
    }

}



export default withStyles(useStyles)(Home);
