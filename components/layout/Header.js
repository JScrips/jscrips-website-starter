import { BsMoonStarsFill } from 'react-icons/bs';
import { FaSun } from 'react-icons/fa';
import { GiJigsawPiece } from 'react-icons/gi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import MobileNav from '../utils/MobileNav';
import Link from 'next/link';
const Header = ({ setThemeDark, useDark }) => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<nav className='sticky top-0 z-10 flex items-center justify-around bg-teal-700 p-6 text-white dark:bg-neutral-900 dark:text-white'>
			<div className='flex items-center text-3xl font-semibold'>
				<span>J</span>
				<GiJigsawPiece />
				<span>Scrips</span>
			</div>
			<button
				className='lg:hidden'
				aria-label='Toggle Menu'
				onClick={() => setShowMenu((prevState) => !prevState)}>
				<GiHamburgerMenu className='text-3xl' />
			</button>
			<div className='absolute top-0 right-0 w-1/2'>
				<AnimatePresence>
					{showMenu && (
						<MobileNav
							setShowMenu={setShowMenu}
							setThemeDark={setThemeDark}
							useDark={useDark}
						/>
					)}
				</AnimatePresence>
			</div>
			<nav className='hidden w-7/12 lg:block'>
				<ul className='flex w-full items-center justify-around text-lg font-bold'>
					<li className='rounded-lg py-2 px-8 hover:cursor-pointer hover:bg-neutral-400'>
						<Link href='/'>
							<a> Home </a>
						</Link>
					</li>
					<li className='rounded-lg py-2 px-8 hover:cursor-pointer hover:bg-neutral-400'>
						<Link href='/about'>
							<a> About </a>
						</Link>
					</li>
					<li className='rounded-lg py-2 px-8 hover:cursor-pointer hover:bg-neutral-400'>
						<Link href='/#services'>
							<a> Services </a>
						</Link>
					</li>
					<li className='rounded-lg py-2 px-8 hover:cursor-pointer hover:bg-neutral-400'>
						<Link href='/testimonials'>
							<a> Testimonials </a>
						</Link>
					</li>
					<li className='rounded-lg py-2 px-8 hover:cursor-pointer hover:bg-neutral-400'>
						<Link href='/contact'>
							<a> Contact </a>
						</Link>
					</li>
					<li>
						{' '}
						<button
							className='text-2xl'
							aria-label='Toggle Dark Mode'
							onClick={() => setThemeDark((prevTheme) => !prevTheme)}>
							{useDark ? (
								<BsMoonStarsFill className='text-blue-700' />
							) : (
								<FaSun className='text-orange-600' />
							)}
						</button>
					</li>
				</ul>
			</nav>
			<div className='hidden lg:block'></div>
		</nav>
	);
};

export default Header;
