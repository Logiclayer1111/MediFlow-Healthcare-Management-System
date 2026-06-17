import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '@/components/common/Layout';
import { AuthProvider } from '@/hooks/useAuth';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer />
        </Layout>
      </AuthProvider>
    </QueryClientProvider>
  );
}
