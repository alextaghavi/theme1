import ".././style/main.scss";
import { library, dom, config } from '@fortawesome/fontawesome-svg-core';
import { faHome,  faUser, faList, faBriefcase, faEnvelope, faComments, faCode, faLaptopCode, faCamera, faFilm, faRocket, faPaintBrush, faSearch, faAngleLeft, faAngleRight, faEnvelopeOpenText, faCog} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

import {portfolioItemFilter} from './portfolioItemFilter';
import {portfolioLightbox} from './portfolioLightbox';
import {styleSwitcher} from './styleSwitcher';
import {sideBar} from './sidebar';
import {loader} from './loader';


library.add(faHome, faUser, faList, faBriefcase, faEnvelope, faComments, faTwitter, faCode, faLinkedin, faGithub, faCalendarAlt, faLaptopCode, faCamera, faFilm, faRocket, faPaintBrush, faSearch, faAngleLeft, faAngleRight, faEnvelopeOpenText, faCog);
dom.watch()


config.keepOriginalSource = false;

portfolioItemFilter();
portfolioLightbox();
styleSwitcher('pink');
sideBar();
loader();