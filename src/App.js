import ThemeConfig from 'src/theme';
import GlobalStyles from 'src/theme/globalStyles';
import Router from 'src/routes';
import store from 'src/redux/Store';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <Provider store={store}>
      <ThemeConfig>
        <GlobalStyles>
          <QueryClientProvider client={queryClient}>
            <Router />
          </QueryClientProvider>
        </GlobalStyles>
      </ThemeConfig>
    </Provider>
  );
}

export default App;
