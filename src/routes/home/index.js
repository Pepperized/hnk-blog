import { h } from "preact";
import { useEffect } from 'preact/hooks';
import style from "./style";
import phosMp4 from '../../assets/media/phos.mp4'
import phosWebm from '../../assets/media/phos.webm'
import { Link } from 'preact-router/match';

const Home = () => {

	/**
	 * Netlify CMS's accept invite link land on home page.
	 * This redirection takes it to the right place(/admin).
	 */

	useEffect(() => {
		if (window !== undefined && window.location.href.includes('#invite_token')) {
			const { href } = window.location;
			window.location.href= `${href.substring(0, href.indexOf('#'))}admin${href.substring(href.indexOf('#'))}`;
		}
	},[]);

	return (
		<div style={{overflow: 'hidden', position: 'relative', height: '100vh'}}>
			<video autoPlay muted loop id="bg-video">
				<source src={phosWebm} type="video/webm"/>
				<source src={phosMp4} type="video/mp4"/>
			</video>
			<div style={{position: 'absolute', width: '100%', height: '100%', top: 0, right: 0, left: 0, bottom: 0}}>
				<div style={{display: 'flex', left: 0, right: 0, zIndex: 10 }}>
					<div style={{flexGrow: 1}} />
					<div style={{flexGrow: 0, color: 'white', borderLeft: '1px solid white', padding: '8px', borderBottom: '1px solid white', borderRight: '1px solid white', textAlign: 'center', width: '30%', height: '30%', backgroundColor: '#444', borderRadius: '0 0 9999px 9999px'}}>
						<div style={{fontSize: '36px', fontWeight: '100'}}>facets</div>
						<div style={{fontWeight: '300'}}>An HnK blog</div>
					</div>
					
					<div style={{flexGrow: 1}} />
				</div>
				<div style={{display: 'flex', marginTop: '20px', top: 0, left: 0, right: 0, zIndex: 10 }}>
					<div style={{flexGrow: 1}} />
					<div style={{flexGrow: 0, color: 'white', padding: '8px', border: '1px solid white', textAlign: 'center', width: '15%', height: '30%', backgroundColor: '#444', borderRadius: '0 0 9999px 9999px'}}>
					<Link href="/blogs"><div style={{fontSize: '36px', fontWeight: '100', color: 'white'}}>Enter</div></Link>
					</div>
					<div style={{flexGrow: 1}} />
				</div>
				
			</div>
		</div>
	);
};

export default Home;
