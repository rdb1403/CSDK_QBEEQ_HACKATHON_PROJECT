import {
  Dimension,
  Brand,
  Category,
  Commerce,
  Country,
} from '../../sample-ecommerce.ts';

import {
  Admissions,
  Conditionstimeofstay,
  Diagnosis,
  Divisions,
  Doctors,
  ER,
  Patients,
  Rooms,
} from '../../sample-healthcare.ts'

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

const ecommerceKeyValuePairs: KeyValuePair[] = [
  ...createKeyValuePairs('Brand', Brand),
  ...createKeyValuePairs('Category', Category),
  ...createKeyValuePairs('Commerce', Commerce),
  ...createKeyValuePairs('Country', Country),
];

const healthcareKeyValuePairs: KeyValuePair[] = [
  ...createKeyValuePairs('Admissions', Admissions),
  ...createKeyValuePairs('Conditions_time_of_stay', Conditionstimeofstay),
  ...createKeyValuePairs('Diagnosis', Diagnosis),
  ...createKeyValuePairs('Divisions', Divisions),
  ...createKeyValuePairs('Doctors', Doctors),
  ...createKeyValuePairs('ER', ER),
  ...createKeyValuePairs('Patients', Patients),
  ...createKeyValuePairs('Rooms', Rooms),
];

console.log('Ecommerce KeyValuePairs:', ecommerceKeyValuePairs);
console.log('Healthcare KeyValuePairs:', healthcareKeyValuePairs);

export { ecommerceKeyValuePairs, healthcareKeyValuePairs };
