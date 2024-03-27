import { useContext } from "react";
import { TagsContext } from "../context/TagsContexts";

export const useTagsContext = () => useContext(TagsContext)