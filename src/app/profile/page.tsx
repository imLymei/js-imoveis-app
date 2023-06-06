'use client';

import { UserType } from '@/utils/types';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { supabaseClient } from '../layout';
import { db } from '../api/users/route';
import { users } from '@/db/schema';

function Profile() {
	const [user, setUser] = useState<UserType>();

	useEffect(() => {
		supabaseClient.auth.getUser().then(({ data: { user } }) => {
			//@ts-ignore
			console.log(user);
			axios.get(`/api/users/${user?.email}`).then((promise) => {
				console.log(promise);
				if (!promise.data.response) {
					console.log('a');
				}
			});
		});
	}, []);

	return <div className='flex justify-center items-center h-full'>Bem vindo {user?.fullName}</div>;
}

export default Profile;
