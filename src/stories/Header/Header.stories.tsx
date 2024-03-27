import Header from "../../components/Header";
import type { Meta } from '@storybook/react'
import { Paper } from "@mui/material";

const meta: Meta<typeof Header> = {
    title: 'Header',
    component: Header,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <Paper sx={{padding: 3}}>
                <Story/>
            </Paper>
        )
    ]
};

export default meta;

export const Default = {
    args: {
        title: 'StackOverflow API'
    }
}