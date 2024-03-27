import type { Meta } from "@storybook/react";
import TableConfiguration from "../../components/TableConfiguration";
import { TableConfigurationDecorator} from "./TableConfigurationDecorator";

const meta: Meta<typeof TableConfiguration> = {
    title: 'TableConfiguration',
    component: TableConfiguration,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <TableConfigurationDecorator>
                <Story/>
            </TableConfigurationDecorator>
        )
    ]
};

export default meta;

export const Default = {}
