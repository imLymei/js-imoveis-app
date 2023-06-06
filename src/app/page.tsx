'use client';

import HomeHeader from '@/components/Home/HomeHeader';
import MainHouses from '@/components/Home/MainHouses';
import { useContext } from 'react';
import { Supabase } from './layout';

export default function Home() {
	const session = useContext(Supabase);

	return (
		<main className='flex flex-col gap-10 p-2 items-center'>
			<HomeHeader />
			<MainHouses />
		</main>
	);
}
