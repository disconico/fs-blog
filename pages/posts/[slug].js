import PostContent from '../../components/posts/post-detail/PostContent';
import Head from 'next/head';
import { Fragment } from 'react';
import { getPostData, getPostsFiles } from '../../lib/posts-util';

export default function PostDetailPage({ postData }) {
	return (
		<Fragment>
			\{' '}
			<Head>
				<title>{postData.title}</title>
				<meta name='description' content={postData.excerpt} />
			</Head>
			<PostContent postData={postData} />
		</Fragment>
	);
}

export const getStaticProps = async (ctx) => {
	const { params } = ctx;
	const { slug } = params;

	const postData = getPostData(slug);

	return {
		props: {
			postData,
		},
		revalidate: 600,
	};
};

export const getStaticPaths = async () => {
	const postFilenames = getPostsFiles();

	const slugs = postFilenames.map((filename) => filename.replace(/\.md$/, ''));

	return {
		paths: slugs.map((slug) => ({
			params: { slug },
		})),
		fallback: 'blocking',
	};
};
