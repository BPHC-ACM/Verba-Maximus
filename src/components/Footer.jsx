import React from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { IconBrandFacebook, IconBrandInstagram } from '@tabler/icons-react';

const Footer = () => {
	const year = dayjs().year();

	return (
		<div className='FOOTER'>
			<div className='socials'>
				<Link
					to='https://www.instagram.com/vm.bphc'
					rel='noopener'
					target='_blank'
					aria-label='Visit the Verba Maximus Instagram page'
				>
					<IconBrandInstagram size={24} color='#e2ddc5' />
				</Link>
				<Link
					to='https://www.facebook.com/verbamaximus'
					rel='noopener'
					target='_blank'
					aria-label='Visit the Verba Maximus Facebook page'
				>
					<IconBrandFacebook size={24} color='#e2ddc5' />
				</Link>
			</div>
			<div className='copyright'>{`© Verba Maximus ${year}`}</div>
		</div>
	);
};

export default Footer;
