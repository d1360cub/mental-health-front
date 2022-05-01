/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { Avatar, Grid, Typography } from '@mui/material';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import sweetalert from 'sweetalert';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import { showAllUsers } from '../../store/actions';
import { deleteUser } from '../../services/user';
import 'bootstrap/dist/css/bootstrap.min.css';
import './viewerAdmin.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.info.dark,
    color: theme.palette.common.white,
    fontSize: 18,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#eaf2f8',
  },

  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  // const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const radios = [
    { name: 'Usuarios', value: '1' },
    { name: 'citas', value: '2' },
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  function removeUser(nombre, id) {
    sweetalert({
      title: 'Confirmacion',
      text: `Esta seguro de eliminar al usuario ${nombre} con el id ${id}`,
      icon: 'info',
      buttons: ['Cancelar', 'Continuar'],
    }).then((respuesta) => {
      if (respuesta) {
        deleteUser(id);
        dispatch(showAllUsers());
      }
    });
  }
  useEffect(() => {
    dispatch(showAllUsers());
  }, []);
  return (
    <div style={{ margin: '100px auto 50px', width: '80%', display: 'grid', gap: '25px' }}>
      <div className="mx-0" style={{ textAlign: 'center' }}>
        <ButtonGroup style={{ margin: ' 0 auto' }}>
          {radios.map((radio, idx) => (
            <ToggleButton
              // eslint-disable-next-line react/no-array-index-key
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={idx % 2 ? 'outline-primary' : 'outline-primary'}
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
      <div className="table-responsive" style={{ border: '1px solid black', borderRadius: 8 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 768 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Nombre</StyledTableCell>
                <StyledTableCell align="left">Email</StyledTableCell>
                <StyledTableCell align="left">Telefono</StyledTableCell>
                <StyledTableCell align="left">Rol</StyledTableCell>
                <StyledTableCell align="left">Estado</StyledTableCell>
                <StyledTableCell align="left">Eliminar</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <StyledTableRow key={row._id}>
                  <StyledTableCell component="th" scope="row">
                    <Grid container>
                      <Grid item lg={2}>
                        <Avatar alt={row.firstName} src="." style={{ backgroundColor: ' #3498db ' }} />
                      </Grid>
                      <Grid item lg={10}>
                        {`${row.firstName} ${row.lastName}`}
                      </Grid>
                    </Grid>
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.email}</StyledTableCell>
                  <StyledTableCell align="left">{row.phone}</StyledTableCell>
                  <StyledTableCell align="left">{row.role}</StyledTableCell>
                  <StyledTableCell align="left">
                    <Typography
                      style={{
                        backgroundColor:
                      ((`${row.isActive}` === 'true' && 'green')
                      || (`${row.isActive}` === 'false' && 'red')),
                        fontSize: '1.3rem',
                        borderRadius: 8,
                        color: 'white',
                        padding: '3px 10px',
                        fontWeight: 'auto',
                        display: 'inline-block',
                      }}
                    >
                      {`${row.isActive}`}

                    </Typography>
                    {' '}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <DeleteForeverSharpIcon
                      fontSize="large"
                      color="black"
                      style={{ cursor: 'pointer' }}
                      onClick={() => removeUser(`${row.firstName} ${row.lastName}`, row._id)}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
          <div style={{ background: 'yellow', fontSize: '30px' }}>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={users.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              style={{ background: '#eaf2c4' }}
              align="rigth"
            />
          </div>
        </TableContainer>
      </div>
    </div>
  );
}
