import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = () => (
	<header class={style.header}>
		<Link href="/"><h1>facets</h1></Link>
		<nav>
			<Link activeClassName={style.active} href="/blogs">Blogs</Link>
		</nav>
	</header>
);

export default Header;
