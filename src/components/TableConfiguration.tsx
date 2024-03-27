import { Paper } from "@mui/material"
import Pagination from "./Pagination";
import { ChangeEvent, FC } from "react";
import TagsPerPageInput from "./TagsPerPageInput";

const TableConfiguration: FC<{tagsPerPage: number, page: number, isNext: boolean, setTagsPerPage: (tagsPerPage: number) => void, setPage: (page: number) => void}> = ({ tagsPerPage, page, isNext, setTagsPerPage, setPage}) => {

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
        <TagsPerPageInput tagsPerPage={tagsPerPage} handlePerPageChange={handlePerPageChange}/>
        <Pagination page={page} handlePreviousPage={handlePreviousPage} isNext={isNext} handleNextPage={handleNextPage}/>
    </Paper>
  )
}

export default TableConfiguration