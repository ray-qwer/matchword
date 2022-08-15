import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

// import theme provider
import MyThemeProvider from "./MyThemeProvider";

// atomize was built on styletron engine
const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
const engine = new Styletron();

function MyProvider() {
  return (
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <MyThemeProvider />
    </StyletronProvider>
  );
}

export default MyProvider;