import Image from 'next/image';
import classes from './Hero.module.css';

function Hero() {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image
					src='/images/site/nico.png'
					alt='An image showing Nico'
					width={300}
					height={300}
				/>
			</div>
			<h1>Hi, I&apos;m Nico</h1>
			<p>
				I blog about web development - especially frontend frameworks like
				Angular or React.
			</p>
		</section>
	);
}

export default Hero;
