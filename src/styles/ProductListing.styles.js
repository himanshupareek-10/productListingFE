import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    productList: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap',
        padding: '20px',
        background: '#e6e6e6'
    },
    card: {
        width: '300px',
        background: '#c0c0c0',
        margin: '10px',
        textAlign: 'center',
        padding: '10px',
        border: '1px solid #aaa',
        borderRadius: '8px'
    },
    linkButton: {
        textDecoration: 'none',
        color: 'inherit'
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '10px 0'
    },
    soldOutText: {
        color: 'red',
        fontWeight: 'bold'
    },
    availableText: {
        color: 'green',
        fontWeight: 'bold'
    },
    soldOutButton: {
        backgroundColor: 'lightgray',
        color: '#888',
        pointerEvents: 'none',
        '&:hover': {
            backgroundColor: 'lightgray',
        }
    },
    availableButton: {
        backgroundColor: 'green',
        color: 'white',
        '&:hover': {
            backgroundColor: 'darkgreen',
        }
    },
    image: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
        borderRadius: '8px'
    }
})

export default useStyles
