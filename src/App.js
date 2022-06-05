import {GridComponent, ColumnsDirective, ColumnDirective ,Page,Inject, Filter} from '@syncfusion/ej2-react-grids'
import './App.css';
import data from './dataSource.json';
function App() {
  return (
    <div style={{ margin:'10%', marginTop: '10%'}}>
      <GridComponent dataSource={data} allowPaging={true} allowFiltering={true} pageSettings={{pageSize:6}}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='OrderID' textAlign='Right' width='100' isPrimaryKey={true}/>
          <ColumnDirective field='CustomerID' headerText='Customer ID'/>
          <ColumnDirective field='ShipCountry' headerText='Country'/>
          <ColumnDirective field='ShipName' headerText='Ship Name'/>
          <ColumnDirective field='Freight' />
        </ColumnsDirective>
        <Inject services={[Page,Filter]}/>
      </GridComponent>
    </div>
  );
}

export default App;
