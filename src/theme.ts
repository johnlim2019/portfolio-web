import { Button, createTheme } from '@mantine/core';

export const theme = createTheme({
    fontFamily: 'Verdana, sans-serif, Open Sans',
    fontFamilyMonospace: 'Monaco, Courier, monospace',
    headings: { fontFamily: 'Helvetica, Tahoma, sans-serif' },
    colors: {
        'cyan': ['#E2F7F6', '#b6e2e0', '#8ad0cd', '#6dc5c0', '#26A6A2', '#229692', '#16585F', '#1D4947', '#173A36', '#060F0E'],
    },
    primaryColor: "gray",
    components: {
        Button: Button.extend({
            styles: {
                inner: {
                    fontFamily: 'Helvetica, Tahoma, sans-serif',
                    fontWeight: 300,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                }
            }
        })

    }
});