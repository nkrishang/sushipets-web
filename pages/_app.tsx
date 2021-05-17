import type { AppProps /*, AppContext */ } from 'next/app'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { MetaData } from '../components/MetaData';

export default function MyApp({ Component, pageProps }: AppProps) {

    return (
        <>
            <MetaData />
            <Component {...pageProps} />
        </>
    )
}
