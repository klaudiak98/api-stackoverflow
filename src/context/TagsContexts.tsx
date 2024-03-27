import { ReactNode, createContext, useState } from "react";
import { TagType } from "../utils/TagType";
import { OrderType } from "../utils/OrderType";
import { SortType } from "../utils/SortType";
import { ErrorType } from "../utils/ErrorType";
import axios, { AxiosError } from "axios";

const BASE_URL: string = 'https://api.stackexchange.com/2.3/tags?site=stackoverflow';

export const TagsContext = createContext<{
    tags: TagType[],
    setTags: (tags: TagType[]) => void,
    tagsPerPage: number,
    setTagsPerPage: (tagsPerPage: number) => void,
    page: number,
    setPage: (page: number) => void,
    isNext: boolean,
    setIsNext: (next: boolean) => void,
    order: OrderType,
    setOrder: (order: OrderType) => void,
    sort: SortType,
    setSort: (sort: SortType) => void,
    loading: boolean,
    setLoading: (loading: boolean) => void,
    error: ErrorType,
    setError: (error: ErrorType) => void,
    fetchTags: () => void
}>({
    tags: [],
    setTags: () => {},
    tagsPerPage: 0,
    setTagsPerPage: () => {},
    page: 0,
    setPage: () => {},
    isNext: false,
    setIsNext: () => {},
    order: 'asc',
    setOrder: () => {},
    sort: 'popular',
    setSort: () => {},
    loading: false,
    setLoading: () => {},
    error: null,
    setError: () => {},
    fetchTags: () => {}
})

export const TagsProvider = ({ children } : { children: ReactNode }) => {
    const [tags, setTags] = useState<TagType[]>([]);
    const [tagsPerPage, setTagsPerPage] = useState<number>(5);
    const [page, setPage] = useState<number>(1);
    const [isNext, setIsNext] = useState<boolean>(false);
    const [sort, setSort] = useState<SortType>('popular');
    const [order, setOrder] = useState<OrderType>('desc');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<ErrorType>(null)

    const fetchTags = async () => {
        setLoading(true)
        try {
            const result = await axios.get(`${BASE_URL}&pagesize=${tagsPerPage}&page=${page}&sort=${sort}&order=${order}`)
            setTags(result.data.items)
            setIsNext(result.data.has_more)
            setError(null)
        } catch (err) {
            if (axios.isAxiosError(err)) {
                const axiosError: AxiosError = err;
                if (axiosError.response?.status === 400) {
                    setError({ code: axiosError.response?.status, message: axiosError.response?.statusText || 'Something went wrong.'})
                } else if (axiosError.response?.status === 500) {
                    setError({ code: axiosError.response?.status, message: 'Internal Server Error' })
                }
            } else {
                setError({code: 500, message: 'Unknown error'})
            }
        } finally {
            setLoading(false)
        }
    }

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