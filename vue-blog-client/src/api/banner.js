
import gen from './index';
import { API } from './commWord';

const BlogMethods = {
  getBanner: `${API}/banner`, 
};
const APIFunction = {};

for (const key in BlogMethods) {
  APIFunction[key] = gen(BlogMethods[key]);
}
console.log(APIFunction,'APIFunction');
export default APIFunction;
