import Link from 'next/link';
import { IconType } from 'react-icons';

function NavbarIcons({
	pathName,
	link,
	LineIcon,
	FillIcon,
	iconSizes,
	title,
}: {
	pathName: string;
	link: string;
	LineIcon: IconType;
	FillIcon: IconType;
	iconSizes: number;
	title: string;
}) {
	const isPath = pathName == link.split('/')[1];

	return (
		<Link draggable={false} href={link} className='relative group p-4'>
			<div className='relative flex flex-col items-center justify-center text-primary-200'>
				{isPath ? <FillIcon size={iconSizes} /> : <LineIcon size={iconSizes} />}
				<p className='text-center text-xs'>{title}</p>
				<div
					className={`absolute w-full h-1 -bottom-2 bg-primary-200 rounded-lg transition ${
						isPath ? 'scale-x-100' : 'scale-x-0'
					}`}
				/>
			</div>
			<div className='absolute left-1/2 top-0 -translate-x-1/2 h-20 w-28 transition delay-0 group-active:delay-500 duration-100 group-active:duration-300 bg-white/10 rounded-full origin-center scale-0 group-active:scale-100 -z-10' />
		</Link>
	);
}

export default NavbarIcons;
