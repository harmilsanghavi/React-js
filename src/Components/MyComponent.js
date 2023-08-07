import { useCallback, useEffect, useState } from 'react'
import { useListPostsQuery } from '../store/postApi'
import { ColorRing } from "react-loader-spinner";
import '../App.css';

export const MyComponent = () => {
  const [page, setPage] = useState(1)
  const { data, isLoading, isFetching } = useListPostsQuery(page)

  useEffect(() => {
    console.log("posts :- ", data);
  }, [data])

  const prefetchNext = useCallback(() => {
    setPage(page + 1)
  }, [page])

  if (isLoading) {
    return <ColorRing
      visible={true}
      height="30rem"
      width="20rem"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />
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
      <button disabled={page === 10} onMouseEnter={prefetchNext}>
        Next
      </button>
    </div>
  )
}