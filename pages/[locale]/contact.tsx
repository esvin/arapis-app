import type { NextPage } from 'next';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic';

const Contact: NextPage = () => {

  return (<>Contact Us</>);
}

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };
export default Contact;