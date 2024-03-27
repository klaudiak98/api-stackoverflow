import TagsTable from "../components/TagsTable"
import TableConfiguration from "../components/TableConfiguration"
import { useEffect} from "react"
import ErrorMessage from "../components/ErrorMessage"
import Header from "../components/Header"
import { useTagsContext } from "../hooks/useTagsContext"

const Home = () => {

    const {
        fetchTags,
        page,
        tagsPerPage,
        sort,
        order,
        error
    } = useTagsContext()

    useEffect(() => {
        fetchTags()
    },[page, tagsPerPage, sort, order])

  return (
    <>
        <Header title="StackOverflow Tags"/>
        <TableConfiguration/>
        {!error && <TagsTable/>}
        {error && <ErrorMessage/>}
    </>
  )
}

export default Home