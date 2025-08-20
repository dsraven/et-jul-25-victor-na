import { useNavigate } from 'react-router';
import { Table, type ColumnType } from '../../components/Table';
import useUsers from '../../api/hooks/users/useUsers';
import type { User } from '../../api/hooks/users/userMapper';

const Users = () => {
  const navigate = useNavigate();
  const { data } = useUsers();
  const columns: ColumnType<User>[] = [
    {
      name: 'id',
    },
    {
      name: 'username',
    },
    {
      name: 'name',
    },
    {
      name: 'lastName',
    },
    {
      name: 'email',
    },
    {
      name: 'role',
    },
  ];
  const goToDetailPage = (row: User) => {
    navigate(`/users/${row.id}`);
  };

  return <Table columns={columns} dataSource={data} onRowClick={(row) => goToDetailPage(row)} />;
};

export default Users;
