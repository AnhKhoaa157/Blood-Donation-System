import { ConfigProvider, App as AntApp } from "antd";
import viVN from "antd/locale/vi_VN";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";
import { antdTheme } from "./theme";
import { queryClient } from "../lib/query/queryClient";
import { AuthProvider } from "../lib/auth/AuthContext";
import AppRoutes from "./routes";

export default function App() {
  return (
    <ConfigProvider theme={antdTheme} locale={viVN}>
      <AntApp>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <AuthProvider>
              <AppRoutes />
            </AuthProvider>
          </BrowserRouter>
          {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
        </QueryClientProvider>
      </AntApp>
    </ConfigProvider>
  );
}
