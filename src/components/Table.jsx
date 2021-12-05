import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {
    field: 'blockchainName',
    headerName: 'Blockchain',
    width: 250,
  },
//   {
//     field: 'lastName',
//     headerName: 'Last name',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 110,
//     editable: true,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.getValue(params.id, 'firstName') || ''} ${
//         params.getValue(params.id, 'lastName') || ''
//       }`,
//   },
];

const rows = [
  { id: 1, blockchainName: 'Bitcoin', firstName: 'Jon', age: 35 },
  { id: 2, blockchainName: 'Ethereum', firstName: 'Cersei', age: 42 },
  { id: 3, blockchainName: 'Binance Smart Chain', firstName: 'Jaime', age: 45 },
  { id: 4, blockchainName: 'Solana', firstName: 'Jaime', age: 45 },
  { id: 5, blockchainName: 'Cardano', firstName: 'Jaime', age: 45 },
];

export default function DataGridDemo() {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[100]}
        disableSelectionOnClick
      />
    </div>
  );
}