import {useContext, useEffect} from 'react'

import MyContext from '../context/MyContext'

const FetchData = () => {
    const context = useContext(MyContext)
    const {dispatchData, setLoading, setError} = context

    const URL = 'https://jsonplaceholder.typicode.com/users/';

    useEffect(() => {
        fetch(URL)
        .then((response) => response.json())
        .then((data) => dispatchData({type: 'ADD_DATA', payload: data}))
        .then(() => setLoading(false))
        .catch((err) => setError(err))
    },[dispatchData, setLoading, setError])


    return null
}

export default FetchData
