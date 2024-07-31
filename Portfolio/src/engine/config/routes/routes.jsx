import AboutMi from '../../../ui/pages/AboutMi/index';
import MyWork from '../../../ui/pages/MyWork/index';
import MySkills from '../../../ui/pages/MySkills';
import Contact from '../../../ui/pages/Contact';
import Swapi from '../../../ui/pages/Swapi/index';
import History from '../../../ui/pages/History/index';
import ToDo from '../../../ui/pages/ToDo/index';
import Done from '../../../ui/pages/Done/index'

export const routes = {
    aboutMi: {
        element: <AboutMi/>,
        path: '/'
    },
    myWork: {
        element: <MyWork/>,
        path: '/my-work'
    },
    skills: {
        element: <MySkills/>,
        path: '/skills'
    },
    contact: {
        element: <Contact/>,
        path: '/contact'
    },
    swapi: {
        element: <Swapi/>,
        path: '/swapi'
    },
    history: {
        element: <History/>,
        path: '/to-do/history',
    },
    toDo: {
        element: <ToDo/>,
        path: '/to-do'
    },
    done: {
        element: <Done/>,
        path: '/to-do/done',
    }
}

