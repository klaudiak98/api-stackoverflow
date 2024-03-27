import { Paper, Typography } from "@mui/material"
import { useTagsContext } from "../hooks/useTagsContext"

const ErrorMessage = () => {

  const { error } = useTagsContext()

  return (
    <Paper
        sx={{
            height: 300, 
            display: 'flex', 
            justifyContent: 'center',
            flexDirection: 'column',
            gap: 1.5,
            textAlign: 'center'
      }}
    >
        <Typography variant="h2" sx={{color: 'error.main', fontWeight: 600}}>Oops!</Typography>
        <Typography variant="h4" >{error && error.message}</Typography>
        <Typography variant="body1">Error code: {error && error.code}</Typography>
    </Paper>
  )
}

export default ErrorMessage