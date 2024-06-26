import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, CircularProgress } from "@mui/material"
import { SortType } from "../utils/SortType"
import { OrderType } from "../utils/OrderType"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useTagsContext } from "../hooks/useTagsContext"
import { TagType } from "../utils/TagType";

const TagsTable = () => {
  const { tags, sort, setSort, order, setOrder, loading } = useTagsContext()

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
      return order === 'asc' ? <ArrowUpwardIcon sx={{fontSize: '1.2em', alignSelf: 'center'}} /> : <ArrowDownwardIcon sx={{fontSize: '1.2em', alignSelf: 'center'}}/>
    }
    return null
  }

  return (
    <TableContainer component={Paper} sx={{ maxHeight: '60vh' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell 
              sx={{
                fontWeight: 600, 
                width: '50%', 
                '&:hover': {cursor: 'pointer', color: 'secondary.main'}}} 
              onClick={() => handleSort('name')}>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>Name {getSortIndicator('name')}</Box>
            </TableCell>
            <TableCell 
              sx={{
                fontWeight: 600, 
                '&:hover': {cursor: 'pointer', color: 'secondary.main'}}} 
              onClick={() => handleSort('popular')}>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>Amount {getSortIndicator('popular')}</Box>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { !loading && tags && tags.map((tag: TagType) => (
            <TableRow key={tag.name}>
              <TableCell sx={{textAlign: 'center', borderBottom: 'none'}}>{tag.name}</TableCell>
              <TableCell sx={{textAlign: 'center', borderBottom: 'none'}}>{tag.count}</TableCell>
            </TableRow>
          ))}
          { !loading && tags.length === 0 && (
            <TableRow>
              <TableCell colSpan={2} sx={{textAlign: 'center', borderBottom: 'none'}}>No data. Please change parameters.</TableCell>
            </TableRow>
          )}
          { loading && 
            <TableRow>
              <TableCell colSpan={2} sx={{ borderBottom: 'none' }}>
                <Box 
                  sx={{
                    height: 200,
                    alignSelf:'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'}}>
                  <CircularProgress size="80px" color="secondary"/>
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