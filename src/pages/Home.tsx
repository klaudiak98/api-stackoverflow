import { Typography } from "@mui/material"
import TagsTable from "../components/TagsTable"
import Pagination from "../components/Pagination"
import { useEffect, useState } from "react"
import { TagType } from "../utils/TagType"
import axios, { AxiosError } from "axios"
import { SortType } from "../utils/SortType"
import { OrderType } from "../utils/OrderType"
import { ErrorType } from "../utils/ErrorType"

import ErrorMessage from "../components/ErrorMessage"

const Home = () => {

    const BASE_URL: string = 'https://api.stackexchange.com/2.3/tags?site=stackoverflow';

    const [tags, setTags] = useState<TagType[]>([]);
    const [tagsPerPage, setTagsPerPage] = useState<number>(5);
    const [page, setPage] = useState<number>(1);
    const [isNext, setIsNext] = useState<boolean>(false);
    const [sort, setSort] = useState<SortType>('popular');
    const [order, setOrder] = useState<OrderType>('desc');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<ErrorType>(null)

    const fetchTags = async () => {
        setLoading(true)
        try {
            const result = await axios.get(`${BASE_URL}&pagesize=${tagsPerPage}&page=${page}&sort=${sort}&order=${order}`)
            setTags(result.data.items)
            setIsNext(result.data.has_more)
            setError(null)
        } catch (err) {
            if (axios.isAxiosError(err)) {
                const axiosError: AxiosError = err;
                if (axiosError.response?.status === 400) {
                    setError({ code: axiosError.response?.status, message: axiosError.response?.statusText || 'Something went wrong.'})
                } else if (axiosError.response?.status === 500) {
                    setError({ code: axiosError.response?.status, message: 'Internal Server Error' })
                }
            } else {
                setError({code: 500, message: 'Unknown error'})
            }
        } finally {
            setLoading(false)
        }
    }



    useEffect(() => {
        fetchTags()
    },[page, tagsPerPage, sort, order])


  return (
    <>
        <Typography variant="h1" sx={{paddingBottom: 3}}>StackOverflow Tags</Typography>
        <Pagination tagsPerPage={tagsPerPage} page={page} isNext={isNext} setTagsPerPage={setTagsPerPage} setPage={setPage}/>
        {!error && <TagsTable tags={tags} sort={sort} setSort={setSort} order={order} setOrder={setOrder}loading={loading}/>}
        {error && <ErrorMessage error={error}/>}
    </>
  )
}

export default Home