import Image from 'next/image';
import Link from 'next/link';
import { IoNotificationsOutline } from 'react-icons/io5';
import { iconSizesMedium } from '@/utils/constUtils';

function HomeHeader() {
	return (
		<div className='grid grid-cols-4 w-full px-4 justify-center items-center'>
			<Link href={'https://www.jsimoveispraiagrande.com.br'} target='_blank' className='relative h-10 w-10'>
				<Image src={'/images/js-logo.png'} alt='js logo' fill className='object-contain' />
			</Link>
			<h1 className='text-3xl font-bold text-center col-span-2'>Bom Dia!👋</h1>
			<div className='flex justify-end items-center'>
				<IoNotificationsOutline size={iconSizesMedium} />
			</div>
		</div>
	);
}

export default HomeHeader;
