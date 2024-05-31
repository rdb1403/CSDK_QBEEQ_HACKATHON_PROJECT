import {
    TAB_C_SDK,
    TAB_C_SDK_ORDERS,
    TAB_C_SDK_REGION,
  } from '../../sample-snowflake';
  import { Dimension } from '@sisense/sdk-data'; // Ensure to import Dimension if used locally
  
  interface KeyValuePair {
    key: string;
    value: string;
  }
  
  function createKeyValuePairs(dimensionName: string, dimension: Dimension): KeyValuePair[] {
    const keysToRemove = ['description', '_dimensions', '_attributes', '_sort', '_expression', 'type'];
    
    return Object.keys(dimension)
      .filter(key => !keysToRemove.includes(key) && key !== 'name')
      .map(key => ({
        key: `${dimensionName}.${key}`,
        value: key,
      }));
  }
  
  const csdkSnowflakeKeyValuePairs: KeyValuePair[] = [
    ...createKeyValuePairs('TAB_C_SDK', TAB_C_SDK),
    ...createKeyValuePairs('TAB_C_SDK_ORDERS', TAB_C_SDK_ORDERS),
    ...createKeyValuePairs('TAB_C_SDK_REGION', TAB_C_SDK_REGION),
  ];
  
  console.log('CSDK Snowflake KeyValuePairs:', csdkSnowflakeKeyValuePairs);
  
  export { csdkSnowflakeKeyValuePairs };
  