import Home from "./components/Navigation/Home";
import GlobalStyles from "@mui/material/GlobalStyles";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#ECE8DD",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          body: { backgroundColor: "#ECE8DD" },
        }}
      />
      <Home />
    </ThemeProvider>
  );
}

export default App;
