import { startCase } from 'lodash';
import moment from 'moment';
import { GridColDef } from '@mui/x-data-grid';
import SeverityCell from './SeverityCell';
import UserCell from './UserCell';

const columns: GridColDef[] = [
    {
      field: '',
      width: 85,
    }, 
    {
      field: 'eventType',
      headerName: 'Event Type',
      width: 300,
      valueGetter: ({ value: eventType }) => startCase(eventType),
    }, 
    { 
      field: 'severity',
      headerName: 'Severity',
      width: 150,
      renderCell: ({ value: severity }) => <SeverityCell severity={severity} />
    }, 
    { 
      field: 'user',
      headerName: 'User',
      width: 300,
      renderCell: ({ value: user }) => <UserCell user={user} />
    }, 
    { 
      field: 'time', 
      headerName: 'Date', 
      width: 250, 
      valueGetter: ({ value: time }) => moment(time).format('YYYY/MM/DD h:mm:ss')
    }, 
    { 
      field: 'os',
      headerName: 'Operating System',
      width: 200,
      valueGetter: ({ value: os }) => startCase(os),
    }, 
  ];

  export default columns;