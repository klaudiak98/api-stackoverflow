import { ReactNode, useState } from "react";
import { TagType } from "../../utils/TagType";
import { OrderType } from "../../utils/OrderType";
import { SortType } from "../../utils/SortType";
import { ErrorType } from "../../utils/ErrorType";
import { TagsContext } from "../../context/TagsContexts";

export const PaginationProvider = ({ children, initialPageValue, initialNextValue } : { children: ReactNode, initialPageValue: number, initialNextValue: boolean }) => {

    const [page, setPage] = useState<number>(initialPageValue);
    const [isNext, setIsNext] = useState<boolean>(initialNextValue);

    const [tags, setTags] = useState<TagType[]>([]);
    const [tagsPerPage, setTagsPerPage] = useState<number>(5);
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

export const PaginationDecorator = ({ children }: {children: ReactNode}) => {
    return (
        <PaginationProvider initialPageValue={1} initialNextValue={true}>
            {children}
        </PaginationProvider>
    )
}