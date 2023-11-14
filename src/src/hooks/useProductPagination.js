import { useState, useEffect } from 'react'
import axios from 'axios'

const useProductPagination = (startInd, limit) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [products, setProducts] = useState([])
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    let cancelToken
    setLoading(true)
    setError(false)
    axios({
      method: 'GET',
      url: 'http://localhost:8080/products',
      params: {
        offset: startInd,
        limit
      },
      cancelToken: new axios.CancelToken(_cancelToken => cancelToken = _cancelToken)
    }).then(({ data }) => {
      setLoading(false)
      setProducts(prevList => [...prevList, ...data])
      setHasMore(!!data.length)
    }).catch((err) => {
      if (axios.isCancel(err)) {
        return
      }
      console.error('Error fetching products:', err)
      setError(true)
    })
    return () => cancelToken()
  }, [startInd, limit])

  return { loading, error, products, hasMore }
}

export default useProductPagination
