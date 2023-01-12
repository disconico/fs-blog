import AllPosts from '../../components/posts/AllPosts';
import { getAllPosts } from '../../lib/posts-util';
import { Fragment } from 'react';
import Head from 'next/head';

export default function AllPostsPage({ posts }) {
	return (
		<Fragment>
			<Head>
				<title>All Posts</title>
				<meta
					name='description'
					content='A list of all programming-related tutorials and posts!'
				/>
			</Head>
			<AllPosts posts={posts} />
		</Fragment>
	);
}

export const getStaticProps = async (ctx) => {
	const allPosts = getAllPosts();
	return {
		props: {
			posts: allPosts,
		},
		revalidate: 60,
	};
};
