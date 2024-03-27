import TagsPerPageInput from "../../components/TagsPerPageInput";
import { TagsPerPageInputDecorator } from "./TagsPerPageInputDecoration";
import type { Meta } from "@storybook/react";
import { Paper } from "@mui/material";

const meta: Meta<typeof TagsPerPageInput> = {
    title: 'TagsPerPageInput',
    component: TagsPerPageInput,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <Paper sx={{ padding: 3 }}>
                <TagsPerPageInputDecorator>
                    <Story/>
                </TagsPerPageInputDecorator>
            </Paper>
        )
    ]
};

export default meta;

export const Default = {}
