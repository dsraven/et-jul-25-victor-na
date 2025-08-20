import type { UsersDTO } from '../../types/users';

const userMapper = (user: UsersDTO['users'][number]) => {
  return {
    key: user.id,
    id: user.id,
    name: user.firstName,
    lastName: user.lastName,
    username: user.username,
    role: user.role,
    email: user.email,
  };
};

export default userMapper;
export type User = ReturnType<typeof userMapper>;
