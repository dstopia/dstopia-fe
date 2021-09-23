import axios from 'axios'
import { useState } from 'react'

const useFetch = (url, httpMethod = 'get') => {
    const [data, setData] = useState([])
    const [isPending, setisPending] = useState(true)
    const [error, setError] = useState(false)

    switch (httpMethod) {
        case 'post':
            axios
                .post(url)
                .then((res) => {
                    setData(res.data)
                    setisPending(false)
                })
                .catch((err) => {
                    setError(err)
                })
            break
        case 'put':
            axios
                .put(url)
                .then((res) => {
                    setData(res.data)
                    setisPending(false)
                })
                .catch((err) => {
                    setError(err)
                })
            break
        case 'delete':
            axios
                .delete(url)
                .then((res) => {
                    setData(res.data)
                    setisPending(false)
                })
                .catch((err) => {
                    setError(err)
                })
            break
        default:
            axios
                .get(url)
                .then((res) => {
                    setData(res.data)
                    setisPending(false)
                })
                .catch((err) => {
                    setError(err)
                })
    }
    return { data, isPending, error }
}

export default useFetch
