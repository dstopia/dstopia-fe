import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [isPending, setisPending] = useState(true)
    const [error, setError] = useState(false)

    axios
        .get(url)
        .then((res) => {
            setisPending(false)
            setData(res.data)
        })
        .catch((err) => {
            setisPending(false)
            setError(err)
        })

    return [data, isPending, error]
}

export default useFetch
