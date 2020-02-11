<script>
import Home from '@/components/views/Home';
import Test from '@/components/views/Test';
import Login from '@/components/views/Login';

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
  }
]
</script>
