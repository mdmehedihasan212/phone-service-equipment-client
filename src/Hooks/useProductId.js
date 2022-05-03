import { useEffect, useState } from "react"

const useProductId = id => {
    const [productId, setProductId] = useState();

    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProductId(data))
    }, [id])

    return [productId, setProductId];
}

export default useProductId;