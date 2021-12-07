import React, { FC } from 'react';
import { useTable } from 'react-table';

const TagsTable: FC = () => {
  const data = React.useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World'
      },
      {
        col1: 'react-table',
        col2: 'rocks'
      },
      {
        col1: 'whatever',
        col2: 'you want'
      };
    ]
    []
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'Column 1',
        accessor: 'col1'
      },
      {
        Header: 'Column 2',
        accessor: 'col2'
      }
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  return (
    <>

    </>
  );
};