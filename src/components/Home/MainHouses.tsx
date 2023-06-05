import { houses } from '@/utils/constUtils';
import Image from 'next/image';

function MainHouses() {
	return (
		<div className='flex flex-col justify-center items-center gap-8'>
			<h2 className='text-2xl font-semibold'>Principais Casas</h2>
			<div className='flex gap-4 w-screen snap-x overflow-x-auto px-4'>
				{houses.map((house, index) => (
					<div
						key={index}
						className='w-full flex-none snap-center overflow-hidden border border-secondary-200 rounded-xl'>
						<div className='relative aspect-[8/6] w-full'>
							<Image src={house.image} alt='House Image' fill className='object-cover object-bottom' />
						</div>
						<div className='flex flex-col h-64 p-4 bg-secondary-300/50'>
							<p>{house.title}</p>
							<p className='text-lg font-bold text-secondary-100 my-2'>R$: {house.price}</p>
							<p className='text-white/50'>{house.address}</p>
							<p className='text-white/50'>{house.city}</p>
							<p className='text-white/50 mt-2 line-clamp-2'>{house.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default MainHouses;
