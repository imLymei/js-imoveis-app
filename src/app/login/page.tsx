'use client';

import { Auth } from '@supabase/auth-ui-react';
import React, { useContext } from 'react';
import { Supabase, supabaseClient } from '../layout';
import { useRouter } from 'next/navigation';

function Login() {
	const { push } = useRouter();

	const session = useContext(Supabase);

	if (session) {
		push('/');
	}

	return (
		<div>
			<Auth supabaseClient={supabaseClient} redirectTo='/' />
		</div>
	);
}

export default Login;
