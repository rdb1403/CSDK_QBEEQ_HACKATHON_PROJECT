import {
  Dimension,
  DateDimension,
  Attribute,
  createAttribute,
  createDateDimension,
  createDimension,
} from '@sisense/sdk-data';

export const DataSource = 'CSDK Snowflake Demo';

interface TAB_C_SDKDimension extends Dimension {
  ID: Attribute;
  NUMERIC1: Attribute;
  NUMERIC2: Attribute;
  NUMERIC3: Attribute;
  STRING1: Attribute;
  STRING2: Attribute;
  STRING3: Attribute;
  DATETIME1: DateDimension;
  DATETIME2: DateDimension;
}
export const TAB_C_SDK = createDimension({
  name: 'TAB_C_SDK',
  ID: createAttribute({
    name: 'ID',
    type: 'text-attribute',
    expression: '[TAB_C_SDK.ID]',
  }),
  NUMERIC1: createAttribute({
    name: 'NUMERIC1',
    type: 'numeric-attribute',
    expression: '[TAB_C_SDK.NUMERIC1]',
  }),
  NUMERIC2: createAttribute({
    name: 'NUMERIC2',
    type: 'numeric-attribute',
    expression: '[TAB_C_SDK.NUMERIC2]',
  }),
  NUMERIC3: createAttribute({
    name: 'NUMERIC3',
    type: 'numeric-attribute',
    expression: '[TAB_C_SDK.NUMERIC3]',
  }),
  STRING1: createAttribute({
    name: 'STRING1',
    type: 'text-attribute',
    expression: '[TAB_C_SDK.STRING1]',
  }),
  STRING2: createAttribute({
    name: 'STRING2',
    type: 'text-attribute',
    expression: '[TAB_C_SDK.STRING2]',
  }),
  STRING3: createAttribute({
    name: 'STRING3',
    type: 'text-attribute',
    expression: '[TAB_C_SDK.STRING3]',
  }),
  DATETIME1: createDateDimension({
    name: 'DATETIME1',
    expression: '[TAB_C_SDK.DATETIME1 (Calendar)]',
  }),
  DATETIME2: createDateDimension({
    name: 'DATETIME2',
    expression: '[TAB_C_SDK.DATETIME2 (Calendar)]',
  }),
}) as TAB_C_SDKDimension;

interface TAB_C_SDK_ORDERSDimension extends Dimension {
  ID: Attribute;
  ITEM_TYPE: Attribute;
  ORDER_ID: Attribute;
  ORDER_PRIORITY: Attribute;
  SALES_CHANNEL: Attribute;
  UNIT_PRICE: Attribute;
  ORDER_DATE: DateDimension;
}
export const TAB_C_SDK_ORDERS = createDimension({
  name: 'TAB_C_SDK_ORDERS',
  ID: createAttribute({
    name: 'ID',
    type: 'numeric-attribute',
    expression: '[TAB_C_SDK_ORDERS.ID]',
  }),
  ITEM_TYPE: createAttribute({
    name: 'ITEM_TYPE',
    type: 'text-attribute',
    expression: '[TAB_C_SDK_ORDERS.ITEM_TYPE]',
  }),
  ORDER_ID: createAttribute({
    name: 'ORDER_ID',
    type: 'numeric-attribute',
    expression: '[TAB_C_SDK_ORDERS.ORDER_ID]',
  }),
  ORDER_PRIORITY: createAttribute({
    name: 'ORDER_PRIORITY',
    type: 'numeric-attribute',
    expression: '[TAB_C_SDK_ORDERS.ORDER_PRIORITY]',
  }),
  SALES_CHANNEL: createAttribute({
    name: 'SALES_CHANNEL',
    type: 'text-attribute',
    expression: '[TAB_C_SDK_ORDERS.SALES_CHANNEL]',
  }),
  UNIT_PRICE: createAttribute({
    name: 'UNIT_PRICE',
    type: 'numeric-attribute',
    expression: '[TAB_C_SDK_ORDERS.UNIT_PRICE]',
  }),
  ORDER_DATE: createDateDimension({
    name: 'ORDER_DATE',
    expression: '[TAB_C_SDK_ORDERS.ORDER_DATE (Calendar)]',
  }),
}) as TAB_C_SDK_ORDERSDimension;

interface TAB_C_SDK_REGIONDimension extends Dimension {
  COUNTRY: Attribute;
  ID: Attribute;
  POPULATION: Attribute;
  REGION: Attribute;
}
export const TAB_C_SDK_REGION = createDimension({
  name: 'TAB_C_SDK_REGION',
  COUNTRY: createAttribute({
    name: 'COUNTRY',
    type: 'text-attribute',
    expression: '[TAB_C_SDK_REGION.COUNTRY]',
  }),
  ID: createAttribute({
    name: 'ID',
    type: 'numeric-attribute',
    expression: '[TAB_C_SDK_REGION.ID]',
  }),
  POPULATION: createAttribute({
    name: 'POPULATION',
    type: 'text-attribute',
    expression: '[TAB_C_SDK_REGION.POPULATION]',
  }),
  REGION: createAttribute({
    name: 'REGION',
    type: 'text-attribute',
    expression: '[TAB_C_SDK_REGION.REGION]',
  }),
}) as TAB_C_SDK_REGIONDimension;
