import { type AppProviderWrapper } from "@/types/appProviderWrapper.types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "@/store/redux/store";
import { Provider } from "react-redux";
import "@/i18n/i18n";
import { ThemeContextProvider } from "@/contexts/theme.provider";
export default function AppProviderWrapper({ children }: AppProviderWrapper) {
  const queryClient = new QueryClient(/* optional config */);
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ThemeContextProvider>
    </Provider>
  );
}
