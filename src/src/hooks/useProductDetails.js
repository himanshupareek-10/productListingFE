import { useState, useEffect } from 'react'
import axios from 'axios'

const useProductDetails = (productId) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [productDetails, setProductDetails] = useState({})

  useEffect(() => {
    let cancelToken
    setLoading(true)
    axios({
      method: 'GET',
      url: `http://localhost:8080/product/${productId}`,
      cancelToken: new axios.CancelToken(_cancelToken => cancelToken = _cancelToken)
    }).then(({ data }) => {
      setLoading(false)
      setProductDetails(data)
    }).catch((err) => {
      if (axios.isCancel(err)) {
        return
      }
      console.error('Error fetching product details:', err)
      setError(true)
    })
    return () => cancelToken()
  }, [productId])

  return { loading, error, productDetails }
}

export default useProductDetails
