import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

const publicRoute = [
    {path: '/', component: Home},
    {path: '/following', component: Following},
    {path: '/upload', component: Upload, layout: HeaderOnly},
    {path: '/search', component: Upload, layout: null},
]

const privateRoute = [

]

export {publicRoute , privateRoute}