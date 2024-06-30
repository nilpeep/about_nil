import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import ThemeWrapper from "./ThemeWrapper";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeWrapper>
      <App />
    </ThemeWrapper>
  </Provider>
);
