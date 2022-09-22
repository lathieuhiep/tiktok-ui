import { useState, useEffect } from "react";

function useDebounce(value, delay = 800) {
    const [debounceValue, setDebounceValue] = useState('')

    useEffect(() => {
        const handler = setTimeout(() => setDebounceValue(value), delay)

        return () => clearTimeout(handler)
    }, [value])

    return debounceValue
}

export default useDebounce