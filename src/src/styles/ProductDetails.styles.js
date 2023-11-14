import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    paper: {
        padding: '30px',
        margin: 'auto',
        maxWidth: '800px',
        background: '#f8f8f8',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
    },
    image: {
        width: '100%',
        height: 'auto',
        borderRadius: '10px'
    },
    detailsContainer: {
        marginTop: '16px'
    },
    actionButton: {
        paddingTop: '0px'
    }
  })

  export default useStyles