import ".././style/main.scss";
import { library, dom, config } from '@fortawesome/fontawesome-svg-core';
import { faHome,  faUser, faList, faBriefcase, faEnvelope, faComments, faCode} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

import {test} from './app';


library.add(faHome, faUser, faList, faBriefcase, faEnvelope, faComments, faTwitter, faCode, faLinkedin, faGithub, faCalendarAlt);
dom.watch()





config.keepOriginalSource = false;
console.log('a' + test);