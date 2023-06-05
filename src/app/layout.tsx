import Navbar from '@/components/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Js Imóveis App',
	description: 'Felipe Cardoso - lymeicontato@gmail.com',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`bg-black text-white ${inter.className}`}>
				{children}
				<Navbar />
			</body>
		</html>
	);
}
