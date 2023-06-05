'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<main className='flex flex-col p-2 items-center'>
			<Link
				href={'https://www.jsimoveispraiagrande.com.br'}
				target='_blank'
				className='absolute left-2 top-2 h-10 w-10'>
				<Image src={'/images/js-logo.png'} alt='js logo' fill className='object-contain' />
			</Link>
			<h1 className='text-4xl font-bold'>Bom Dia! 👋</h1>
		</main>
	);
}
