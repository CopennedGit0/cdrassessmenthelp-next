import '../styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import {useRef,useEffect} from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import TakeMeToTop from "../Components/TakeMeToTop";
import TagManager from 'react-gtm-module'
import { SSRProvider } from 'react-bootstrap';
import  Head  from 'next/head';


function MyApp({ Component, pageProps }) {
  const headScroll = useRef(null);

  const scrollToTop = ()=>{
    headScroll.current.scrollIntoView();
  }
  return<SSRProvider>
  <div ref={headScroll}></div>
  <TakeMeToTop scrollToTop={scrollToTop} />
  <Head>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  </Head>
<Header scrollToTop={scrollToTop}/>
<Component {...pageProps} />
<Footer/>
</SSRProvider> 
}

export default MyApp
