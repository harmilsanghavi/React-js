import { useEffect, useState } from 'react'
import { useListPostsQuery } from '../store/postApi'
import '../App.css';


export const Polling = () => {
    const [page, setPage] = useState(1)
    const { data, isLoading, isFetching } = useListPostsQuery(page, {
        pollingInterval: 5000,
    })

    useEffect(() => {
        console.log("posts :- ", data);
    }, [data])


    if (isLoading) {
        return <div>Loading</div>
    }


    if (!data) {
        return <div>No posts :(</div>
    }


    return (
        <div className='prefetch'>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Body</th>
                    </tr>
                </thead>
                {data.map((item) => (
                    <tbody>
                        <tr key={item.id}>
                            <th scope='row'>{item.id}</th>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                        </tr>
                    </tbody>
                ))}
            </table>
            <button onClick={() => setPage((prevPage) => prevPage - 1)} disabled={page === 1 || isFetching}>
                Previous
            </button>&nbsp;
            <button onClick={() => setPage((prevPage) => prevPage + 1)} disabled={isFetching} >
                Next
            </button>
        </div>
    )
}