import Home from '@/Views/Home'
import About from '@/Views/About'
import Blog from '@/Views/Blog'
import Project from '@/Views/Project'
import Message from '@/Views/Message'
import BlogDetail from '@/Views/Blog/blogDetail'
export default [
    {name:'Home',path:'/', component:Home},
    {name:'About',path:'/about', component:About},
    {name:'Blog',path:'/blog', component:Blog},
    {name:'BlogDetail',path:'/blog/detail', component:BlogDetail},
    {name:'PhotoShow',path:'/photoShow', component:Project},
    {name:'Message',path:'/message', component:Message},
  ]
