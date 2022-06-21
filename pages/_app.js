import '../styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import {useRef,useEffect} from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import TakeMeToTop from "../Components/TakeMeToTop";
import TagManager from 'react-gtm-module'
import { SSRProvider } from 'react-bootstrap';
import  Head  from 'next/head';
import Chatra from "@chatra/chatra";

let config = {
  setup: {
    buttonSize: 75,
    colors: {
      buttonText: "#fff",
      buttonBg: "#ff3546",
    },
  },
  ID: "iDiZF7vAKWx5WJMEE",
};


const tagManagerArgs = {
  gtmId: 'GTM-PXVC3JB'
}
function MyApp({ Component, pageProps }) {
  const headScroll = useRef(null);

  const scrollToTop = ()=>{
    headScroll.current.scrollIntoView();
  }
  useEffect(()=>{
    TagManager.initialize(tagManagerArgs)

  },[])

  useEffect(()=>{
    Chatra("init", config);
Chatra("pageView");
  },[])

  return<SSRProvider>
  <div ref={headScroll}></div>
  <TakeMeToTop scrollToTop={scrollToTop} />
  <Head>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <meta name="google-site-verification" content="vuhaO9XfGfcZ3bGW9JF-f4sZMHIehAFbEooNyLFLoxA" />
  </Head>
<Header scrollToTop={scrollToTop}/>
<Component {...pageProps} />
<Footer/>
</SSRProvider> 
}

export default MyApp
