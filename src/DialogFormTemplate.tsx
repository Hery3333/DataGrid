import React from 'react'
import {TextBoxComponent } from '@syncfusion/ej2-react-inputs'
const DialogFormTemplate: React.FC = (props: any) => {
    return(
        <div>
            <div className='form-row'>
                <div className='form-group col-md-6'>
                    <TextBoxComponent id="OrderID" value={props.OrderID} enabled={props.isAdd} placeholder="OrderID" floatLabelType='Auto'/>
                </div>
                <div className='form-group col-md-6'>
                    <TextBoxComponent id="CustomerID" value={props.CustomerID} enabled={props.isAdd} placeholder="Customer ID" floatLabelType='Auto'/>
                </div>
            </div>
        </div>
    )
}

export default DialogFormTemplate;