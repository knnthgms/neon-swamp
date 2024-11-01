import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "./theme/ThemeProvider";
import AppLayout from "./common/AppLayout";
import i18n from "./translation";

const App = () => {
  return (
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider>
          <AppLayout />
        </ThemeProvider>
      </I18nextProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
