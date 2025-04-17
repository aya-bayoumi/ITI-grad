import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faCartShopping } from '@fortawesome/free-solid-svg-icons' 
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons' 
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faTimes)
library.add(faCheck)


library.add(faGoogle);
library.add(faCartShopping);
library.add(faMagnifyingGlass);
library.add(faEye, faEyeSlash);
library.add(faHeart);
library.add(fasHeart, farHeart)
library.add(faPen);
library.add(faFacebook, faInstagram, faTwitter, faGithub)




export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})

