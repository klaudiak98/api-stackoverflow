import { ThemeProvider } from "@emotion/react";
import type { Preview } from "@storybook/react";
import { darkTheme } from '../src/themes/darkTheme'
import React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={darkTheme}>
        <Story/>
      </ThemeProvider>
    )
  ]
};

export default preview;
