'use client';

import { usePathname } from 'next/navigation';
import { BsFillGearFill, BsGear, BsHouse, BsHouseFill, BsHouses, BsFillHousesFill } from 'react-icons/bs';
import { HiOutlineUserCircle, HiUserCircle } from 'react-icons/hi';
import NavbarIcons from './Navbar/NavbarIcons';

function Navbar() {
	const pathName = usePathname().split('/')[1];
	const iconSizes = 25;

	return (
		<nav className='fixed bottom-0 grid grid-cols-4 justify-evenly overflow-hidden px-5 w-full h-20 bg-neutral-900 rounded-t-3xl'>
			<NavbarIcons
				pathName={pathName}
				link='/'
				FillIcon={BsHouseFill}
				LineIcon={BsHouse}
				iconSizes={iconSizes}
				title='Início'
			/>
			<NavbarIcons
				pathName={pathName}
				link='/houses'
				FillIcon={BsFillHousesFill}
				LineIcon={BsHouses}
				iconSizes={iconSizes}
				title='Casas'
			/>
			<NavbarIcons
				pathName={pathName}
				link='/profile'
				FillIcon={HiUserCircle}
				LineIcon={HiOutlineUserCircle}
				iconSizes={iconSizes}
				title='Perfil'
			/>
			<NavbarIcons
				pathName={pathName}
				link='/options'
				FillIcon={BsFillGearFill}
				LineIcon={BsGear}
				iconSizes={iconSizes}
				title='Ajustes'
			/>
		</nav>
	);
}

export default Navbar;
