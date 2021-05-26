import axios from "axios";
import React, {useState} from "react";

const useHttp = () => {
    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const request = async (url, method) => {
        setLoading(true)
        try {
            const res = await axios({ method, url })
            setLoading(false)
            return res
        } catch (error) {
            setError(error)
            setLoading(false)
        }

    }

    return { error, request, loading }
};

export default useHttp;