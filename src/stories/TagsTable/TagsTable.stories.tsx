import type { Meta, StoryObj } from "@storybook/react";
import TagsTable from "../../components/TagsTable";
import { TagsTableLoadedDecorator, TagsTableLoadingDecorator, TagsTableNoDataDecorator } from "./TagsTableDecorator";

const meta: Meta<typeof TagsTable> = {
    title: 'TagsTable',
    component: TagsTable,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TagsTable>

export const LoadedData: Story = {
    decorators: [
        (Story) => (
            <TagsTableLoadedDecorator>
                <Story/>
            </TagsTableLoadedDecorator>
        )
    ]
}

export const NoData: Story = {
    decorators: [
        (Story) => (
            <TagsTableNoDataDecorator>
                <Story/>
            </TagsTableNoDataDecorator>
        )
    ]
}

export const Loading: Story = {
    decorators: [
        (Story) => (
            <TagsTableLoadingDecorator>
                <Story/>
            </TagsTableLoadingDecorator>
        )
    ]
}
