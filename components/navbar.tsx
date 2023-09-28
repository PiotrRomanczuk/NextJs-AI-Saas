import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';
import { Menu } from 'lucide-react';
import { ModeToggle } from './modeToggle';

const Navbar = () => {
	return (
		<div className='flex items-center p-4'>
			<Button variant='ghost' size='icon' className='md:hidden'>
				<Menu />
			</Button>
			<div className='flex w-full justify-end'>
				<div className='flex gap-4'><ModeToggle />
				<UserButton afterSignOutUrl='/' />
			</div></div>
		</div>
	);
};

export default Navbar;
