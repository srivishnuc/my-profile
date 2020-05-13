import React from 'react'
import {
    withStyles,
    Box, Tooltip, Link
} from '@material-ui/core'
import { GitHub, LinkedIn } from '@material-ui/icons'



const useStyles = (style) =>
    ({
        root: {
            margin: style.spacing(1),

        },
        icon: {
            width: '60px',
            height: '60px',

        },
        mylink1: {
            position: 'fixed',
            bottom: '5%',
            left: '35%'
        },
        mylink2: {
            position: 'fixed',
            left: '55%',
            bottom: '5%'
        }
    })


class MyLinks extends React.Component {

    render() {
        const { classes } = this.props
        return (
            <Box>
                <Box className={classes.mylink1}>
                    <Tooltip placement="top" title="GitHub/srivishnuc">
                        <Link color="textPrimary" href="https://github.com/srivishnuc" target="_blank" rel="noreferrer noopener" >
                            <GitHub className={classes.icon} />
                        </Link>
                    </Tooltip>
                </Box>
                <Box className={classes.mylink2}>
                    <Tooltip placement="top" title="LinkedIn/srivishnu995">
                        <Link color="textPrimary" href="https://www.linkedin.com/in/sri-vishnu-c-33a6b79b/" target="_blank" rel="noreferrer noopener" >
                            <LinkedIn className={classes.icon} />
                        </Link>
                    </Tooltip>
                </Box>
            </Box>
        )

    }


}


export default (withStyles)(useStyles)(MyLinks);