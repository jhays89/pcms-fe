import Home from '@/components/views/Home';
import Test from '@/components/views/Test';
import Login from '@/components/views/Login';
import Settings from '@/components/views/Settings';

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      isPublic: false
    }
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
    meta: {
      isPublic: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      isPublic: true
    }
  },
  {
    path: '/Settings',
    name: 'Settings',
    component: Settings,
    meta: {
      isPublic: false
    }
  }
]