import { Link } from "wouter"

const MenuLink = ({cl, link, description}) => {
	return (
		<li className={cl}><Link onClick={() => {
			const menu = document.querySelector('.responsive-menu')
			if (menu.style.visibility === 'visible'){
				menu.style.opacity = '0'
				menu.style.visibility = 'hidden'
			}
		}} to={link}>{description}</Link></li>
	);
};

export default MenuLink;