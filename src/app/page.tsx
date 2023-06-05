'use client';

import { Share } from '@capacitor/share';

export default function Home() {
	const share = async () => {
		await Share.share({
			title: 'Compartilhe meu aplicativo',
			text: 'Compartilhe por favor!',
			url: 'https://lymei.art',
			dialogTitle: 'Compartilhe com amigos',
		});
	};

	return (
		<main className='flex justify-center items-center h-screen'>
			<a onClick={() => share()}>Hi</a>
		</main>
	);
}
