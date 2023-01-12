import PostItem from './PostItem';
import classes from './PostItem.module.css';

function PostsGrid(props) {
	const { posts } = props;
	console.log([posts]);

	return (
		<ul className={classes.grid}>
			{posts.map((post, i) => (
				<PostItem key={i} post={post} />
			))}
		</ul>
	);
}

export default PostsGrid;
