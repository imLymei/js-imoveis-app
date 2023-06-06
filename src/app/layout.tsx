'use client';

import './globals.css';
import { Session } from 'inspector';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import { createContext, useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Js Imóveis App',
	description: 'Felipe Cardoso - lymeicontato@gmail.com',
};

export const Supabase = createContext<Session | null>(null);

export const supabaseClient = createClient(
	'https://gouhtedxnldlkvfnmhlb.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvdWh0ZWR4bmxkbGt2Zm5taGxiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYwNDY5OTcsImV4cCI6MjAwMTYyMjk5N30.06yp_g6jtLyLQHuFI4CoLL0hvC26NrdzF0yrmV-DmQY',
	{ auth: { storage: localStorage } }
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const [session, setSession] = useState(null);

	const { push } = useRouter();

	useEffect(() => {
		//@ts-ignore
		supabaseClient.auth.getSession().then(({ data: { session } }) => {
			if (session) {
				//@ts-ignore
				setSession(session);
			} else {
				push('/login');
			}

			const {
				data: { subscription },
				//@ts-ignore
			} = supabaseClient.auth.onAuthStateChange((_event, session) => {
				//@ts-ignore
				setSession(session);
			});

			return () => subscription.unsubscribe();
		});
	}, []);

	return (
		<Supabase.Provider value={session}>
			<html lang='en'>
				<body className={`bg-black text-white pb-20 ${inter.className}`}>
					{children}
					<Navbar />
				</body>
			</html>
		</Supabase.Provider>
	);
}
