import type { NextPage } from 'next';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic';

const Blog: NextPage = () => {

  return (<>News</>);
}

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };
export default Blog;