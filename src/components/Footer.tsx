import * as React from 'react'
import { makeStyles, Theme, createStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footerSection: {
      marginTop: '10vh',
      marginBottom: '5vh',
      width: '100%',
      textAlign: 'center'
    },
    hiddenLink: {
      textDecoration: 'none'
    }
  })
)
const Footer = () => {
  const classes = useStyles()
  const now = new Date()
  return (
    <div className={classes.footerSection}>
      <Typography>
        © {now.getFullYear()} - Riverside Baptist Church - Norfolk, VA
      </Typography>
    </div>
  )
}

export default Footer
