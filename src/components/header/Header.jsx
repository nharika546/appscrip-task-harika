'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import headerTopLogo from '../../../public/icons/nav-top-logo.svg'
import Logo from '../../../public/icons/company-logo.svg'
import ArrowDown from '../../../public/icons/left-arrow-logo.svg'
import ProfileIcon from '../../../public/icons/profile-logo.svg'
import SearchIcon from '../../../public/icons/search-logo.svg'
import HeartIcon from '../../../public/icons/heart-logo.svg'
import ShoppingbagIcon from '../../../public/icons/shopping-bag-logo.svg'
import MenuBarIcon from '../../../public/icons/menu-bar.svg'
import CloseBarIcon from '../../../public/icons/close.svg'

import { Icon } from '@iconify/react'
import './Header.css'


const Header = () => {

	const navList = [
		"home",
		"shop",
		"skills",
		"about",
		"contact us"
	]
	const [sideNavOpen, setSideNavOpen] =  useState(false);
	return (
		<header>
			<section className="header-top-section">
				<div className="header-top-item mobile-none">
					<Image height={16} width={16} src={headerTopLogo} alt="headerTopLogo" />
					<p>Lorem ipsum dolor</p>
				</div>
				<div className='header-top-item mobile-none'>
					<Image height={16} width={16} src={headerTopLogo} alt="headerTopLogo" />
					<p>Lorem ipsum dolor</p>
				</div>
				<div className='header-top-item'>
					<Image height={16} width={16} src={headerTopLogo} alt="headerTopLogo" />
					<p>Lorem ipsum dolor</p>
				</div>
			</section>

			<section className="header-body-section">
				<div className="company-logo">
					<div onClick={() => setSideNavOpen((prev) => !prev)} className="burger-icon-link" href="#">
						<Image alt="MenuBarIcon" src={MenuBarIcon} className='burger-icon'  height={28} width={28} />
					</div>
					<Link href="#">
						<Image src={Logo} alt="Company-Logo" height={36} width={36} />
					</Link>

					{sideNavOpen && <div className="header-navbar-list-cont">
						<Image alt="CloseBarIcon" src={CloseBarIcon} onClick={() => setSideNavOpen((prev) => !prev)} className="close-icon"  />
						<div className="nav-lists">
							{navList.map((list, index) => {
								return (
									<Link key={index} href='#' className="nav-items">
										{list}
									</Link>
								)
							} )}
						</div>
					</div>
					}

				</div>
				<div className="company-title">
					<h1>LOGO</h1>
				</div>
				<div className="header-nav-icons">
					<div>
						<Link href="#">
							<Image src={SearchIcon} alt="SearchIcon" height={24} width={24} />
						</Link>
					</div>
					<div>
						<Link href="#">
							<Image src={HeartIcon} alt="HeartIcon" height={24} width={24} />
						</Link>
					</div>
					<div>
						<Link href="#">
							<Image src={ShoppingbagIcon} alt="ShoppingbagIcon" height={24} width={24} />
						</Link>
					</div>
					<div className='mobile-none'>
						<Link href="#">
							<Image src={ProfileIcon} alt="ProfileIcon" height={24} width={24} />
						</Link>
					</div>
					<div className="mobile-none" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
						<b>ENG</b>
						<Image style={{ rotate: '-45' }} src={ArrowDown} alt="ArrowDown" height={16} width={16} />
					</div>
				</div>
			</section>

			<section className='header-footer-section'>
				<nav>
					<div className="footer-item footer-item-active">
						<Link href="#" style={{ textDecoration: 'none' }}>
							<p>HOME</p>
						</Link>
						<p className='divider'>|</p>
					</div>
					<div className="footer-item">
						<Link href="#" style={{ textDecoration: 'none' }}>
							<p>SHOP</p>
						</Link>
					</div>
					<div className="footer-item mobile-none">
						<Link href="#" style={{ textDecoration: 'none' }}>
							<p>SKILLS</p>
						</Link>
					</div>
					<div className="footer-item mobile-none">
						<Link href="#" style={{ textDecoration: 'none' }}>
							<p>STORIES</p>
						</Link>
					</div>
					<div className="footer-item mobile-none">
						<Link href="#" style={{ textDecoration: 'none' }}>
							<p>ABOUT</p>
						</Link>
					</div>
					<div className="footer-item mobile-none">
						<Link href="#" style={{ textDecoration: 'none' }}>
							<p>CONTACT US</p>
						</Link>
					</div>
				</nav>

			</section>
		</header>
	)
}

export default Header