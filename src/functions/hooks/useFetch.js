import axios from 'axios'
import { useState, useEffect } from 'react'

const useFetch = (url, httpMethod = 'get') => {
    const [data, setData] = useState([])
    const [isPending, setisPending] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        /**
         * Membatalkan fetch data saat akan pindah halaman tetapi fetch belum berhasil
         */
        const abortContr = AbortController()
        setTimeout(() => {
            switch (httpMethod) {
                case 'post':
                    axios
                        .post(url)
                        .then((res) => {
                            setData(res.data)
                            setisPending(false)
                        })
                        .catch((err) => {
                            if (err.name === 'AbortError') {
                                return 'Fetch Failed!'
                            } else {
                                if (err.name === 'AbortError') {
                                    return 'Fetch Failed!'
                                } else {
                                    setisPending(false)
                                    setError(err)
                                }
                            }
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
                            if (err.name === 'AbortError') {
                                return 'Fetch Failed!'
                            } else {
                                setisPending(false)
                                setError(err)
                            }
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
                            setisPending(false)
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
                            setisPending(false)
                            setError(err)
                        })
                    break
            }
        }, 3000)

        return () => {
            console.log('aborted')
        }
    })
    return { data, isPending, error }
}

export default useFetch
