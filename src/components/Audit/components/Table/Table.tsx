import React, { useState } from 'react';
import styled from '@emotion/styled';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import columns from './columns';
import { useGetAudit, useGetAuditCounts } from '../../hooks';

const Wrapper = styled.div`
  width: 100%;
  height: 483px;
  margin-top: 25px;
`;

const dataGridStyles = {
  border: '0px',
  color: 'common.white',
  '& .MuiDataGrid-columnHeaders': {
    borderBottom: '0px',
    boxShadow: '0px 1px 0px rgba(255,255,255,0.5)',
  },
  '& .MuiDataGrid-columnSeparator--sideRight': {
    display: 'none',
  },
  '& .MuiTablePagination-root': {
    color: 'common.white', 
  },
  '& .MuiTablePagination-selectIcon': {
    color: 'rgba(255, 255, 255, 0.5)', 
  },
  '& .MuiDataGrid-footerContainer': {
    borderTop: '0px',
    boxShadow: '0px -1px 0px rgba(255,255,255,0.5)',
  },
  '& .MuiDataGrid-cell': {
    borderBottom: '1px solid rgba(255,255,255,0.5)',
  }
};

interface Props {
  selectedEvents: string[];
}

const PAGINATION_OPTIONS = [5, 10, 25];
const ROW_HEIGHT = 75;

const columnsWithDefaultConfig: GridColDef[] = 
  columns.map((column) => ({
    ...column, sortable: false, filterable: false, 
    editable: false, disableColumnMenu: true,
  }));

const Table = ({ selectedEvents }: Props) => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(PAGINATION_OPTIONS[0]);

  const { data: auditList, isLoading: isAuditListLoading, error: auditListError } =
    useGetAudit({ count: pageSize, offset: page, eventTypes: selectedEvents });
    
  const { data: totalCounts, isLoading: isTotalCountsLoading, error: totalCountsError } =
    useGetAuditCounts({ eventTypes: selectedEvents });

  const loading = isAuditListLoading || isTotalCountsLoading;
  const error = auditListError || totalCountsError;

  return (
    <Wrapper>
      <DataGrid
        rows={auditList}
        columns={columnsWithDefaultConfig}
        pageSize={pageSize}
        rowsPerPageOptions={PAGINATION_OPTIONS}
        onPageSizeChange={(size) => setPageSize(size)}
        onPageChange={(num) => setPage(num)}
        rowHeight={ROW_HEIGHT}
        sx={dataGridStyles}
        rowCount={totalCounts}
        getRowId={({ _id }) => _id}
        loading={loading}
        error={error}
        disableSelectionOnClick      
        disableVirtualization 
        paginationMode={'server'} 
      />
    </Wrapper>
  )
};

export default Table;