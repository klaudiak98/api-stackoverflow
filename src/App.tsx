import { Container } from "@mui/material"
import Home from "./pages/Home"
import { TagsProvider } from "./context/TagsContexts"

function App() {
  return (
    <TagsProvider>
      <Container sx={{padding: 2}}>
        <Home/>
      </Container>
    </TagsProvider>

  )
}

export default App
