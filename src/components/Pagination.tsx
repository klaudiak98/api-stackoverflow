import { Paper, TextField, Box, Typography } from "@mui/material"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { ChangeEvent, FC } from "react";

const Pagination: FC<{tagsPerPage: number, page: number, isNext: boolean, setTagsPerPage: (tagsPerPage: number) => void, setPage: (page: number) => void}> = ({ tagsPerPage, page, isNext, setTagsPerPage, setPage}) => {

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
  return (
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
            color="secondary"
            sx={{width: '30%',}}
        />
        <Box display='flex' gap={2}>
            { page > 1 && <NavigateBeforeIcon onClick={handlePreviousPage} sx={{'&:hover': {cursor: 'pointer', color: 'secondary.main'}}}/>}
            <Typography>{page}</Typography>
            { isNext && page < 25 && <NavigateNextIcon onClick={handleNextPage} sx={{'&:hover': {cursor: 'pointer', color: 'secondary.main'}}}/>}
        </Box>
    </Paper>
  )
}

export default Pagination