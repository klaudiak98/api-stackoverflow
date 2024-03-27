import { ReactNode, useState } from "react";
import { TagType } from "../../utils/TagType";
import { OrderType } from "../../utils/OrderType";
import { SortType } from "../../utils/SortType";
import { ErrorType } from "../../utils/ErrorType";
import { TagsContext } from "../../context/TagsContexts";

export const TagsTableProvider = ({ children, initialTags, initialSort, initialOrder, initialLoading } : { children: ReactNode, initialTags: TagType[], initialSort: SortType, initialOrder: OrderType, initialLoading: boolean}) => {
    
    const [tags, setTags] = useState<TagType[]>(initialTags);
    const [sort, setSort] = useState<SortType>(initialSort);
    const [order, setOrder] = useState<OrderType>(initialOrder);
    const [loading, setLoading] = useState<boolean>(initialLoading);

    const [page, setPage] = useState<number>(1);
    const [isNext, setIsNext] = useState<boolean>(false);
    const [tagsPerPage, setTagsPerPage] = useState<number>(5);
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

export const TagsTableLoadedDecorator = ({ children }: {children: ReactNode}) => {
    const initialTags: TagType[] = [
        {
            name: 'javascript',
            count: 12345
        },
        {
            name: 'typescript',
            count: 2133
        },
        {
            name: 'java',
            count: 9812
        }
    ]
    return (
        <TagsTableProvider initialTags={initialTags} initialSort="popular" initialOrder="desc" initialLoading={false}>
            {children}
        </TagsTableProvider>
    )
}

export const TagsTableNoDataDecorator = ({ children }: {children: ReactNode}) => {
    return (
        <TagsTableProvider initialTags={[]} initialSort="popular" initialOrder="desc" initialLoading={false}>
            {children}
        </TagsTableProvider>
    )
}

export const TagsTableLoadingDecorator = ({ children }: {children: ReactNode}) => {
    return (
        <TagsTableProvider initialTags={[]} initialSort="popular" initialOrder="desc" initialLoading={true}>
            {children}
        </TagsTableProvider>
    )
}