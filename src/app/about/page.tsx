import Header from '../components/header';
import Footer from '../components/footer';
import Image from 'next/image';

export default function About() {
	return (
		<div>
			<Header />
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh',
					backgroundColor: '#f0f0f0',
				}}>
				<div
					style={{
						width: '60%',
						backgroundColor: '#ff6347',
						padding: '20px',
						borderRadius: '10px',
						boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
					}}>
					<div style={{ textAlign: 'center' }}>
						<h1 style={{ color: '#fff', marginBottom: '10px' }}>Shihiro TAKEDA</h1>
						<p style={{ color: '#fff' }}>Tokyo, Japan</p>
					</div>
					<div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
						<a
							href='https://twitter.com/shiro_shihi'
							target='_blank'
							rel='noopener noreferrer'>
							<Image src={'/twitter-icon.png'} alt='Twitter' width={40} height={40} />
						</a>
						<a
							href='https://instagram.com/shiro_shihi'
							target='_blank'
							rel='noopener noreferrer'>
							<Image src={'/instagram-icon.png'} alt='Instagram' width={40} height={40} />
						</a>
						<a href='https://zenn.dev/shihiro' target='_blank' rel='noopener noreferrer'>
							<Image src='/zenn-icon.png' alt='Zenn' width={40} height={40} />
						</a>
					</div>
					<div style={{ marginTop: '20px' }}>
						<h2 style={{ color: '#fff' }}>About Me</h2>
						<p style={{ color: '#fff' }}>
							I'm a web developer based in Tokyo, Japan. I'm interested in web development,
							especially in front-end development. I'm also interested in UI/UX design and
							web accessibility.
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
