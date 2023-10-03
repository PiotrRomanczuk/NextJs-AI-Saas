'use client';
import { useState, useEffect } from 'react';

import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Sidebar from '@/components/sidebar/sidebar';

const MobileSidebar = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button value='ghost' size='icon' className='md:hidden'>
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent side='left' className='p-0'>
				<Sidebar />
			</SheetContent>
		</Sheet>
	);
};

export default MobileSidebar;
