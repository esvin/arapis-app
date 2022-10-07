import languageDetector from '../lib/languageDetector'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Avatar, Button } from '@mui/material';

const LanSwitchLink = ({ locale, href }: { locale: string, href?: string }) => {
  const router = useRouter()

  let theHref = href || router.asPath
  let pName = router.pathname
  Object.keys(router.query).forEach((k: string) => {
    if (k === 'locale') {
      pName = pName.replace(`[${k}]`, locale)
      return
    }
    const val = router.query[k] as string;
    pName = pName.replace(`[${k}]`, val);
  })
  if (locale) {
    href = href ? `/${locale}${href}` : pName
  }

  return (
    <Link
      href={theHref}>
      <div>
        {locale === 'en' && <Button
          variant="text"
          color="secondary"
          startIcon={<Avatar src="/gt.png" />}
          sx={{ paddingTop: '15px'}}
          onClick={() => { languageDetector.cache!(locale); router.push('/', undefined, { shallow: true }); }} 
        ></Button>
        }
        {locale === 'es' && <Button
          variant="text"
          color="secondary"
          startIcon={<Avatar src="/usa.png"  />}
          sx={{ paddingTop: '15px'}}
          onClick={() => { languageDetector.cache!(locale); router.push('/', undefined, { shallow: true }); }} 
        ></Button>
        }
      </div>
    </Link>
  );
};

export default LanSwitchLink