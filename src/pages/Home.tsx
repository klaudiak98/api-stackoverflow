import { Box, Button, Typography, Paper, TextField } from "@mui/material"
import TagsTable from "../components/TagsTable"
import { ChangeEvent, useEffect, useState } from "react"
import { TagType } from "../utils/TagType"
import axios from "axios"

const Home = () => {

    const BASE_URL: string = 'https://api.stackexchange.com/2.3/tags?site=stackoverflow';
    const [tags, setTags] = useState<TagType[]>([]);
    const [tagsPerPage, setTagsPerPage] = useState<number>(5);
    const [page, setPage] = useState<number>(1);
    const [isNext, setIsNext] = useState<boolean>(false);

    const fetchTags = async () => {
        try {
            const result = await axios.get(`${BASE_URL}&pagesize=${tagsPerPage}&page=${page}`)
            setTags(result.data.items)
            setIsNext(result.data.has_more)
        } catch (err) {
            console.error(err)
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
    },[page, tagsPerPage])


  return (
    <>
        <Typography variant="h1" sx={{paddingBottom: 3}}>StackOverflow Tags</Typography>
        <Paper sx={{marginBottom: 2, padding: 2, display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
            <TextField 
                type='number' 
                value={tagsPerPage || ''} 
                onChange={handlePerPageChange} 
                inputProps={{min: 1}}
                label="how many tags?"/>
            <Box>
                { page > 1 && <Button onClick={handlePreviousPage}>previos</Button>}
                { isNext && <Button onClick={handleNextPage}>next</Button>}
            </Box>

        </Paper>
        <TagsTable tags={tags}/>
    </>
  )
}

export default Home