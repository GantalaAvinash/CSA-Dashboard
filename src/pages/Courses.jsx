import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, Toolbar, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { contextMenuItems, CoursesGrid } from '../data/dummy';
import { Header } from '../components';

const Courses = () => {
  const [data, setData] = useState([]);
  const editing = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
  const baseUrl = 'http://localhost:1438/api/getcourse';
  useEffect(() => {
    axios.get(baseUrl)
      .then((response) => {
        setData(response.data.course);
      })
      .catch((error) => { console.error(error); });
  });

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Courses" />
      <GridComponent
        id="gridcomp"
        dataSource={data}
        allowPdfExport
        allowPaging
        pageSettings={{ pageCount: 10 }}
        allowSorting
        allowExcelExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {CoursesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Toolbar, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  );
};
export default Courses;
