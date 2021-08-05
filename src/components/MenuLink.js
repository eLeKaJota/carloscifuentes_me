import { Link } from "wouter"

const MenuLink = ({cl, link, description}) => {
	return (
		<li className={cl}><Link to={link}>{description}</Link></li>
	);
};

export default MenuLink;