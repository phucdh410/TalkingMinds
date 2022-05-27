import Document, { Html, Main, NextScript, Head } from 'next/document';
// import Head from 'next/head';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="vi">
				<Head>
					<link
						rel="preload"
						href="/fonts/Open_Sans/OpenSans-Regular.ttf"
						as="font"
						type="font/ttf"
						crossOrigin="anonymous"
					/>
					<link
						rel="preload"
						href="/fonts/Open_Sans/OpenSans-Medium.ttf"
						as="font"
						type="font/ttf"
						crossOrigin="anonymous"
					/>
					<link
						rel="preload"
						href="/fonts/Open_Sans/OpenSans-SemiBold.ttf"
						as="font"
						type="font/ttf"
						crossOrigin="anonymous"
					/>
					<link
						rel="preload"
						href="/fonts/Open_Sans/OpenSans-Bold.ttf"
						as="font"
						type="font/ttf"
						crossOrigin="anonymous"
					/>
					<link
						rel="preload"
						href="/fonts/Open_Sans/OpenSans-ExtraBold.ttf"
						as="font"
						type="font/ttf"
						crossOrigin="anonymous"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
