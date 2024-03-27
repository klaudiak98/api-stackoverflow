import type { Meta } from '@storybook/react'
import { Paper } from '@mui/material';
import Pagination from "../../components/Pagination";
import { PaginationDecorator } from './PaginationDecorator'

const meta: Meta<typeof Pagination> = {
    title: 'Pagination',
    component: Pagination,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <Paper sx={{ padding: 3 }}>
                <PaginationDecorator>
                    <Story/>
                </PaginationDecorator>
            </Paper>

        )
    ]
};

export default meta;

export const Default = {}