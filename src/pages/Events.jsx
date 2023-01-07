import React, { useEffect } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, Toolbar, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import axios from 'axios';
import { contextMenuItems, EventsGrid } from '../data/dummy';
import { Header } from '../components';

const Events = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  const toolbarOptions = ['Add', 'Delete', 'ExcelExport', 'PdfExport', 'Search'];
  const selectionsettings = { persistSelection: true };
  const [data, setData] = React.useState([]);

  useEffect(() => {
    axios.get('http://localhost:1438/api/getevent')
      .then((response) => {
        setData(response.data.event);
      })
      .catch((error) => { console.error(error); });
  });
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="events" />
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
          {EventsGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Toolbar, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  );
};
export default Events;
