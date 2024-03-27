import { Typography } from "@mui/material"

const Header = ({ title }: { title: string }) => {
  return (
    <header>
        <Typography variant="h1" sx={{paddingBottom: 3, textAlign: 'center'}}>{title}</Typography>
    </header>
  )
}

export default Header