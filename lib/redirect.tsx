import { useEffect } from 'react'
import { useRouter } from 'next/router'
import languageDetector from './languageDetector'

export const useRedirect = (to: any = null) => {
  const router = useRouter()
  to = to || router.asPath

  // language detection
  useEffect(() => {
    const detectedLng = languageDetector.detect();
    console.log('Hi');
    if (to.startsWith('/' + detectedLng) && router.route === '/404') { // prevent endless loop
      router.replace('/' + detectedLng + router.route)
      return
    }

    languageDetector.cache!(detectedLng !== undefined ? detectedLng : 'es' );
    router.replace('/' + detectedLng + to)
  })

  return <></>;
};

export const Redirect = () => {
  useRedirect()
  return <></>;
}

// eslint-disable-next-line react/display-name
export const getRedirect = (to: any) => () => {
  useRedirect(to)
  return <></>
}