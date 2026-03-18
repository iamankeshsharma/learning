import {navLinks} from '../../constants/links';
import {Link} from 'react-router';

export function Aside(){
    return (        
            <nav className="w-fit h-screen flex flex-col justify-start align-center px-15 py-10 border-neutral-200 border-r-1">
                {
                    navLinks?.map(
                        (link, i) => <Link key={i} to={link?.href}>{link?.text}</Link>
                    )
                }
            </nav>
    );
}