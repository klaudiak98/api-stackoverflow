import { Container, ThemeProvider } from "@mui/material"
import Home from "./pages/Home"
import { TagsProvider } from "./context/TagsContexts"
import { darkTheme } from "./themes/darkTheme"

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <TagsProvider>
        <Container sx={{padding: 2}}>
          <Home/>
        </Container>
      </TagsProvider>
    </ThemeProvider>
  )
}

export default App
