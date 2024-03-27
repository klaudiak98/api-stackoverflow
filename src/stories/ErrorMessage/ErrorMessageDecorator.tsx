import { ReactNode, useState } from "react";
import { TagType } from "../../utils/TagType";
import { OrderType } from "../../utils/OrderType";
import { SortType } from "../../utils/SortType";
import { ErrorType } from "../../utils/ErrorType";
import { TagsContext } from "../../context/TagsContexts";

export const ErrorMessageProvider = ({ children, initialValue } : { children: ReactNode, initialValue: ErrorType }) => {
    const [error, setError] = useState<ErrorType>(initialValue)

    const [tags, setTags] = useState<TagType[]>([]);
    const [tagsPerPage, setTagsPerPage] = useState<number>(5);
    const [page, setPage] = useState<number>(1);
    const [isNext, setIsNext] = useState<boolean>(false);
    const [sort, setSort] = useState<SortType>('popular');
    const [order, setOrder] = useState<OrderType>('desc');
    const [loading, setLoading] = useState<boolean>(false);
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

export const ErrorMessageDecorator = ({ children }: {children: ReactNode}) => {
    return (
        <ErrorMessageProvider initialValue={{code: 404, message: 'Bad Request'}}>
            {children}
        </ErrorMessageProvider>
    )
}