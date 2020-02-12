import fetch from 'isomorphic-unfetch';
import Layout from '../../components/MyLayout';
import Meta from '../../components/Meta';

const Post = ({ show, seo }) => {
  console.log(seo);

  return (
    <Layout>
      <Meta
        title={seo.metaTitle}
        description={seo.metaDescription}
      />
      <h1>{show.name}</h1>
      <p>{show.summary.replace(/<[/]?[pb]>/g, '')}</p>
      {show.image ? <img src={show.image.medium} /> : null}
    </Layout>
  )
};

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);
  const { name, summary } = show;
  console.log({ name, summary });

  return {
    show,
    seo: {
      metaTitle: name,
      metaDescription: summary
    }
  };
};

export default Post;