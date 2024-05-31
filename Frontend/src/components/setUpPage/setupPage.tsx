import React, { useState, useEffect, useContext } from 'react';
import { InputLabel, FormControl, Select, MenuItem, TextField, Button } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import 'gridstack/dist/gridstack.css';
import { ecommerceKeyValuePairs, healthcareKeyValuePairs } from '../data/KeyValuePairsEcommerce';
import { csdkSnowflakeKeyValuePairs } from '../data/keyValueForSnowflake';
import './SetupPage.css';
import widgetContext from '../widgetContext';

const SetupPage: React.FC = () => {
    const contextforsetup = useContext(widgetContext);
    console.log("contextforsetup", contextforsetup);
    console.log("csdkSnowflakeKeyValuePairs", csdkSnowflakeKeyValuePairs);
    const [dropdown1, setDropdown1] = useState<string>('');
    const [dropdown2, setDropdown2] = useState<string>('');
    const [dropdown3, setDropdown3] = useState<string>('');
    const [dropdown4, setDropdown4] = useState<string>('');
    const [dropdown5, setDropdown5] = useState<string>('');
    const [dropdown6, setDropdown6] = useState<string>('');
    const [dropdown7, setDropdown7] = useState<string>('');
    const [widgetTitle, setWidgetTitle] = useState<string>('');
    const [widgets, setWidgets] = useState<any[]>(() => {
        const savedWidgets = localStorage.getItem('widgets');
        return savedWidgets ? JSON.parse(savedWidgets) : [];
    });

    const handleDropdownChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (event: SelectChangeEvent<string>) => {
        setter(event.target.value as string);
    };
    const handleWidgetTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWidgetTitle(event.target.value);
    };

    const handleSubmit = () => {
        const newWidget = {
            datasource: dropdown1,
            widgetType: dropdown2,
            customWidgetType: dropdown3,
            dimension: dropdown4,
            measure: dropdown5,
            breakBy: dropdown6,
            writeBackTable: dropdown7,
            widgetTitle: widgetTitle,
        };
        const updatedWidgets = [...widgets, newWidget];
        localStorage.setItem('widgets', JSON.stringify(updatedWidgets));
        setWidgets(updatedWidgets);
        if (contextforsetup) {
            contextforsetup.dropdown1 = dropdown1;
            contextforsetup.dropdown2 = dropdown2;
            contextforsetup.dropdown3 = dropdown3;
            contextforsetup.dropdown4 = dropdown4;
            contextforsetup.dropdown5 = dropdown5;
            contextforsetup.dropdown6 = dropdown6;
            contextforsetup.dropdown7 = dropdown7;
            contextforsetup.widgetTitle = widgetTitle;
            contextforsetup.widgets = widgets;
        }
    };

    const handleReset = () => {
        setDropdown1('');
        setDropdown2('');
        setDropdown3('');
        setDropdown4('');
        setDropdown5('');
        setDropdown6('');
        setDropdown7('');
        setWidgetTitle('');
    };

    useEffect(() => {
        const savedWidgets = localStorage.getItem('widgets');
        if (savedWidgets) {
            setWidgets(JSON.parse(savedWidgets));
        }
    }, []);

    const getDataSourceName = (value: string) => {
        switch (value) {
            case 'DM':
                return 'Sample Ecommerce';
            case 'DMH':
                return 'Sample healthcare';
            case 'DMS':
                return 'Sample Snowflake';
        }
    }
    const keyValuePairs = dropdown1 === 'DMH' ? healthcareKeyValuePairs : ecommerceKeyValuePairs;
    return (
        <div className="main-container" >
            <div className='selection-container'>
                <div className='dropdown-container'>
                    <div className='dropdown-wrapper'>
                        <InputLabel id="data-source-label">DataSource</InputLabel>
                        <FormControl className='dropdown'>
                            <Select labelId="data-source-label" value={dropdown1} onChange={handleDropdownChange(setDropdown1)}>
                                <MenuItem value={'DM'}>Sample Ecommerce</MenuItem>
                                <MenuItem value={'DMH'}>Sample HealthCare</MenuItem>
                                <MenuItem value={'DMS'}>Sample Snowflake</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    {dropdown1 !== 'DMS' && (
                        <div className='dropdown-wrapper' style={{ marginTop: '20px' }}>
                            <InputLabel id="widget-type-label">WidgetType</InputLabel>
                            <FormControl className='dropdown'>
                                <Select labelId="widget-type-label" value={dropdown2} onChange={handleDropdownChange(setDropdown2)}>
                                    <MenuItem value={'line'}>Line</MenuItem>
                                    <MenuItem value={'pie'}>Pie</MenuItem>
                                    <MenuItem value={'bar'}>Bar</MenuItem>
                                    <MenuItem value={'column'}>Column</MenuItem>
                                    <MenuItem value={'indicator'}>Indicator</MenuItem>
                                </Select>
                            </FormControl>
                        </div>)}
                    {dropdown1 === 'DMS' && (
                        <div className='dropdown-wrapper' style={{ marginTop: '20px' }}>
                            <InputLabel id="widget-type-label">WidgetType</InputLabel>
                            <FormControl className='dropdown'>
                                <Select labelId="widget-type-label" value={dropdown2} onChange={handleDropdownChange(setDropdown2)}>
                                    <MenuItem value={'custom'}>Custom</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    )}
                    {dropdown2 === 'custom' && (
                        <div className='dropdown-wrapper' style={{ marginTop: '20px' }}>
                            <InputLabel id="custom-widget-type-label">Custom Widget</InputLabel>
                            <FormControl className='dropdown'>
                                <Select labelId="custom-widget-type-label" value={dropdown3} onChange={handleDropdownChange(setDropdown3)}>
                                    <MenuItem value={'WriteBackTable'}>WriteBack Table</MenuItem>
                                    <MenuItem value={'WriteBackForm'}>WriteBack form</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    )}
                </div>
                {dropdown1 !== 'DMS' && (
                    <div className='dropdown-container-2'>
                        {dropdown2 !== 'indicator' && (
                            <div className='dropdown-wrapper' style={{ marginTop: '20px' }}>
                                <InputLabel id="dimension-type-label">Dimensions</InputLabel>
                                <FormControl className='dropdown'>
                                    <Select labelId="dimension-type-label" value={dropdown4} onChange={handleDropdownChange(setDropdown4)}>
                                        {keyValuePairs.map(({ key, value }) => (
                                            <MenuItem key={key} value={key} title={key}>{value}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>
                        )
                        }
                        <div className='dropdown-wrapper' style={{ marginTop: '20px' }}>
                            <InputLabel id="measures-type-label">Measures</InputLabel>
                            <FormControl className='dropdown'>
                                <Select labelId="measures-type-label" value={dropdown5} onChange={handleDropdownChange(setDropdown5)}>
                                    {keyValuePairs.map(({ key, value }) => (
                                        <MenuItem key={key} value={key} title={key}>{value}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                        {dropdown2 !== 'indicator' && (
                            <div className='dropdown-wrapper' style={{ marginTop: '20px' }}>
                                <InputLabel id="breakby-type-label">BreakBy</InputLabel>
                                <FormControl className='dropdown'>
                                    <Select labelId="breakby-type-label" value={dropdown6} onChange={handleDropdownChange(setDropdown6)}>
                                        {keyValuePairs.map(({ key, value }) => (
                                            <MenuItem key={key} value={key} title={key}>{value}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>
                        )}
                    </div>
                )}
                {(dropdown1 === 'DMS' && (dropdown3 === 'WriteBackForm' || dropdown3 === 'WriteBackTable')) && (
                    <div className='WriteBack-container'>
                        <div className='dropdown-wrapper' style={{ marginTop: '20px' }}>
                            <InputLabel id="writeback-table-label">Table</InputLabel>
                            <FormControl className='dropdown'>
                                <Select labelId="writeback-table-label" value={dropdown7} onChange={handleDropdownChange(setDropdown7)}>
                                    <MenuItem value={'TAB_C_SDK'}>TAB_C_SDK</MenuItem>
                                    <MenuItem value={'TAB_C_SDK_ORDERS'}>TAB_C_SDK_ORDERS</MenuItem>
                                    <MenuItem value={'TAB_C_SDK_REGION'}>TAB_C_SDK_REGION</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                )}
                <div className='title-container'>
                    <div className='text-field-wrapper' style={{ marginTop: '20px' }}>
                        <InputLabel id="widget-title-label" style={{ marginRight: '20px' }}>Widget Title</InputLabel>
                        <TextField
                            label="Widget Title"
                            value={widgetTitle}
                            onChange={handleWidgetTitleChange}
                            style={{ width: '220px' }}
                        />
                    </div>
                </div>
                <div className='button-container' style={{ marginLeft: '40px' }}>
                    <Button variant="contained" onClick={handleReset} style={{ marginTop: '20px' }}>Reset</Button>
                    <Button variant="contained" onClick={handleSubmit} style={{ marginTop: '20px', marginLeft: '20px' }}>Add Widget</Button>
                </div>
            </div>
            <div className='vertical-line'>
            </div>
            <div className="table-container">
                <table className="widgets-table">
                    <thead>
                        <tr>
                            <th>DataSource</th>
                            <th>WidgetType</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {widgets.map((widget, index) => (
                            widget.datasource && (
                                <tr key={index}>
                                    <td>{getDataSourceName(widget.datasource)}</td>
                                    <td>{widget.widgetType}</td>
                                    <td>{widget.widgetTitle}</td>
                                </tr>
                            )
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};
export default SetupPage;
