import '@/styles/globals.css'
import Navbar from "@/components/Layout/Navbar";
import { SessionProvider } from "next-auth/react";
import { Provider } from 'react-redux';
import store from '@/redux/store';
import { Toaster } from 'react-hot-toast';
import FooterComponent from '@/components/UI/Footer';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <Navbar />
        <div className='w-11/12 mx-auto'>
          <Component {...pageProps} />
        </div>
        <FooterComponent></FooterComponent>
      </SessionProvider>
      <Toaster />
    </Provider>
  );
}
