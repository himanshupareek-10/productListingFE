import { useState, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, Typography, Button } from '@mui/material'
import useProductPagination from '../hooks/useProductPagination'
import useStyles from '../styles/ProductListing.styles'

function ProductListing() {
  const limit = 20
  const [startInd, setStartInd] = useState(0)

  const {
    loading,
    error,
    products,
    hasMore
  } = useProductPagination(startInd, limit)

  const observer = useRef(null)
  const lastEleRef = useCallback((lastEle) => {
    if (loading) {
      return
    }
    observer.current?.disconnect()
    observer.current = new IntersectionObserver(([ele]) => {
      if (ele.isIntersecting && hasMore) {
        setStartInd(prevStartInd => prevStartInd + limit)
      }
    })
    if (lastEle) {
      observer.current.observe(lastEle)
    }
  }, [loading, hasMore])

  const classes = useStyles()

  return (
    <div className={classes.productList}>
      {products.map((product, ind) => (
        <Card key={product.product_id} ref={(ind === products.length - 1) ? lastEleRef : null} className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="div">
              {product.name}
            </Typography>
            <img src={product.image_url} alt={product.name} className={classes.image}/>
            {product.quantity === 0 ? (
              <div className={classes.buttonContainer}>
                <span className={classes.soldOutText}>Sold Out</span>
                <Button
                  variant="contained"
                  className={classes.soldOutButton}
                  disabled
                >
                  View Details
                </Button>
              </div>
            ) : (
              <div className={classes.buttonContainer}>
                <span className={classes.availableText}>Available</span>
                <Link to={`/product/${product.product_id}`} className={classes.linkButton}>
                  <Button
                    variant="contained"
                    className={classes.availableButton}
                  >
                    View Details
                  </Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error...'}</div>
    </div>
  )
}

export default ProductListing
