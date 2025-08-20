import { getUser } from '../../requests/users';
import { useFetch } from '../useFetch';
import userMapper from './userMapper';

const useUser = (id: string | undefined) => {
  const res = useFetch(() => getUser(id));
  const data = res.data && userMapper(res.data);
  return { ...res, data };
};

export default useUser;
