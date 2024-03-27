import TextField from "@mui/material/TextField"
import { ChangeEventHandler } from "react"

const TagsPerPageInput = ({tagsPerPage, handlePerPageChange} : {tagsPerPage: number, handlePerPageChange: ChangeEventHandler<HTMLInputElement>}) => {
  return (
        <TextField 
        type='number' 
        value={tagsPerPage || ''} 
        onChange={handlePerPageChange} 
        inputProps={{min: 1, max:100}}
        label="how many tags?"
        color="secondary"
        sx={{width: '30%',}}
    />
  )
}

export default TagsPerPageInput