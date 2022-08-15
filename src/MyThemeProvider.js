import { ThemeProvider } from "atomize";
import Main from './pages/main';
const theme = {};

function MyThemeProvider(){
    return(
        <ThemeProvider theme={theme}>
            <Main />
        </ThemeProvider>
    )
}

export default MyThemeProvider;