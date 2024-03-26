import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { FC } from "react"
import { TagType } from "../utils/TagType"

const TagsTable: FC<{ tags: TagType[]}> = ({ tags }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { tags && tags.map((tag: TagType) => (
            <TableRow key={tag.name}>
              <TableCell>{tag.name}</TableCell>
              <TableCell>{tag.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TagsTable