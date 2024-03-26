import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, CircularProgress } from "@mui/material"
import { FC } from "react"
import { TagType } from "../utils/TagType"
import { SortType } from "../utils/SortType"
import { OrderType } from "../utils/OrderType"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const TagsTable: FC<{ tags: TagType[], sort: SortType, setSort: (sort: SortType) => void, order: OrderType, setOrder: (order: OrderType) => void, loading: boolean}> = ({ tags, sort, setSort, order, setOrder, loading }) => {

  const handleSort = (sortBy: SortType) => {
    if (sort === sortBy) {
      const newOrder: OrderType = order === 'asc' ? 'desc' : 'asc'
      setOrder(newOrder)
    } else {
      setSort(sortBy)
      setOrder('asc')
    }
  }

   const getSortIndicator = (sortBy: SortType) => {
    if (sort === sortBy) {
      return order === 'asc' ? <ArrowUpwardIcon/> : <ArrowDownwardIcon/>
    }
    return null
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell 
              sx={{
                fontWeight: 600, 
                width: '50%', 
                '&:hover': {cursor: 'pointer', color: 'gray'}}} 
              onClick={() => handleSort('name')}>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>Name {getSortIndicator('name')}</Box>
            </TableCell>
            <TableCell 
              sx={{
                fontWeight: 600, 
                '&:hover': {cursor: 'pointer', color: 'gray'}}} 
              onClick={() => handleSort('popular')}>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>Amount {getSortIndicator('popular')}</Box>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { !loading && tags && tags.map((tag: TagType) => (
            <TableRow key={tag.name}>
              <TableCell sx={{textAlign: 'center'}}>{tag.name}</TableCell>
              <TableCell sx={{textAlign: 'center'}}>{tag.count}</TableCell>
            </TableRow>
          ))}
          { loading && 
            <TableRow>
              <TableCell colSpan={2}>
                <Box 
                  sx={{
                    height: 200,
                    alignSelf:'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'}}>
                  <CircularProgress size="80px"/>
                </Box>
              </TableCell>
            </TableRow>
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TagsTable