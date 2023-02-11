import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#F3F3F3',
                    color: 'black'
                }
            },
            defaultProps: {
                position: 'static'
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 10
                }
            },
            defaultProps: {
                raised: true
            }
        },
        MuiCardHeader: {
            styleOverrides: {  
                subheader: {
                    color: 'black'
                }
            }
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    justifyContent: 'end'
                }
            }
        }
    },
    typography: {
        fontFamily: 'Poppins'
    }
});

export default theme;