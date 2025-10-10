
const router = () => 
    {
        [
            { name: 'intro', path: '/intro' }, 
            { name: 'login', path: '/login' },  
            { name: 'landingPage', path: '/' },
            { name: 'public', path: '/public' }, 
            { name: 'startit', path: '/startit' },
            { name: 'employees', path: '/employees' }
        ];
    }

export default function () {
    return router();
}