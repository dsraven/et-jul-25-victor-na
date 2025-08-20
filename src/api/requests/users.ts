import type { UsersDTO } from '../types/users';

export const getUsers = async () => {
  try {
    const res = await fetch('https://dummyjson.com/users');

    if (!res.ok) {
      throw new Error(`Error HTTP: ${res.status}`);
    }

    return res.json() as Promise<UsersDTO>;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getUser = async (id: string | undefined) => {
  try {
    if (!id) return undefined;
    const res = await fetch(`https://dummyjson.com/users/${id}`);

    if (!res.ok) {
      throw new Error(`Error HTTP: ${res.status}`);
    }

    return res.json() as Promise<UsersDTO['users'][number]>;
  } catch (error) {
    console.error(error);
    return null;
  }
};
