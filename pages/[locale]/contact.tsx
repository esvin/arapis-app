import type { NextPage } from 'next';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic';
import MapGoogle from '../../components/MapGoogle';

const Contact: NextPage = () => {

  return (<MapGoogle/>);
}

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };
export default Contact;