import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';
import { Menu } from 'lucide-react';
import { ModeToggle } from './modeToggle';
import MobileSidebar from './sidebar/mobile-sidebar';

const Navbar = () => {
	return (
		<div className='flex items-center p-4'>
			<MobileSidebar />
			<div className='flex w-full justify-end'>
				<div className='flex gap-4'>
					<ModeToggle />
					<UserButton afterSignOutUrl='/' />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
