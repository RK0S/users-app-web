import { useEffect, useState } from 'react';

export const useFetch = <T>(url: string, dependencies: unknown[]) => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<unknown | null>(null);

    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true);
        setData(null);
        setError(null);
        fetch(url, { signal: controller.signal })
            .then((res) => res.json())
            .then((res) => {
                setIsLoading(false);
                setData(res);
            })
            .catch((err) => {
                if (err.name === 'AbortError') {
                    return;
                }
                setIsLoading(false);
                setError(err);
            })
            .finally(() => {
                if (!controller.signal.aborted) setIsLoading(false);
            });
        return () => {
            controller.abort();
        };
    // спредим массив, так как нам нужно следить за элементами массива
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url, ...dependencies]);

    return { data, isLoading, error };
};
