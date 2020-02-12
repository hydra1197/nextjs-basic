import Layout from '../components/MyLayout.js';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import fetch from 'isomorphic-unfetch';
import './style.scss';

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

const PostLink = ({ post }) => (
  <li>
    <Link href="/p/[id]" as={`/p/${post.id}`}>
      <a>{post.name}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: 'Arial';
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
);

const Index = ({ shows, userAgent }) => {
  const { query } = useRouter();
  const { data, error } = useSWR(
    `/api/randomQuote${query.author ? '?author=' + query.author : ''}`,
    fetcher
  );

  const author = data?.author;
  let quote = data?.quote;

  if (!data) quote = 'Loading...';
  if (error) quote = 'Failed to fetch the quote.';

  return (
    <Layout>
      <h1>Batman TV Shows</h1>
        {userAgent}

      <ul>
        {shows.map(post => (
          <PostLink key={post.id} post={post} />
        ))}
      </ul>

      <main className="center">
        <div className={'quote'}>{quote}</div>
        {author && <span className="author">- {author}</span>}
      </main>

    </Layout>
  )
};

Index.getInitialProps = async function({ req }) {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show),
      userAgent
  };
};

export default Index;