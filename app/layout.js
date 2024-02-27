import { Outfit } from 'next/font/google';

import Header from '@/components/header';
import Footer from '@/components/footer';
import './globals.css';

const outfit = Outfit({
	weight: ['300', '400', '600'],
	subsets: ['latin'],
	display: 'swap',
});

export const metadata = {
	title: 'Frontend Mentor | NFT Preview Card Component | Next.js - Sass',
	description: 'Frontend Mentor - NFT preview card component solution.',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={outfit.className}>
				<Header />
				<main className="main">
					<div className="container">{children}</div>
				</main>
				<Footer />
			</body>
		</html>
	);
}
