import Image from 'next/image';
import HeroBanner from '../components/utils/HeroBanner';
const testimonials = () => {
	return (
		<section className=' overflow-hidden'>
			<HeroBanner>
				<h1 className='pt-8 text-5xl font-bold'>Testimonials</h1>
			</HeroBanner>

			<div className='container mx-auto px-4 pt-20'>
				<div className='-mx-10 flex flex-wrap'>
					<div className='w-full border-gray-50 px-10 pb-16 lg:w-1/2 lg:border-b lg:border-r'>
						<div className='flex flex-wrap'>
							<div className='mb-8 w-full lg:mb-0 lg:w-1/3'>
								<div className='relative mr-10 h-28 w-28'>
									<img
										className='h-full w-full rounded-full object-cover object-top'
										src='https://images.pexels.com/photos/5325840/pexels-photo-5325840.jpeg?q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=940&amp;w=940'
										alt=''
									/>
									<img
										className='absolute bottom-0 right-0'
										src='zospace-assets/images/quote-blue.svg'
										alt=''
									/>
								</div>
							</div>
							<div className='w-full lg:w-2/3'>
								<h3 className='font-heading mb-4 text-2xl font-bold'>
									Zospace has helped us work
								</h3>
								<p className='mb-8 text-lg'>
									The point of using Lorem Ipsum is that it has a more-or-less
									normal. Vestibulum lectus ex, molestie id erat at,
									consectetur.
								</p>
								<p className='mb-8 text-lg text-gray-300 lg:mb-14'>
									Etiam finibus nibh enim, et tempus sem imperdiet eget. Ut
									blandit, nulla quis tincidunt dignissim, ipsum diam efficitur
									est, et iaculis.
								</p>
								<div className='mb-4 flex'>
									<img
										className='mr-1'
										src='zospace-assets/images/star-yellow.svg'
										alt=''
									/>
									<img
										className='mr-1'
										src='zospace-assets/images/star-yellow.svg'
										alt=''
									/>
									<img
										className='mr-1'
										src='zospace-assets/images/star-yellow.svg'
										alt=''
									/>
									<img
										className='mr-1'
										src='zospace-assets/images/star-yellow.svg'
										alt=''
									/>
									<img src='zospace-assets/images/star-light-gray.svg' alt='' />
								</div>
								<h4 className='mb-1 text-3xl font-bold'>Léa Herrera</h4>
								<p>Google</p>
							</div>
						</div>
					</div>
					<div className='w-full px-10 pb-16 lg:w-1/2 lg:border-b lg:border-gray-50'>
						<div className='flex flex-wrap'>
							<div className='mb-8 w-full lg:mb-0 lg:w-1/3'>
								<div className='relative mr-10 h-28 w-28'>
									<img
										className='h-full w-full rounded-full object-cover object-top'
										src='https://images.pexels.com/photos/5325893/pexels-photo-5325893.jpeg?q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=940&amp;w=940'
										alt=''
									/>
									<img
										className='absolute bottom-0 right-0'
										src='zospace-assets/images/quote-blue.svg'
										alt=''
									/>
								</div>
							</div>
							<div className='w-full lg:w-2/3'>
								<h3 className='font-heading mb-4 text-2xl font-bold'>
									Zospace has helped us work
								</h3>
								<p className='mb-8 text-lg'>
									The point of using Lorem Ipsum is that it has a more-or-less
									normal. Vestibulum lectus ex, molestie id erat at,
									consectetur.
								</p>
								<p className='mb-8 text-lg text-gray-300 lg:mb-14'>
									Etiam finibus nibh enim, et tempus sem imperdiet eget. Ut
									blandit, nulla quis tincidunt dignissim, ipsum diam efficitur
									est, et iaculis.
								</p>
								<div className='mb-4 flex'>
									<img
										className='mr-1'
										src='zospace-assets/images/star-yellow.svg'
										alt=''
									/>
									<img
										className='mr-1'
										src='zospace-assets/images/star-yellow.svg'
										alt=''
									/>
									<img
										className='mr-1'
										src='zospace-assets/images/star-yellow.svg'
										alt=''
									/>
									<img
										className='mr-1'
										src='zospace-assets/images/star-yellow.svg'
										alt=''
									/>
									<img src='zospace-assets/images/star-light-gray.svg' alt='' />
								</div>
								<h4 className='mb-1 text-3xl font-bold'>Harry Douglas</h4>
								<p>Asos</p>
							</div>
						</div>
					</div>
					<div className='w-full px-10 lg:w-1/2 lg:border-r lg:border-gray-50 lg:pt-16'>
						<div className='flex flex-wrap'>
							<div className='mb-8 w-full lg:mb-0 lg:w-1/3'>
								<div className='relative mr-10 h-28 w-28'>
									<img
										className='h-full w-full rounded-full object-cover object-top'
										src='https://images.pexels.com/photos/5325885/pexels-photo-5325885.jpeg?q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=940&amp;w=940'
										alt=''
									/>
									<img
										className='absolute bottom-0 right-0'
										src='zospace-assets/images/quote-blue.svg'
										alt=''
									/>
								</div>
							</div>
							<div className='w-full lg:w-2/3'>
								<h3 className='font-heading mb-4 text-2xl font-bold'>
									Zospace has helped us work
								</h3>
								<p className='mb-8 text-lg'>
									The point of using Lorem Ipsum is that it has a more-or-less
									normal. Vestibulum lectus ex, molestie id erat at,
									consectetur.
								</p>
								<p className='mb-8 text-lg text-gray-300 lg:mb-14'>
									Etiam finibus nibh enim, et tempus sem imperdiet eget. Ut
									blandit, nulla quis tincidunt dignissim, ipsum diam efficitur
									est, et iaculis.
								</p>
								<div className='mb-4 flex'>
									<img
										className='mr-1'
										src='zospace-assets/images/star-yellow.svg'
										alt=''
									/>
									<img
										className='mr-1'
										src='zospace-assets/images/star-yellow.svg'
										alt=''
									/>
									<img
										className='mr-1'
										src='zospace-assets/images/star-yellow.svg'
										alt=''
									/>
									<img
										className='mr-1'
										src='zospace-assets/images/star-yellow.svg'
										alt=''
									/>
									<img src='zospace-assets/images/star-light-gray.svg' alt='' />
								</div>
								<h4 className='mb-1 text-3xl font-bold'>Maxi Svennson</h4>
								<p>Tidal</p>
							</div>
						</div>
					</div>
					<div className='w-full px-10 pt-16 lg:w-1/2'>
						<div className='flex flex-wrap'>
							<div className='mb-8 w-full lg:mb-0 lg:w-1/3'>
								<div className='relative mr-10 h-28 w-28'>
									<img
										className='h-full w-full rounded-full object-cover object-top'
										src='https://images.pexels.com/photos/5325912/pexels-photo-5325912.jpeg?q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=940&amp;w=940'
										alt=''
									/>
									<img
										className='absolute bottom-0 right-0'
										src='zospace-assets/images/quote-blue.svg'
										alt=''
									/>
								</div>
							</div>
							<div className='w-full lg:w-2/3'>
								<h3 className='font-heading mb-4 text-2xl font-bold'>
									Zospace has helped us work
								</h3>
								<p className='mb-8 text-lg'>
									The point of using Lorem Ipsum is that it has a more-or-less
									normal. Vestibulum lectus ex, molestie id erat at,
									consectetur.
								</p>
								<p className='mb-8 text-lg text-gray-300 lg:mb-14'>
									Etiam finibus nibh enim, et tempus sem imperdiet eget. Ut
									blandit, nulla quis tincidunt dignissim, ipsum diam efficitur
									est, et iaculis.
								</p>
								<div className='mb-4 flex'>
									<img
										className='mr-1'
										src='zospace-assets/images/star-yellow.svg'
										alt=''
									/>
									<img
										className='mr-1'
										src='zospace-assets/images/star-yellow.svg'
										alt=''
									/>
									<img
										className='mr-1'
										src='zospace-assets/images/star-yellow.svg'
										alt=''
									/>
									<img
										className='mr-1'
										src='zospace-assets/images/star-yellow.svg'
										alt=''
									/>
									<img src='zospace-assets/images/star-light-gray.svg' alt='' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default testimonials;
