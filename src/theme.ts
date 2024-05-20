import { createTheme } from '@mantine/core';

export const theme = createTheme({
    fontFamily: 'Verdana, sans-serif',
    fontFamilyMonospace: 'Monaco, Courier, monospace',
    headings: { fontFamily: 'Greycliff CF, sans-serif' },
    primaryColor: "dark",
    primaryShade: 9,
    components: {
        Button: {
            defaultProps: {
                size: "lg",
            }
        },
    }
});