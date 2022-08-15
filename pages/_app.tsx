import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from "../auth";
import supabase from "../supabase.config";
import Header from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider supabase={supabase}>
      <Header />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp
