import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import type { BasicTableType } from './types';

const BasicTable: BasicTableType = ({ columns, dataSource, onRowClick }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column) => {
              const nameStr = String(column.name);
              return <TableCell key={nameStr}>{nameStr.toLocaleUpperCase()}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {dataSource?.map((row) => (
            <TableRow
              key={row.key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              onClick={() => onRowClick && onRowClick(row)}
            >
              {columns.map((column) => {
                const valueStr = String(row[column.name]);
                if (column.render) return <TableCell>{column.render(valueStr)}</TableCell>;
                return <TableCell>{valueStr}</TableCell>;
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
