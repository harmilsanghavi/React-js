import { useCallback, useEffect, useState } from 'react'
import { useListPostsQuery } from '../store/postApi'

export const PostList = () => {
    const [page, setPage] = useState(1)
    const { data, isLoading, isFetching } = useListPostsQuery(page, {
        pollingInterval: 5000,
    })

    useEffect(() => {
        console.log("posts :- ", data);
    }, [data])

    // const prefetchNext = useCallback(() => {
    //     setPage(page + 1)
    // }, [page])
    
    if (isLoading) {
        return <div>Loading</div>
    }


    if (!data) {
        return <div>No posts :(</div>
    }


    return (
        <div>

            {data.map((item) => (
                <div key={item.id}>
                    {item.id} - {item.title}
                </div>
            ))}
            <button onClick={() => setPage((prevPage) => prevPage - 1)} disabled={page === 1 || isFetching}>
                Previous
            </button>&nbsp;
            <button onClick={() => setPage((prevPage) => prevPage + 1)} disabled={isFetching} /*onMouseEnter={prefetchNext}*/>
                Next
            </button>
        </div>
    )
}