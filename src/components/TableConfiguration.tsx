import { Paper } from "@mui/material"
import Pagination from "./Pagination";
import TagsPerPageInput from "./TagsPerPageInput";

const TableConfiguration = () => {
    return (
        <Paper 
            sx={{
                marginBottom: 2,
                padding: 2,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems:'center'}}>
            <TagsPerPageInput/>
            <Pagination/>
        </Paper>
    )
}

export default TableConfiguration