import { Link, useParams } from 'react-router-dom'
import { Paper, Grid, Typography, Button } from '@mui/material'
import useProductDetails from '../hooks/useProductDetails'
import useStyles from '../styles/ProductDetails.styles'

function ProductDetails() {
  const { productId } = useParams()
  const {
    loading,
    error,
    productDetails
  } = useProductDetails(productId)

  const classes = useStyles()

  return (
    <>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid xs={12} item className={classes.imageContainer}>
            <img className={classes.image} src={productDetails.image_url} alt={productDetails.name} />
          </Grid>
          <Grid xs={12} item className={classes.detailsContainer}>
            <Typography variant='h4' color='primary'>
              {productDetails.name}
            </Typography>
            {productDetails.description && (
              <Typography className={classes.description} variant='body1'>
                {productDetails.description}
              </Typography>
            )}
            <Typography variant='body1'>Quantity: {productDetails.quantity}</Typography>
            <Typography variant='body1'>Tag: {productDetails.tag}</Typography>
            <Typography variant='body1'>Vendor: {productDetails.vendor}</Typography>
          </Grid>
          <Grid xs={6} md={9} item>
            <Button className={classes.actionButton} variant='contained' color='primary'>
              Add to Cart
            </Button>
          </Grid>
          <Grid xs={6} md={3} item>
            <Link to='/products'>
              <Button className={classes.actionButton} variant='contained' color='primary'>
                Go Back
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Paper>
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error...'}</div>
    </>
  )

}

export default ProductDetails
