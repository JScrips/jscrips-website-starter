import Image from 'next/dist/client/image';

const HeroBanner = ({ children }) => {
	return (
		<div className='relative min-h-[50vh]'>
			<Image
				src='/BGIMGs/HeaderBG.png'
				objectFit='cover'
				objectPosition='center'
				alt='League Of Legends Cover'
				layout='fill'
				quality={100}
				className=' brightness-50 filter'
			/>
			<main className='z-1 absolute inset-0 text-3xl text-white'>
				{children}
			</main>
		</div>
	);
};

export default HeroBanner;
