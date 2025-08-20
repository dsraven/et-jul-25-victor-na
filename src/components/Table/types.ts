import type { JSX } from 'react';

interface Props<T extends { key: React.Key }> {
  columns: ColumnType<T>[];
  dataSource: T[] | undefined | null;
  onRowClick?: (row: T) => void;
}

export type ColumnType<T extends object> = {
  name: Exclude<keyof T, 'key'>;
  render?: (value: unknown) => JSX.Element;
};

export type BasicTableType = <T extends { key: React.Key }>(Props: Props<T>) => JSX.Element;
