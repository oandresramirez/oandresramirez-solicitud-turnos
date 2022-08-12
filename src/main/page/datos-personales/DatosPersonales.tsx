import * as React from 'react';
import { Button, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import { imgDatosFom } from "../../shared/images/Images";
import Input from '@mui/material/Input';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DatosPersonalesType } from '../../entities/types/types-datos-personales/DatosPersonalesType';


const ariaLabel = { 'aria-label': 'description' };

export const DatosPersonales: React.FC<{ sedes: any }> = (props) => {
    const { sedes } = props;

    const [getDatosP, setDatosP] = React.useState<DatosPersonalesType>(
        {
            tipoDocumento: '',
            documento: '',
            primNombre: '',
            segNombre: '',
            primApellido: '',
            segApellido: '',
            sedes: {
                headquarter: '',
                direction: '',
                appointment: '',
                appointmentTime: '',
                location: ''
            }
        }
    );

    const handleInputChange = (event: any) => {
        setDatosP({
            ...getDatosP,
            [event.target.name]: event.target.value
        })
    }

    
    return (
        <>
            <br /><br /><br /><br />
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 3, md: 0 }}>
                <Grid item xs={0} md={1} sm={1}></Grid>
                <Grid item xs={12} md={11} sm={11}>
                    <div className="title-form">Ingresa tus datos</div>
                </Grid>

                <Grid item xs={0} md={1} sm={1}></Grid>

                <Grid item xs={12} md={4} sm={4} mb={6}>
                    <FormControl variant="standard" sx={{ m: 1, width: '94%' }}>
                        <InputLabel id="demo-simple-select-standard-label">Tipo de documento</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={getDatosP.tipoDocumento}
                            label="Tipo de documento"
                            onChange={handleInputChange} name="tipoDocumento">
                            <MenuItem value='CC'>Cedula de ciudadania</MenuItem>
                            <MenuItem value='TI'>Tarjeta de identidad</MenuItem>
                        </Select>
                    </FormControl>
                    <p></p>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 3, md: 0 }}>
                        <Grid item xs={12} md={12} sm={12}>
                            <Input placeholder="Numero de documento" inputProps={ariaLabel} sx={{ width: '100%' }} value={getDatosP.documento} onChange={handleInputChange} name="documento" />
                        </Grid>

                        <Grid item xs={12} md={5.9} sm={12} mr={1}>
                            <Input placeholder="Primer nombre" inputProps={ariaLabel} sx={{ width: '100%' }} value={getDatosP.primNombre} onChange={handleInputChange} name="primNombre" />
                        </Grid>
                        <Grid item xs={12} md={5.9} sm={12}>
                            <Input placeholder="Segundo nombre" inputProps={ariaLabel} sx={{ width: '100%' }} value={getDatosP.segNombre} onChange={handleInputChange} name="segNombre" />
                        </Grid>
                        <Grid item xs={12} md={5.9} sm={12} mr={1}>
                            <Input placeholder="Primer apellido" inputProps={ariaLabel} sx={{ width: '100%' }} value={getDatosP.primApellido} onChange={handleInputChange} name="primApellido" />
                        </Grid>
                        <Grid item xs={12} md={5.9} sm={12}>
                            <Input placeholder="Segundo apellido" inputProps={ariaLabel} sx={{ width: '100%' }} value={getDatosP.segApellido} onChange={handleInputChange} name="segApellido" />
                        </Grid>
                        <br />
                    </Grid>

                    <List>
                        <ListItem alignItems="flex-start">
                            <ListItemText
                                primary={sedes.headquarter}
                                secondary={
                                    <React.Fragment>

                                        {sedes.direction}
                                        <div></div>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Horario:
                                        </Typography>

                                        {` ${sedes.appointment} - ${sedes.appointmentTime}`}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </List>

                    <div className='center-btn-sig'>
                        <Button className="btn-solicitud">Siguiente</Button>
                    </div>


                </Grid>
                <Grid item xs={0} md={1} sm={1}></Grid>
                <Grid item xs={12} md={5} sm={5}>
                    <img src={imgDatosFom} alt="" width="100%" />
                </Grid></Grid>

        </>
    );
}