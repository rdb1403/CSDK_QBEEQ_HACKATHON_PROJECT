import React, { useState, useEffect, useRef, useContext } from 'react';
import { InputLabel, TextField, Button, Snackbar } from '@mui/material';
import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.css';
import { PieChart, LineChart, BarChart, ColumnChart, IndicatorChart, ExecuteQuery, ExecuteQueryByWidgetId } from '@sisense/sdk-ui';
import * as DM from '../../sample-ecommerce';
import * as DMH from '../../sample-healthcare';
import * as DMS from '../../sample-snowflake';
import './visualisationPage.css';
import { measures, filters } from '@sisense/sdk-data';
import widgetContext from '../widgetContext';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import axios from 'axios';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';



interface Column {
  name: string;
}

interface Cell {
  data: string;
}

interface EditableTableProps {
  columns: Column[];
  rows: Cell[][];
}

const VisualizationPage = () => {
  const context = useContext(widgetContext);
  const [dialogTitle1, setDialogTitle1] = useState<string>('');
  const [dialogTitle2, setDialogTitle2] = useState<string>('');
  const [dialogTitle3, setDialogTitle3] = useState<string>('');
  const [dialogTitle4, setDialogTitle4] = useState<string>('');
  const [dialogTitle5, setDialogTitle5] = useState<string>('');
  const [dialogTitle6, setDialogTitle6] = useState<string>('');
  const [dialogTitle7, setDialogTitle7] = useState<string>('');
  const [dialogTitle8, setDialogTitle8] = useState<string>('');
  const [dialogTitle9, setDialogTitle9] = useState<string>('');
  const [dialogTitle10, setDialogTitle10] = useState<string>('');
  const [dialogTitle11, setDialogTitle11] = useState<string>('');
  const [dialogTitle12, setDialogTitle12] = useState<string>('');
  const [dialogTitle13, setDialogTitle13] = useState<string>('');
  const [dialogTitle14, setDialogTitle14] = useState<string>('');
  const [dialogTitle15, setDialogTitle15] = useState<string>('');
  const [dialogTitle16, setDialogTitle16] = useState<string>('');
  const [dialogTitle17, setDialogTitle17] = useState<string>('');
  const [isResized, setResized] = useState(false);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [selectedRow, setSelectedRow] = useState<Cell[]>([]);
  const [editedData, setEditedData] = useState<Cell[]>([]);
  const [widgets, setWidgets] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');




  const gridRef = useRef<GridStack>();

  const handleDialogTitle1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDialogTitle1(event.target.value);
  };

  const handleDialogTitle2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDialogTitle2(event.target.value);
  };

  const handleDialogTitle3Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDialogTitle3(event.target.value);
  };

  const handleDialogTitle4Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDialogTitle4(event.target.value);
  };

  const handleDialogTitle5Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDialogTitle5(event.target.value);
  };

  const handleDialogTitle6Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDialogTitle6(event.target.value);
  };
  const handleDialogTitle7Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDialogTitle7(event.target.value);
  };
  const handleDialogTitle8Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDialogTitle8(event.target.value);
  };

  const handleDialogTitle9Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDialogTitle9(event.target.value);
  };

  const handleDialogTitle10Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDialogTitle10(event.target.value);
  };
  const handleDialogTitle11Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDialogTitle11(event.target.value);
  };
  const handleDialogTitle12Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDialogTitle12(event.target.value);
  };
  const handleDialogTitle13Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDialogTitle13(event.target.value);
  };
  const handleDialogTitle14Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDialogTitle14(event.target.value);
  };
  const handleDialogTitle15Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDialogTitle15(event.target.value);
  };
  const handleDialogTitle16Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDialogTitle16(event.target.value);
  };
  const handleDialogTitle17Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDialogTitle17(event.target.value);
  };

  function getNestedPropertyValue(propertyPath: string, obj: any): any {
    const parts = propertyPath.split('.');
    let result = obj;
    for (const part of parts) {
      if (result && typeof result === 'object' && part in result) {
        result = result[part];
      } else {
        return undefined;
      }
    }
    return result;
  }

  const handleReset = () => {
    setDialogTitle1('');
    setDialogTitle2('');
    setDialogTitle3('');
    setDialogTitle4('');
    setDialogTitle5('');
    setDialogTitle6('');
    setDialogTitle7('');
    setDialogTitle8('');
  }
  const sendDataToSnowflake = async (data: any) => {
    try {
      const response = await axios.request({
        method: data.ID ? 'PUT' : 'POST',
        data,
        url: 'http://localhost:3000/snowflake'
      });
      console.log("respend", response);
      setSnackbarMessage(response.data);
      setOpenSnackbar(true);
    } catch (error) {
      console.error('Error sending data to Snowflake:', error);
      setSnackbarMessage('Error sending data to Snowflake');
      setOpenSnackbar(true);
    }
  };

  const handlePushToSnowflake = (tableName: any) => {
    var SnowflakeData;

    if (tableName === 'TAB_C_SDK') {
      SnowflakeData = {
        TABLENAME: tableName,
        NUMERIC1: dialogTitle1,
        NUMERIC2: dialogTitle2,
        NUMERIC3: dialogTitle3,
        STRING1: dialogTitle4,
        STRING2: dialogTitle5,
        STRING3: dialogTitle6,
        DATETIME1: dialogTitle7,
        DATETIME2: dialogTitle8
      };
    }
    else if (tableName === 'TAB_C_SDK_ORDERS') {
      SnowflakeData = {
        TABLENAME: tableName,
        ORDER_ID: dialogTitle9,
        ORDER_DATE: dialogTitle10,
        ORDER_PRIORITY: dialogTitle11,
        ITEM_TYPE: dialogTitle12,
        SALES_CHANNEL: dialogTitle13,
        UNIT_PRICE: dialogTitle14,

      };
    }
    else {
      SnowflakeData = {
        TABLENAME: tableName,
        REGION: dialogTitle15,
        COUNTRY: dialogTitle16,
        POPULATION: dialogTitle17,
      };
    }
    sendDataToSnowflake(SnowflakeData);
  };
  const handleEdit = (rowIndex: number, rows: any, tableName: any) => {
    const rowData = rows[rowIndex];
    console.log("rowdata", rowData);
    setSelectedRow(rowData);
    setEditedData(rowData);
    if (tableName === 'TAB_C_SDK') {
      setOpen(true);
    } else if (tableName === 'TAB_C_SDK_ORDERS') {
      setOpen1(true);
    } else {
      setOpen2(true);
    }
  };

  const handleClose = (tableName: any) => {
    console.log()
    if (tableName === 'TAB_C_SDK') {
      setOpen(false);
    } else if (tableName === 'TAB_C_SDK_ORDERS') {
      setOpen1(false);
    } else {
      setOpen2(false);
    }
    setSelectedRow([]);
    setEditedData([]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newEditedData = [...editedData];
    newEditedData[index] = { data: e.target.value };
    setEditedData(newEditedData);
  };

  const handleSubmit = (tableName: any) => {
    console.log("editeddata", editedData);
    var SnowflakeData;
    if (tableName === 'TAB_C_SDK') {
      SnowflakeData = {
        TABLENAME: tableName,
        ID: editedData[0].data,
        STRING1: editedData[1].data,
        STRING2: editedData[2].data,
        STRING3: editedData[3].data,
        NUMERIC1: editedData[4].data,
        NUMERIC2: editedData[5].data,
        NUMERIC3: editedData[6].data,
        DATETIME1: null,
        DATETIME2: null
      };
    }
    else if (tableName === 'TAB_C_SDK_ORDERS') {
      SnowflakeData = {
        TABLENAME: tableName,
        ID: editedData[0].data,
        ITEM_TYPE: editedData[1].data,
        SALES_CHANNEL: editedData[2].data,
        ORDER_ID: editedData[3].data,
        UNIT_PRICE: editedData[4].data,
        ORDER_PRIORITY: editedData[5].data,
      };
    }
    else {
      SnowflakeData = {
        TABLENAME: tableName,
        ID: editedData[0].data,
        REGION: editedData[1].data,
        COUNTRY: editedData[2].data,
        POPULATION: editedData[3].data
      };
    }
    sendDataToSnowflake(SnowflakeData);
    console.log("snoflakedata", SnowflakeData);
    handleClose(tableName);
  };

  const renderWidget = (widget: any, index: number) => {
    const dataSource = widget.datasource === 'DMH' ? DMH : DM;
    const dataset = widget.datasource === 'DMH' ? DMH.DataSource : DM.DataSource;

    if (widget.customWidgetType === 'WriteBackTable') {

      console.log("widget.WriteBackTable", widget.writeBackTable);
      if (widget.writeBackTable === 'TAB_C_SDK') {
        return (
          <div className="grid-stack-item" key={index} gs-h="3" gs-w="8">
            <div className="grid-stack-item-content">
              <div className='title-container'>
                <div className="title">{widget.writeBackTable}</div>
              </div>
              <IconButton onClick={() => handleDeleteWidget(index)} style={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }}>
                <DeleteIcon />
              </IconButton>


              <ExecuteQuery
                dataSource={DMS.DataSource}
                dimensions={[DMS.TAB_C_SDK.STRING1, DMS.TAB_C_SDK.ID, DMS.TAB_C_SDK.STRING2, DMS.TAB_C_SDK.STRING3, DMS.TAB_C_SDK.NUMERIC1, DMS.TAB_C_SDK.NUMERIC2, DMS.TAB_C_SDK.NUMERIC3]}

              >
                {(data) => {
                  console.log("data", data);
                  if (data) {
                    const { columns, rows } = data;
                    return (
                      <div>
                        <TableContainer component={Paper}>
                          <Table>
                            <TableHead>
                              <TableRow>
                                {columns.map((column, index) => (
                                  <TableCell key={index}>{column.name}</TableCell>
                                ))}
                                <TableCell>Edit</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rows.map((row, rowIndex) => (
                                <TableRow key={rowIndex}>
                                  {row.map((cell, cellIndex) => (
                                    <TableCell key={cellIndex}>{cell.data}</TableCell>
                                  ))}
                                  <TableCell>
                                    <IconButton onClick={() => handleEdit(rowIndex, rows, 'TAB_C_SDK')}>
                                      <EditIcon />
                                    </IconButton>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <Dialog open={open} onClose={() => handleClose('TAB_C_SDK')}>
                          <DialogTitle>Edit Row</DialogTitle>
                          <DialogContent>
                            {columns.map((column, index) => (
                              <TextField
                                key={index}
                                margin="dense"
                                label={column.name}
                                value={editedData[index]?.data || ''}
                                onChange={(e: any) => handleChange(e, index)}
                                fullWidth
                                InputProps={{
                                  disabled: column.name === 'sum ID'
                                }}
                              />
                            ))}
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={() => handleClose('TAB_C_SDK')} color="primary">
                              Cancel
                            </Button>
                            <Button onClick={() => handleSubmit('TAB_C_SDK')} color="primary">
                              Submit
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </div>
                    );
                  }
                  return null;
                }}
              </ExecuteQuery>
            </div>
          </div>
        )
      }
      if (widget.writeBackTable === 'TAB_C_SDK_ORDERS') {
        return (
          <div className="grid-stack-item" key={index} gs-h="3" gs-w="8">
            <div className="grid-stack-item-content">
              <div className='title-container'>
                <div className="title">{widget.writeBackTable}</div>
              </div>
              <IconButton onClick={() => handleDeleteWidget(index)} style={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }}>
                <DeleteIcon />
              </IconButton>

              <ExecuteQuery
                dataSource={DMS.DataSource}
                dimensions={[DMS.TAB_C_SDK_ORDERS.ID, DMS.TAB_C_SDK_ORDERS.ITEM_TYPE, DMS.TAB_C_SDK_ORDERS.SALES_CHANNEL, DMS.TAB_C_SDK_ORDERS.ORDER_ID, DMS.TAB_C_SDK_ORDERS.UNIT_PRICE, DMS.TAB_C_SDK_ORDERS.UNIT_PRICE, DMS.TAB_C_SDK_ORDERS.ORDER_PRIORITY]}

              >
                {(data) => {
                  console.log("datafororders", data);
                  if (data) {
                    const { columns, rows } = data;
                    return (
                      <div>
                        <TableContainer component={Paper}>
                          <Table>
                            <TableHead>
                              <TableRow>
                                {columns.map((column, index) => (
                                  <TableCell key={index}>{column.name}</TableCell>
                                ))}
                                <TableCell>Edit</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rows.map((row, rowIndex) => (
                                <TableRow key={rowIndex}>
                                  {row.map((cell, cellIndex) => (
                                    <TableCell key={cellIndex}>{cell.data}</TableCell>
                                  ))}
                                  <TableCell>
                                    <IconButton onClick={() => handleEdit(rowIndex, rows, 'TAB_C_SDK_ORDERS')}>
                                      <EditIcon />
                                    </IconButton>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <Dialog open={open1} onClose={() => handleClose('TAB_C_SDK_ORDERS')}>
                          <DialogTitle>Edit Row</DialogTitle>
                          <DialogContent>
                            {columns.map((column, index) => (
                              <TextField
                                key={index}
                                margin="dense"
                                label={column.name}
                                value={editedData[index]?.data || ''}
                                onChange={(e: any) => handleChange(e, index)}
                                fullWidth
                                InputProps={{
                                  disabled: column.name === 'sum ID'
                                }}
                              />
                            ))}
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={() => handleClose('TAB_C_SDK_ORDERS')} color="primary">
                              Cancel
                            </Button>
                            <Button onClick={() => handleSubmit('TAB_C_SDK_ORDERS')} color="primary">
                              Submit
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </div>
                    );
                  }
                  return null;
                }}
              </ExecuteQuery>
            </div>
          </div>
        )
      }
      if (widget.writeBackTable === 'TAB_C_SDK_REGION') {
        return (
          <div className="grid-stack-item" key={index} gs-h="3" gs-w="8">
            <div className="grid-stack-item-content">

              <IconButton
                onClick={() => handleDeleteWidget(index)}
                style={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }}
              >
                <DeleteIcon />
              </IconButton>
              <ExecuteQuery
                dataSource={DMS.DataSource}
                dimensions={[
                  DMS.TAB_C_SDK_REGION.ID,
                  DMS.TAB_C_SDK_REGION.REGION,
                  DMS.TAB_C_SDK_REGION.COUNTRY,
                  DMS.TAB_C_SDK_REGION.POPULATION
                ]}

              >
                {(data) => {
                  console.log("dataforregion", data);
                  if (data) {
                    const { columns, rows } = data;
                    return (
                      <div>
                        <div className='title-container'>
                          <div className="title">{widget.writeBackTable}</div>
                        </div>
                        <TableContainer component={Paper}>
                          <Table>
                            <TableHead>
                              <TableRow>
                                {columns.map((column, index) => (
                                  <TableCell key={index}>{column.name}</TableCell>
                                ))}
                                <TableCell>Edit</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rows.map((row, rowIndex) => (
                                <TableRow key={rowIndex}>
                                  {row.map((cell, cellIndex) => (
                                    <TableCell key={cellIndex}>{cell.data}</TableCell>
                                  ))}
                                  <TableCell>
                                    <IconButton onClick={() => handleEdit(rowIndex, rows, 'TAB_C_SDK_REGION')}>
                                      <EditIcon />
                                    </IconButton>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <Dialog open={open2} onClose={() => handleClose('TAB_C_SDK_REGION')}>
                          <DialogTitle>Edit Row</DialogTitle>
                          <DialogContent>
                            {columns.map((column, index) => (
                              <TextField
                                key={index}
                                margin="dense"
                                label={column.name}
                                value={editedData[index]?.data || ''}
                                onChange={(e: any) => handleChange(e, index)}
                                fullWidth
                                InputProps={{
                                  disabled: column.name === 'sum ID'
                                }}
                              />
                            ))}
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={() => handleClose('TAB_C_SDK_REGION')} color="primary">
                              Cancel
                            </Button>
                            <Button onClick={() => handleSubmit('TAB_C_SDK_REGION')} color="primary">
                              Submit
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </div>
                    );
                  }
                  return null;
                }}
              </ExecuteQuery>
            </div>
          </div>
        )
      }
    }
    if (widget.customWidgetType === 'WriteBackForm') {
      if (widget.writeBackTable === 'TAB_C_SDK') {
        return (
          <div className="grid-stack-item" key={index} gs-h="3" gs-w="3" >
            <div className="grid-stack-item-content">
              <IconButton onClick={() => handleDeleteWidget(index)} style={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }}>
                <DeleteIcon />
              </IconButton>
              <div className='popup-container'>
                <div className='title-container'>
                  <div className="title">{widget.writeBackTable}</div>
                </div>
                <div className='dialog-container'>
                  <div className='dialog-field-wrapper'>
                    <InputLabel id="dialog-title-label" style={{ marginRight: '20px' }}>NUMERIC1</InputLabel>
                    <TextField
                      label="NUMERIC1"
                      value={dialogTitle1}
                      onChange={handleDialogTitle1Change}
                      style={{ width: '200px' }}
                    />
                  </div>
                  <div className='dialog-field-wrapper'>
                    <InputLabel id="dialog-title-label" style={{ marginRight: '20px' }}>NUMERIC2</InputLabel>
                    <TextField
                      label="NUMERIC2"
                      value={dialogTitle2}
                      onChange={handleDialogTitle2Change}
                      style={{ width: '200px' }}
                    />
                  </div>
                  <div className='dialog-field-wrapper'>
                    <InputLabel id="dialog-title-label" style={{ marginRight: '20px' }}>NUMERIC3</InputLabel>
                    <TextField
                      label="NUMERIC3"
                      value={dialogTitle3}
                      onChange={handleDialogTitle3Change}
                      style={{ width: '200px' }}
                    />
                  </div>
                  <div className='dialog-field-wrapper'>
                    <InputLabel id="dialog-title-label" style={{ marginRight: '30px' }}>STRING1</InputLabel>
                    <TextField
                      label="STRING1"
                      value={dialogTitle4}
                      onChange={handleDialogTitle4Change}
                      style={{ width: '200px' }}
                    />
                  </div>
                  <div className='dialog-field-wrapper'>
                    <InputLabel id="dialog-title-label" style={{ marginRight: '30px' }}>STRING2</InputLabel>
                    <TextField
                      label="STRING2"
                      value={dialogTitle5}
                      onChange={handleDialogTitle5Change}
                      style={{ width: '200px' }}
                    />
                  </div>
                  <div className='dialog-field-wrapper'>
                    <InputLabel id="dialog-title-label" style={{ marginRight: '30px' }}>STRING3</InputLabel>
                    <TextField
                      label="STRING3"
                      value={dialogTitle6}
                      onChange={handleDialogTitle6Change}
                      style={{ width: '200px' }}
                    />
                  </div>
                  <div className='dialog-field-wrapper'>
                    <InputLabel id="dialog-title-label" style={{ marginRight: '10px' }}>DATETIME1</InputLabel>
                    <TextField
                      label="YYYY-MM-DD"
                      value={dialogTitle7}
                      onChange={handleDialogTitle7Change}
                      style={{ width: '200px' }}
                    />
                  </div>
                  <div className='dialog-field-wrapper'>
                    <InputLabel id="dialog-title-label" style={{ marginRight: '10px' }}>DATETIME2</InputLabel>
                    <TextField
                      label="YYYY-MM-DD"
                      value={dialogTitle8}
                      onChange={handleDialogTitle8Change}
                      style={{ width: '200px' }}
                    />
                  </div>
                </div>
                <div className='button-container'>
                  <Button variant="contained" onClick={handleReset} style={{ marginTop: '20px' }}>Reset</Button>
                  <Button variant="contained" onClick={() => handlePushToSnowflake(widget.writeBackTable)} style={{ marginTop: '20px', marginLeft: '20px' }}>Push to Snowflake</Button>
                </div>
              </div>
            </div>
          </div>
        );
      }
      if (widget.writeBackTable === 'TAB_C_SDK_ORDERS') {
        return (
          <div className="grid-stack-item" key={index} gs-h="3" gs-w="3">
            <div className="grid-stack-item-content">
              <IconButton onClick={() => handleDeleteWidget(index)} style={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }}>
                <DeleteIcon />
              </IconButton>
              <div className='popup-container'>
                <div className='title-container'>
                  <div className="title">{widget.writeBackTable}</div>
                </div>
                <div className='dialog-container'>
                  <div className='dialog-field-wrapper'>
                    <InputLabel id="dialog-title-label" style={{ marginRight: '90px' }}>ORDER_ID</InputLabel>
                    <TextField
                      label="ORDER_ID"
                      value={dialogTitle9}
                      onChange={handleDialogTitle9Change}
                      style={{ width: '200px' }}
                    />
                  </div>
                  <div className='dialog-field-wrapper'>
                    <InputLabel id="dialog-title-label" style={{ marginRight: '65px' }}>ORDER_DATE</InputLabel>
                    <TextField
                      label="YYYY-MM-DD"
                      value={dialogTitle10}
                      onChange={handleDialogTitle10Change}
                      style={{ width: '200px' }}
                    />
                  </div>
                  <div className='dialog-field-wrapper'>
                    <InputLabel id="dialog-title-label" style={{ marginRight: '30px' }}>ORDER_PRIORITY</InputLabel>
                    <TextField
                      label="ORDER_PRIORITY"
                      value={dialogTitle11}
                      onChange={handleDialogTitle11Change}
                      style={{ width: '200px' }}
                    />
                  </div>
                  <div className='dialog-field-wrapper'>
                    <InputLabel id="dialog-title-label" style={{ marginRight: '80px' }}>ITEM_TYPE</InputLabel>
                    <TextField
                      label="ITEM_TYPE"
                      value={dialogTitle12}
                      onChange={handleDialogTitle12Change}
                      style={{ width: '200px' }}
                    />
                  </div>
                  <div className='dialog-field-wrapper'>
                    <InputLabel id="dialog-title-label" style={{ marginRight: '30px' }}>SALES_CHANNEL</InputLabel>
                    <TextField
                      label="SALES_CHANNEL"
                      value={dialogTitle13}
                      onChange={handleDialogTitle13Change}
                      style={{ width: '200px' }}
                    />
                  </div>
                  <div className='dialog-field-wrapper'>
                    <InputLabel id="dialog-title-label" style={{ marginRight: '75px' }}>UNIT_PRICE</InputLabel>
                    <TextField
                      label="UNIT_PRICE"
                      value={dialogTitle14}
                      onChange={handleDialogTitle14Change}
                      style={{ width: '200px' }}
                    />
                  </div>
                </div>
                <div className='button-container'>
                  <Button variant="contained" onClick={handleReset} style={{ marginTop: '20px' }}>Reset</Button>
                  <Button variant="contained" onClick={() => handlePushToSnowflake(widget.writeBackTable)} style={{ marginTop: '20px', marginLeft: '20px' }}>Push to Snowflake</Button>
                </div>
              </div>
            </div>
          </div>
        );
      }
      if (widget.writeBackTable === 'TAB_C_SDK_REGION') {
        return (
          <div className="grid-stack-item" key={index} gs-h="3" gs-w="3">
            <div className="grid-stack-item-content">
              <IconButton onClick={() => handleDeleteWidget(index)} style={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }}>
                <DeleteIcon />
              </IconButton>
              <div className='popup-container'>
                <div className='title-container'>
                  <div className="title">{widget.writeBackTable}</div>
                </div>
                <div className='dialog-container'>
                  <div className='dialog-field-wrapper'>
                    <InputLabel id="dialog-title-label" style={{ marginRight: '70px' }}>REGION</InputLabel>
                    <TextField
                      label="REGION"
                      value={dialogTitle15}
                      onChange={handleDialogTitle15Change}
                      style={{ width: '200px' }}
                    />
                  </div>
                  <div className='dialog-field-wrapper'>
                    <InputLabel id="dialog-title-label" style={{ marginRight: '55px' }}>COUNTRY</InputLabel>
                    <TextField
                      label="COUNTRY"
                      value={dialogTitle16}
                      onChange={handleDialogTitle16Change}
                      style={{ width: '200px' }}
                    />
                  </div>
                  <div className='dialog-field-wrapper'>
                    <InputLabel id="dialog-title-label" style={{ marginRight: '30px' }}>POPULATION</InputLabel>
                    <TextField
                      label="POPULATION"
                      value={dialogTitle17}
                      onChange={handleDialogTitle17Change}
                      style={{ width: '200px' }}
                    />
                  </div>
                </div>
                <div className='button-container'>
                  <Button variant="contained" onClick={handleReset} style={{ marginTop: '20px' }}>Reset</Button>
                  <Button variant="contained" onClick={() => handlePushToSnowflake(widget.writeBackTable)} style={{ marginTop: '20px', marginLeft: '20px' }}>Push to Snowflake</Button>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
    else {
      const dimesionObj = getNestedPropertyValue(widget.dimension, dataSource);
      const measuresObj = getNestedPropertyValue(widget.measure, dataSource);
      const breakByObj = getNestedPropertyValue(widget.breakBy, dataSource);
      switch (widget.widgetType) {
        case 'pie':
          return (
            <div className="grid-stack-item" key={index} gs-h="2" gs-w="2">
              <div className="grid-stack-item-content">
                <IconButton onClick={() => handleDeleteWidget(index)} style={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }}>
                  <DeleteIcon />
                </IconButton>
                <PieChart
                  dataSet={dataset}
                  dataOptions={{
                    category: [dimesionObj],
                    value: [measures.sum(measuresObj, 'Total Revenue')],
                  }}
                  styleOptions={{
                    subtype: 'pie/classic',
                  }}
                />
              </div>
            </div>
          );
        case 'line':
          return (
            <div className="grid-stack-item" key={index} gs-h="2" gs-w="2">
              <div className="grid-stack-item-content">
                <IconButton onClick={() => handleDeleteWidget(index)} style={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }}>
                  <DeleteIcon />
                </IconButton>
                <LineChart
                  dataSet={dataset}
                  dataOptions={{
                    category: [dimesionObj],
                    value: [measures.sum(measuresObj, 'Total Revenue')],
                    breakBy: [breakByObj],
                  }}
                />
              </div>
            </div>
          );
        case 'bar':
          return (
            <div className="grid-stack-item" key={index} gs-h="2" gs-w="2">
              <div className="grid-stack-item-content">
                <IconButton onClick={() => handleDeleteWidget(index)} style={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }}>
                  <DeleteIcon />
                </IconButton>
                <BarChart
                  dataSet={dataset}
                  dataOptions={{
                    category: [dimesionObj],
                    value: [measures.sum(measuresObj, 'Total Revenue')],
                    breakBy: [breakByObj],
                  }}
                />
              </div>
            </div>
          );
        case 'column':
          return (
            <div className="grid-stack-item" key={index} gs-h="2" gs-w="2">
              <div className="grid-stack-item-content">
                <IconButton onClick={() => handleDeleteWidget(index)} style={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }}>
                  <DeleteIcon />
                </IconButton>
                <ColumnChart
                  dataSet={dataset}
                  dataOptions={{
                    category: [dimesionObj],
                    value: [measures.sum(measuresObj, 'Total Revenue')],
                    breakBy: [breakByObj],
                  }}
                />
              </div>
            </div>
          );
        case 'indicator':
          return (
            <div className="grid-stack-item" key={index} gs-h="2" gs-w="2">
              <div className="grid-stack-item-content">
                <IconButton onClick={() => handleDeleteWidget(index)} style={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }}>
                  <DeleteIcon />
                </IconButton>
                <IndicatorChart
                  dataSet={dataset}
                  dataOptions={{
                    value: [
                      {
                        column: measures.sum(measuresObj),
                        numberFormatConfig: {
                          name: 'Numbers',
                          decimalScale: 2,
                          trillion: true,
                          billion: true,
                          million: true,
                          kilo: true,
                          thousandSeparator: true,
                          prefix: false,
                          symbol: '$',
                        },
                      },
                    ],
                    secondary: [],
                    min: [measures.constant(0)],
                    max: [measures.constant(125000000)],
                  }}
                  filters={[filters.greaterThan(DM.Commerce.Revenue, 1000)]}
                  styleOptions={{
                    indicatorComponents: {
                      title: {
                        shouldBeShown: true,
                        text: 'Total Revenue',
                      },
                      secondaryTitle: {
                        text: '',
                      },
                      ticks: {
                        shouldBeShown: true,
                      },
                      labels: {
                        shouldBeShown: true,
                      },
                    },
                    subtype: 'indicator/gauge',
                    skin: 1,
                  }}
                />
              </div>
            </div>
          );
        default:
          return null;
      }
    }
  };

  const handleDeleteWidget = (indexToRemove: any) => {
    const savedWidgets = localStorage.getItem('widgets');
    if (!savedWidgets) return;
    const widgets = JSON.parse(savedWidgets);
    widgets.splice(indexToRemove, 1);
    localStorage.setItem('widgets', JSON.stringify(widgets));
    context?.setWidgets(widgets);
  };

  useEffect(() => {
    if (!gridRef.current) {
      gridRef.current = GridStack.init({
        resizable: {
          handles: 'e,se,s,sw,w',
        },
        margin: 5,
      });
      gridRef.current.on('resizestop', () => {
        setResized(prevState => !prevState);
      });
    }
    return () => {
      gridRef.current?.destroy(false);
      gridRef.current = undefined;
    };
  }, [context?.widgets]);

  useEffect(() => {
    const savedWidgets = localStorage.getItem('widgets');
    if (savedWidgets) {
      context?.setWidgets(JSON.parse(savedWidgets));
    }
  }, []);

  return (
    <div className='visualisation-container'>
      <div className="grid-stack">
        {context?.widgets.map((widget, index) => renderWidget(widget, index))}
      </div>
      <div className='table-container'>
      </div>
      <div className='snackbar-container'>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => setOpenSnackbar(false)}
          message={snackbarMessage}
          action={
            <React.Fragment>
              <IconButton size="small" aria-label="close" color="inherit" onClick={() => setOpenSnackbar(false)}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />

      </div>

    </div>

  );
};
export default VisualizationPage;