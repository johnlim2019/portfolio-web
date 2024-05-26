import { Button, createTheme } from '@mantine/core';

export const theme = createTheme({
    fontFamily: 'Verdana, sans-serif, Open Sans',
    fontFamilyMonospace: 'Monaco, Courier, monospace',
    headings: { fontFamily: 'Helvetica, Tahoma, sans-serif' },
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