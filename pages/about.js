import React from 'react';
import Image from 'next/image';
import HeroBanner from '../components/utils/HeroBanner';
const about = () => {
	return (
		<div className='relative'>
			<HeroBanner>
				<h1 className='pt-8 text-5xl font-bold'>About</h1>
			</HeroBanner>

			<section className='py-20 dark:bg-neutral-800 2xl:py-40'>
				<div className='container mx-auto px-4'>
					<h2 className='font-heading mb-20 text-5xl font-bold text-white'>
						Our Team
					</h2>
					<div className='-mx-4 mb-20 flex flex-wrap'>
						<div className='mb-10 w-full px-4 md:w-1/2 lg:w-1/3'>
							<div className='flex items-center'>
								<img
									className='h-48 2xl:h-64'
									src='https://images.pexels.com/photos/5325840/pexels-photo-5325840.jpeg?q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=450'
									alt=''
								/>
								<div className='pl-10'>
									<h3 className='font-heading mb-4 text-3xl font-bold text-white'>
										Lea Herrera
									</h3>
									<p className='mb-10 text-lg font-bold text-white'>
										UX Designer
									</p>
									<a className='inline-block h-12 w-12' href='#'>
										<img
											className='h-12'
											src='zospace-assets/logos/twitter.svg'
											alt=''
										/>
									</a>
								</div>
							</div>
						</div>
						<div className='mb-10 w-full px-4 md:w-1/2 lg:w-1/3'>
							<div className='flex items-center'>
								<img
									className='h-48 2xl:h-64'
									src='https://images.pexels.com/photos/5325885/pexels-photo-5325885.jpeg?q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=450'
									alt=''
								/>
								<div className='pl-10'>
									<h3 className='font-heading mb-4 text-3xl font-bold text-white'>
										Maxi Svennson
									</h3>
									<p className='mb-10 text-lg font-bold text-white'>
										Social Media
									</p>
									<a className='mr-2 inline-block h-12 w-12' href='#'>
										<img
											className='h-12'
											src='zospace-assets/logos/instagram.svg'
											alt=''
										/>
									</a>
									<a className='inline-block h-12 w-12' href='#'>
										<img
											className='h-12'
											src='zospace-assets/logos/twitter.svg'
											alt=''
										/>
									</a>
								</div>
							</div>
						</div>
						<div className='mb-10 w-full px-4 md:w-1/2 lg:w-1/3'>
							<div className='flex items-center'>
								<img
									className='h-48 2xl:h-64'
									src='https://images.unsplash.com/photo-1615803795804-06a0c2a0030e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80'
									alt=''
								/>
								<div className='pl-10'>
									<h3 className='font-heading mb-4 text-3xl font-bold text-white'>
										Oliver Haller
									</h3>
									<p className='mb-10 text-lg font-bold text-white'>
										Co-Founder
									</p>
									<a className='inline-block h-12 w-12' href='#'>
										<img
											className='h-12'
											src='zospace-assets/logos/instagram.svg'
											alt=''
										/>
									</a>
								</div>
							</div>
						</div>
						<div className='mb-10 w-full px-4 md:w-1/2 lg:mb-0 lg:w-1/3'>
							<div className='flex items-center'>
								<img
									className='h-48 2xl:h-64'
									src='https://images.pexels.com/photos/5325925/pexels-photo-5325925.jpeg?q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=450'
									alt=''
								/>
								<div className='pl-10'>
									<h3 className='font-heading mb-4 text-3xl font-bold text-white'>
										Ade Baldock
									</h3>
									<p className='mb-10 text-lg font-bold text-white'>
										UX Designer
									</p>
									<a className='inline-block h-12 w-12' href='#'>
										<img
											className='h-12'
											src='zospace-assets/logos/facebook.svg'
											alt=''
										/>
									</a>
								</div>
							</div>
						</div>
						<div className='mb-10 w-full px-4 md:mb-0 md:w-1/2 lg:w-1/3'>
							<div className='flex items-center'>
								<img
									className='h-48 2xl:h-64'
									src='https://images.pexels.com/photos/4316722/pexels-photo-4316722.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500'
									alt=''
								/>
								<div className='pl-10'>
									<h3 className='font-heading mb-4 text-3xl font-bold text-white'>
										Elena Norwood
									</h3>
									<p className='mb-10 text-lg font-bold text-white'>
										Social Media
									</p>
									<a className='inline-block h-12 w-12' href='#'>
										<img
											className='h-12'
											src='zospace-assets/logos/twitter.svg'
											alt=''
										/>
									</a>
								</div>
							</div>
						</div>
						<div className='w-full px-4 md:w-1/2 lg:w-1/3'>
							<div className='flex items-center'>
								<img
									className='h-48 2xl:h-64'
									src='https://images.pexels.com/photos/5325894/pexels-photo-5325894.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500'
									alt=''
								/>
								<div className='pl-10'>
									<h3 className='font-heading mb-4 text-3xl font-bold text-white'>
										Jesse Warne
									</h3>
									<p className='mb-10 text-lg font-bold text-white'>
										Co-Founder
									</p>
									<a className='inline-block h-12 w-12' href='#'>
										<img
											className='h-12'
											src='zospace-assets/logos/instagram.svg'
											alt=''
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default about;
