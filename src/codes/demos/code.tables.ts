export const defaultCode = `import { Table, TableHeader, TableHeaderCell, TableBody, TableCell, TableRow } from '@/components/ui/Table';

export default function Page() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Age</TableHeaderCell>
          <TableHeaderCell>Gender</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>30</TableCell>
          <TableCell>Male</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bill Ben</TableCell>
          <TableCell>28</TableCell>
          <TableCell>Male</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Sophia Smith</TableCell>
          <TableCell>28</TableCell>
          <TableCell>Male</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}`;

export const fixedHeaderCode = `import { Table, TableHeader, TableHeaderCell, TableBody, TableCell, TableRow } from '@/components/ui/ui/Table';

const foodData = [
  { name: 'Apple', price: 1.2, stock: 50, productionDate: '2023-10-01' },
  { name: 'Banana', price: 0.8, stock: 75, productionDate: '2023-09-28' },
  { name: 'Orange', price: 1.0, stock: 60, productionDate: '2023-10-02' },
  { name: 'Milk', price: 2.5, stock: 40, productionDate: '2023-09-30' },
  { name: 'Bread', price: 2.0, stock: 30, productionDate: '2023-10-03' },
  { name: 'Eggs', price: 3.0, stock: 100, productionDate: '2023-10-01' },
  { name: 'Chicken', price: 10.0, stock: 20, productionDate: '2023-09-29' },
  { name: 'Beef', price: 15.0, stock: 15, productionDate: '2023-09-28' },
  { name: 'Pork', price: 12.0, stock: 25, productionDate: '2023-10-02' },
  { name: 'Fish', price: 8.0, stock: 35, productionDate: '2023-09-30' },
  { name: 'Carrot', price: 0.5, stock: 120, productionDate: '2023-10-03' },
  { name: 'Potato', price: 0.3, stock: 150, productionDate: '2023-10-01' },
  { name: 'Tomato', price: 0.7, stock: 100, productionDate: '2023-09-28' },
  { name: 'Cucumber', price: 0.6, stock: 90, productionDate: '2023-10-02' },
  { name: 'Lettuce', price: 0.4, stock: 80, productionDate: '2023-09-30' },
  { name: 'Onion', price: 0.45, stock: 110, productionDate: '2023-10-03' },
  { name: 'Garlic', price: 1.5, stock: 60, productionDate: '2023-10-01' },
  { name: 'Ginger', price: 2.0, stock: 50, productionDate: '2023-09-28' },
  { name: 'Broccoli', price: 1.8, stock: 70, productionDate: '2023-10-02' },
  { name: 'Spinach', price: 1.6, stock: 85, productionDate: '2023-09-30' },
];

export default function Page() {
  return (
    <Table fixedHeader>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Price(€)</TableHeaderCell>
          <TableHeaderCell>Stock</TableHeaderCell>
          <TableHeaderCell>ProductionDate</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {foodData.map((food, index) => (
          <TableRow key={index}>
            {Object.values(food).map((item, key) => (
              <TableCell key={key}>{item}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}`;

export const stripedCode = `import { Table, TableHeader, TableHeaderCell, TableBody, TableCell, TableRow } from '@/components/ui/ui/Table';

const foodData = [
  { name: 'Apple', price: 1.2, stock: 50, productionDate: '2023-10-01' },
  { name: 'Banana', price: 0.8, stock: 75, productionDate: '2023-09-28' },
  { name: 'Orange', price: 1.0, stock: 60, productionDate: '2023-10-02' },
  { name: 'Milk', price: 2.5, stock: 40, productionDate: '2023-09-30' },
  { name: 'Bread', price: 2.0, stock: 30, productionDate: '2023-10-03' },
  { name: 'Eggs', price: 3.0, stock: 100, productionDate: '2023-10-01' },
  { name: 'Chicken', price: 10.0, stock: 20, productionDate: '2023-09-29' },
  { name: 'Beef', price: 15.0, stock: 15, productionDate: '2023-09-28' },
  { name: 'Pork', price: 12.0, stock: 25, productionDate: '2023-10-02' },
  { name: 'Fish', price: 8.0, stock: 35, productionDate: '2023-09-30' },
  { name: 'Carrot', price: 0.5, stock: 120, productionDate: '2023-10-03' },
  { name: 'Potato', price: 0.3, stock: 150, productionDate: '2023-10-01' },
  { name: 'Tomato', price: 0.7, stock: 100, productionDate: '2023-09-28' },
  { name: 'Cucumber', price: 0.6, stock: 90, productionDate: '2023-10-02' },
  { name: 'Lettuce', price: 0.4, stock: 80, productionDate: '2023-09-30' },
  { name: 'Onion', price: 0.45, stock: 110, productionDate: '2023-10-03' },
  { name: 'Garlic', price: 1.5, stock: 60, productionDate: '2023-10-01' },
  { name: 'Ginger', price: 2.0, stock: 50, productionDate: '2023-09-28' },
  { name: 'Broccoli', price: 1.8, stock: 70, productionDate: '2023-10-02' },
  { name: 'Spinach', price: 1.6, stock: 85, productionDate: '2023-09-30' },
];

export default function Page() {
  return (
    <Table fixedHeader>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Price(€)</TableHeaderCell>
          <TableHeaderCell>Stock</TableHeaderCell>
          <TableHeaderCell>ProductionDate</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody striped>
        {foodData.map((food, index) => (
          <TableRow key={index}>
            {Object.values(food).map((item, key) => (
              <TableCell key={key}>{item}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}`;
