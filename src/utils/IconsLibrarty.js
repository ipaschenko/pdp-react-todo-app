import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft, faEdit, faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle';

const IconLibrary = library.add(faArrowLeft, faEdit, faCheck, faTrashAlt, faExclamationCircle);

export default IconLibrary;
