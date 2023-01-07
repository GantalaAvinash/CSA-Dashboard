import React from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page, Filter } from '@syncfusion/ej2-react-grids';
import { studentsData, studentsGrid } from '../data/dummy';
import { Header } from '../components';

const Students = () => {
  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };
  const filterOptions = {
    ignoreAccent: true,
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Students" />
      <GridComponent
        dataSource={studentsData}
        width="auto"
        allowPaging
        allowSorting
        allowFiltering
        pageSettings={{ pageCount: 15 }}
        editSettings={editing}
        toolbar={toolbarOptions}
        filterSettings={filterOptions}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {studentsGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Search, Page, Filter]} />

      </GridComponent>
    </div>
  );
};
export default Students;
