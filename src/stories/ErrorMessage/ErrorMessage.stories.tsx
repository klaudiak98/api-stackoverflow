import type { Meta } from '@storybook/react'
import ErrorMessage from "../../components/ErrorMessage";
import { ErrorMessageDecorator } from './ErrorMessageDecorator';

const meta: Meta<typeof ErrorMessage> = {
    title: 'ErrorMessage',
    component: ErrorMessage,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <ErrorMessageDecorator>
                <Story/>
            </ErrorMessageDecorator>

        )
    ]
};

export default meta;

export const Default = {}