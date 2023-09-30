// Util packages
import Icon from '../utils/icon';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

// Define the props for the CopyBlock component
interface CopyBlockProps {
	containerClass: string;
	iconClass: string;
	icon?: any;
	title: string;
	copy: string;
	iconString?: React.JSX.Element
}

// This will return the copy block component
export default function CopyBlock({
									  containerClass,
									  iconClass,
									  icon, // Keep it as a string if you're using a string for the icon
									  title,
									  copy,
									  iconString
								  }: CopyBlockProps) {
	// Return the copy block component
	return (
		<div className={containerClass}>
      		<span className={iconClass}>
				{icon? <Icon icon={icon} />: ''}
				<>{iconString?iconString:''}</>
      		</span>
			<h3>{title}</h3>
			<p>{copy}</p>
		</div>
	);
}
