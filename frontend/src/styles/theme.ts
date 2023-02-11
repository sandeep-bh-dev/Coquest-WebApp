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