import { Box, Typography } from "@mui/material"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useTagsContext } from "../hooks/useTagsContext";

const Pagination = () => {

    const { page, setPage, isNext } = useTagsContext()

    const handleNextPage = () => {
        setPage(page +1)
    }

    const handlePreviousPage = () => {
        setPage(page -1)
    }

  return (
    <Box display='flex' gap={2}>
        { page > 1 && <NavigateBeforeIcon onClick={handlePreviousPage} sx={{'&:hover': {cursor: 'pointer', color: 'secondary.main'}}}/>}
        <Typography>{page}</Typography>
        { isNext && page < 25 && <NavigateNextIcon onClick={handleNextPage} sx={{'&:hover': {cursor: 'pointer', color: 'secondary.main'}}}/>}
    </Box>
  )
}

export default Pagination