import { Box, Typography, Paper, TextField } from "@mui/material"
import TagsTable from "../components/TagsTable"
import { ChangeEvent, useEffect, useState } from "react"
import { TagType } from "../utils/TagType"
import axios from "axios"
import { SortType } from "../utils/SortType"
import { OrderType } from "../utils/OrderType"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Home = () => {

    const BASE_URL: string = 'https://api.stackexchange.com/2.3/tags?site=stackoverflow';

    const [tags, setTags] = useState<TagType[]>([{name: 'js', count: 2}, {name: 'java', count: 10}]);
    const [tagsPerPage, setTagsPerPage] = useState<number>(5);
    const [page, setPage] = useState<number>(1);
    const [isNext, setIsNext] = useState<boolean>(false);
    const [sort, setSort] = useState<SortType>('popular');
    const [order, setOrder] = useState<OrderType>('desc');
    const [loading, setLoading] = useState<boolean>(false);

    const fetchTags = async () => {
        setLoading(true)
        try {
            const result = await axios.get(`${BASE_URL}&pagesize=${tagsPerPage}&page=${page}&sort=${sort}&order=${order}`)
            setTags(result.data.items)
            setIsNext(result.data.has_more)
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    const handlePerPageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const perPage: number = Number(e.target.value)
        setTagsPerPage(perPage)
    }
    
    const handleNextPage = () => {
        setPage(page +1)
    }

    const handlePreviousPage = () => {
        setPage(page -1)
    }

    useEffect(() => {
        fetchTags()
    },[page, tagsPerPage, sort, order])


  return (
    <>
        <Typography variant="h1" sx={{paddingBottom: 3}}>StackOverflow Tags</Typography>
        <Paper 
            sx={{
                marginBottom: 2,
                padding: 2,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems:'center'}}>
            <TextField 
                type='number' 
                value={tagsPerPage || ''} 
                onChange={handlePerPageChange} 
                inputProps={{min: 1, max:100}}
                label="how many tags?"
                sx={{width: '30%'}}
            />
            <Box display='flex' gap={2}>
                { page > 1 && <NavigateBeforeIcon onClick={handlePreviousPage} sx={{'&:hover': {cursor: 'pointer', color: 'gray'}}}/>}
                <Typography>{page}</Typography>
                { isNext && page < 25 && <NavigateNextIcon onClick={handleNextPage} sx={{'&:hover': {cursor: 'pointer', color: 'gray'}}}/>}
            </Box>
        </Paper>
        <TagsTable tags={tags} sort={sort} setSort={setSort} order={order} setOrder={setOrder} loading={loading}/>
    </>
  )
}

export default Home