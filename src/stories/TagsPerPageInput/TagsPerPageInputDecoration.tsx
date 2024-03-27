import { ReactNode, useState } from "react";
import { TagType } from "../../utils/TagType";
import { OrderType } from "../../utils/OrderType";
import { SortType } from "../../utils/SortType";
import { ErrorType } from "../../utils/ErrorType";
import { TagsContext } from "../../context/TagsContexts";

export const TagsPerPageInputProvider = ({ children, initialValue } : { children: ReactNode, initialValue: number}) => {

    const [tagsPerPage, setTagsPerPage] = useState<number>(initialValue);

    const [tags, setTags] = useState<TagType[]>([]);
    const [page, setPage] = useState<number>(1);
    const [isNext, setIsNext] = useState<boolean>(false);
    const [sort, setSort] = useState<SortType>('popular');
    const [order, setOrder] = useState<OrderType>('desc');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<ErrorType>(null)

    const fetchTags = () => {}

    const contextValue = {
        tags,
        setTags,
        tagsPerPage,
        setTagsPerPage,
        page,
        setPage,
        isNext,
        setIsNext,
        sort,
        setSort,
        order,
        setOrder,
        loading,
        setLoading,
        error,
        setError,
        fetchTags
    }

    return (
        <TagsContext.Provider value={contextValue}>
            {children}
        </TagsContext.Provider>
    )
}

export const TagsPerPageInputDecorator = ({ children }: {children: ReactNode}) => {
    return (
        <TagsPerPageInputProvider initialValue={5}>
            {children}
        </TagsPerPageInputProvider>
    )
}