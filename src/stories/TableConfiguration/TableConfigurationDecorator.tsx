import { ReactNode, useState } from "react";
import { TagType } from "../../utils/TagType";
import { OrderType } from "../../utils/OrderType";
import { SortType } from "../../utils/SortType";
import { ErrorType } from "../../utils/ErrorType";
import { TagsContext } from "../../context/TagsContexts";

export const TableConfigurationProvider = ({ children, initialPageValue, initialNextValue, initialTagsPerPageValue } : { children: ReactNode, initialPageValue: number, initialNextValue: boolean, initialTagsPerPageValue: number}) => {
    
    const [page, setPage] = useState<number>(initialPageValue);
    const [isNext, setIsNext] = useState<boolean>(initialNextValue);
    const [tagsPerPage, setTagsPerPage] = useState<number>(initialTagsPerPageValue);

    const [tags, setTags] = useState<TagType[]>([]);
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

export const TableConfigurationDecorator = ({ children }: {children: ReactNode}) => {
    return (
        <TableConfigurationProvider initialPageValue={1} initialNextValue={true} initialTagsPerPageValue={5}>
            {children}
        </TableConfigurationProvider>
    )
}