import TextField from "@mui/material/TextField"
import { useTagsContext } from "../hooks/useTagsContext"
import { ChangeEvent } from "react"

const TagsPerPageInput = () => {
    const { tagsPerPage, setTagsPerPage } = useTagsContext()
    
    const handlePerPageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const perPage: number = Number(e.target.value)
        setTagsPerPage(perPage)
    }

    return (
        <TextField 
            type='number' 
            value={tagsPerPage || ''} 
            onChange={handlePerPageChange} 
            inputProps={{ min: 1, max: 100 }}
            label="How many tags?"
            color="secondary"
            sx={{
                width: '30%',
                '@media (max-width: 768px)': {
                    width:'50%'
                }
            }}
        />
    )
}

export default TagsPerPageInput