'use client';

import HomeHeader from '@/components/Home/HomeHeader';
import MainHouses from '@/components/Home/MainHouses';
import { Auth } from '@supabase/auth-ui-react';
import { createClient } from '@supabase/supabase-js';
import { useContext, useEffect, useState } from 'react';
import { Supabase, supabaseClient } from './layout';

export default function Home() {
	const session = useContext(Supabase);

	useEffect(() => {}, []);

	return (
		<main className='flex flex-col gap-10 p-2 items-center'>
			{session ? <div>Welcome Back!</div> : <Auth supabaseClient={supabaseClient} />}
			<HomeHeader />
			<MainHouses />
		</main>
	);
}
