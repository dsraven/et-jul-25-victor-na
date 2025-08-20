import { getUsers } from '../../requests/users';
import { useFetch } from '../useFetch';
import userMapper from './userMapper';

const useUsers = () => {
  const res = useFetch(getUsers);
  const data = res.data?.users.map((user) => userMapper(user));
  return { ...res, data };
};

export default useUsers;
