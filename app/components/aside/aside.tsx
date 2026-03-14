import {navLinks} from '../../constants/links';
import {Link} from 'react-router';

export function Aside(){
    return (        
            <nav className="w-fit h-screen flex flex-col justify-start align-center p-5 border-neutral-200 border-r-1">
                {
                    navLinks?.map(
                        link => <Link to={link?.href}>{link?.text}</Link>
                    )
                }
            </nav>
    );
}