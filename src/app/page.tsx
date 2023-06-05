'use client';

import HomeHeader from '@/components/Home/HomeHeader';
import MainHouses from '@/components/Home/MainHouses';

export default function Home() {
	return (
		<main className='flex flex-col gap-10 p-2 items-center'>
			<HomeHeader />
			<MainHouses />
		</main>
	);
}
