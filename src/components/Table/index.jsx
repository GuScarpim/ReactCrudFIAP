import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button
} from '@mui/material';

function createData(id, name, email, product, price) {
  return { id, name, email, product, price };
}

const rows = [
  createData(1, 'Frozen yoghurt', 159, 6.0, 24),
  createData(2, 'Ice cream sandwich', 237, 9.0, 37),
  createData(3, 'Eclair', 262, 16.0, 24),
  createData(4, 'Cupcake', 305, 3.7, 67),
  createData(5, 'Gingerbread', 356, 16.0, 49),
];

export default function TableComponent() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Produto</TableCell>
            <TableCell>Preço</TableCell>
            <TableCell align="center">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.product}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell align="center">
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                  <Button variant="contained" color="primary" size="small">
                    Visualizar
                  </Button>
                  <Button variant="contained" color="success" size="small">
                    Cadastrar
                  </Button>
                  <Button variant="contained" color="secondary" size="small">
                    Editar
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
