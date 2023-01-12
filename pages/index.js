import Head from 'next/head';
import Hero from '../components/home-page/Hero';
import FeaturedPosts from '../components/home-page/FeaturedPosts';
import { Fragment } from 'react';
import { getFeaturedPosts } from '../lib/posts-util';

function HomePage({ posts }) {
	return (
		<Fragment>
			<Head>
				<title>Nico Blog</title>
				<meta
					name='description'
					content='I post about programming and web development.'
				/>
			</Head>
			<Hero />
			<FeaturedPosts posts={posts} />
		</Fragment>
	);
}

export const getStaticProps = async (ctx) => {
	const featuredPosts = getFeaturedPosts();
	return {
		props: {
			posts: featuredPosts,
		},
		revalidate: 60,
	};
};

export default HomePage;
