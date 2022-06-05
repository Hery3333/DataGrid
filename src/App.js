import {GridComponent, ColumnsDirective, ColumnDirective ,Page,Inject, Edit,Filter,Toolbar} from '@syncfusion/ej2-react-grids'
import './App.css';
import data from './dataSource.json';

import { IOrderModel } from './orderModel.tsx';
import DialogFormTemplate from './DialogFormTemplate.tsx';

function App() {

  const editOptions = { 
    allowEditing: true,
     allowDeleting: true,
     allowAdding: true,
//template: DialogFormTemplate,
     mode:'Dialog'}
  const toolbarOptions = ['Add','Edit','Delete']

  function dialogTemplate(props){
     //return the template
     return DialogFormTemplate;

  }

  return (
    <div style={{ margin:'10%', marginTop: '10%'}}>
      <GridComponent 
        dataSource={data}
        allowPaging={true}
        pageSettings={{pageSize:6}}
        editSettings={editOptions}
        toolbar={toolbarOptions}
        >
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='OrderID' textAlign='Right' width='100' isPrimaryKey={true}/>
          <ColumnDirective field='CustomerID' headerText='Customer ID'/>
          <ColumnDirective field='ShipCountry' headerText='Country' />
          <ColumnDirective field='ShipName' headerText='Ship Name'/>
          <ColumnDirective field='Freight' editType='numericedit' />
          <ColumnDirective field='ShippedDate' type='date' format='yMd' editType='datepickeredit'/>
        </ColumnsDirective>
        <Inject services={[Page,Edit,Toolbar]}/>
      </GridComponent>
    </div>
  );
}

export default App;
