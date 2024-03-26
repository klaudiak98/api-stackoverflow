import { Typography } from "@mui/material"
import TagsTable from "../components/TagsTable"
import { useEffect, useState } from "react"
import { TagType } from "../utils/TagType"
import axios from "axios"

const Home = () => {

    const BASE_URL: string = 'https://api.stackexchange.com/2.3/tags?site=stackoverflow';
    const [tags, setTags] = useState<TagType[]>([]);

    const fetchTags = async () => {
        try {
            const result = await axios.get(BASE_URL)
            setTags(result.data.items)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchTags()
    },[])


  return (
    <>
        <Typography variant="h1" sx={{paddingBottom: 3}}>StackOverflow Tags</Typography>
        <TagsTable tags={tags}/>
    </>
  )
}

export default Home