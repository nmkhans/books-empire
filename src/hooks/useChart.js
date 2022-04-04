import { useState, useEffect } from 'react';

const useCart = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, []);
    return [data, setData];
}

export default useCart;