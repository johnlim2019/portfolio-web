import { createTheme } from '@mantine/core';

export const theme = createTheme({
    fontFamily: 'Verdana, sans-serif, Open Sans',
    fontFamilyMonospace: 'Monaco, Courier, monospace',
    headings: { fontFamily: 'Greycliff CF, sans-serif' },
    primaryColor: 'dark',
    components: {
        Button: {
            defaultProps: {
                size: "lg",
            }
        },
    }
});