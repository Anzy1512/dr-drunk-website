import {Header} from '@/components/layout/Header';
import {Footer} from '@/components/layout/Footer';
import {Opening} from '@/components/sections/Opening';
import {CocktailLab} from '@/components/sections/CocktailLab';
import {Story} from '@/components/sections/Story';
import {GoodTimes} from '@/components/sections/GoodTimes';
import {People} from '@/components/sections/People';
import {Reveals} from '@/components/motion/Reveals';
export default function Home(){return <><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main"><Opening/><CocktailLab/><Story/><GoodTimes/><People/></main><Footer/><Reveals/></>;}
