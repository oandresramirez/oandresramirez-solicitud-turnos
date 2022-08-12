import * as React from 'react';
import { imgDatosFom, logo, logoNetux } from "../../shared/images/Images"

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FormControl, Grid, Input, InputLabel, MenuItem, Select } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Swal from 'sweetalert2';
import { Headquarters } from '../../entities/types/types-sedes/SedeType';
import { sedes } from '../../shared/datos-sedes/Sedes';
import { DatosPersonalesType } from '../../entities/types/types-datos-personales/DatosPersonalesType';
import { crearTurnoS } from '../../shared/api/turnos/Turnos';
import { SearchAppBar } from '../search/Search';
import { EntregaTurno } from '../entrega-turno/EntregaTurno';

const drawerWidth = 340;

const ariaLabel = { 'aria-label': 'description' };

export const SolicitudTurno: React.FC = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set<number>());
    const steps = ['', '', ''];

    const [getLocation, setLocation] = React.useState<string>('');

    const [getHeadquarters, setHeadquarters] = React.useState<Headquarters>();


    const locationM = (item: string) => {
        setLocation(item);
    }

    const headquartersM = (headquartersT: Headquarters) => {
        setHeadquarters(headquartersT);
    }
    const isStepOptional = (step: number) => {
        return step === 1;
    };

    const isStepSkipped = (step: number) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        if (getHeadquarters?.headquarter) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
            setSkipped(newSkipped);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debe seleccionar al menos una Sede.',
            })
        }



    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const resultSedes = sedes();

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


    function uncheck(location: string, headquarters: Headquarters) {
        var checkbox0: any = document.getElementById("id_0");
        var checkbox1: any = document.getElementById("id_1");
        var checkbox2: any = document.getElementById("id_2");
        var checkbox3: any = document.getElementById("id_3");
        var checkbox4: any = document.getElementById("id_4");
        const headquartersV: Headquarters = { headquarter: '', direction: '', appointment: '', appointmentTime: '', location: '' }

        checkbox0.onclick = function () {
            if (checkbox0.checked !== false) {
                checkbox1.checked = null;
                checkbox2.checked = null;
                checkbox3.checked = null;
                checkbox4.checked = null;
            } else {
                headquartersM(headquartersV);
                locationM('');
            }
        }
        if (checkbox0.checked) { locationM(location); headquartersM(headquarters); }
        checkbox1.onclick = function () {
            if (checkbox1.checked !== false) {
                checkbox0.checked = null;
                checkbox2.checked = null;
                checkbox3.checked = null;
                checkbox4.checked = null;
            } else {
                headquartersM(headquartersV);
                locationM('');
            }
        }
        if (checkbox1.checked) { locationM(location); headquartersM(headquarters); }
        checkbox2.onclick = function () {
            if (checkbox2.checked !== false) {
                checkbox0.checked = null;
                checkbox1.checked = null;
                checkbox3.checked = null;
                checkbox4.checked = null;
            } else {
                headquartersM(headquartersV);
                locationM('');
            }
        }
        if (checkbox2.checked) { locationM(location); headquartersM(headquarters); }
        checkbox3.onclick = function () {
            if (checkbox3.checked !== false) {
                checkbox0.checked = null;
                checkbox1.checked = null;
                checkbox2.checked = null;
                checkbox4.checked = null;
            } else {
                headquartersM(headquartersV);
                locationM('');
            }
        }
        if (checkbox3.checked) { locationM(location); headquartersM(headquarters); }
        checkbox4.onclick = function () {
            if (checkbox4.checked !== false) {
                checkbox0.checked = null;
                checkbox1.checked = null;
                checkbox2.checked = null;
                checkbox3.checked = null;
            } else {
                headquartersM(headquartersV);
                locationM('');
            }
        }
        if (checkbox4.checked) { locationM(location); headquartersM(headquarters); }
    }

    const crearTurno = async () => {
        if (
            getDatosP.tipoDocumento && getDatosP.documento && getDatosP.primNombre &&
            getDatosP.segNombre && getDatosP.primApellido && getDatosP.segApellido
        ) {
            getDatosP.sedes = {
                headquarter: getHeadquarters?.headquarter ?? '',
                direction: getHeadquarters?.direction ?? '',
                appointment: getHeadquarters?.appointment ?? '',
                appointmentTime: getHeadquarters?.appointmentTime ?? '',
                location: getHeadquarters?.location ?? ''
            }
            await crearTurnoS(getDatosP).then(() => {

                let newSkipped = skipped;
                if (isStepSkipped(activeStep)) {
                    newSkipped = new Set(newSkipped.values());
                    newSkipped.delete(activeStep);
                }

                setActiveStep((prevActiveStep) => prevActiveStep + 1);
                setSkipped(newSkipped);
            }).catch(error => {
                console.log("Error: ", error);
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son obligarorios',
            })
        }
    }
    return (
        <>

            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Toolbar>
                        <div className="navb-solicitud-turno">
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 3, md: 0 }}>
                                <Grid item xs={12} md={4} sm={4}>
                                    <div className="center-logo disenio-icon-index-2">
                                        <img src={logo} alt="" />
                                    </div>
                                </Grid>

                                <Grid item xs={2} md={1} sm={1}>
                                    <p></p>
                                    {activeStep === 0 ? (
                                        <Button
                                            disabled={true}
                                            onClick={handleBack}
                                            sx={{ mr: 1, color: 'black' }}
                                        >
                                            <ArrowBackIcon /> Atras
                                        </Button>
                                    ) : (
                                        <Button
                                            onClick={handleBack}
                                            sx={{ mr: 1, color: 'black' }}
                                        >
                                            <ArrowBackIcon /> Atras
                                        </Button>
                                    )}
                                </Grid>

                                <Grid item xs={8} md={6} sm={7}>
                                    <p></p>
                                    <Stepper activeStep={activeStep}>
                                        {steps.map((label, index) => {
                                            const stepProps: { completed?: boolean } = {};
                                            const labelProps: {
                                                optional?: React.ReactNode;
                                            } = {};
                                            if (isStepOptional(index)) {
                                                labelProps.optional = (
                                                    <Typography variant="caption"></Typography>
                                                );
                                            }
                                            if (isStepSkipped(index)) {
                                                stepProps.completed = false;
                                            }
                                            return (
                                                <Step key={`stp_${index}`} {...stepProps}>
                                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                                </Step>
                                            );
                                        })}
                                    </Stepper>
                                </Grid>
                                <Grid item xs={2} md={1} sm={1}>
                                    <p></p>
                                    <img src={logoNetux} width="80%" alt="" />
                                </Grid>
                            </Grid>
                        </div>
                    </Toolbar>
                </AppBar>
                {activeStep === 0 && (
                    <Drawer
                        variant="permanent"
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                            flexGrow: 1, p: 3
                        }}
                    >
                        <Toolbar />
                        <Box sx={{ overflow: 'auto', flexGrow: 1 }} style={{ paddingTop: 100 }}>
                            <List>
                                <div className='title-solic'>Selecciona la</div>
                                <div></div>
                                <div className='title-solic'>oficina mas cercana</div>
                                <p></p>
                                <SearchAppBar />
                            </List>
                            <List>
                                {resultSedes.map((text, index) => (
                                    <>
                                        <ListItem alignItems="flex-start" key={`key_${index}`}>
                                            <input type="checkbox" id={`id_${index}`} onClick={() => { uncheck(text.location, text) }} name={`check${index}`} />

                                            <ListItemText
                                                primary={text.headquarter}
                                                secondary={
                                                    <React.Fragment>

                                                        {text.direction}
                                                        <div></div>
                                                        <Typography
                                                            sx={{ display: 'inline' }}
                                                            component="span"
                                                            variant="body2"
                                                            color="text.primary"
                                                        >
                                                            Horario:
                                                        </Typography>

                                                        {` ${text.appointment} - ${text.appointmentTime}`}
                                                    </React.Fragment>
                                                }
                                            />
                                        </ListItem>
                                        <Divider component="li" />
                                    </>
                                )
                                )}
                            </List>
                            <Button className="btn-solicitud" onClick={handleNext}>Seleccionar</Button>
                        </Box>

                    </Drawer>)}
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />

                    {getLocation && activeStep === 0 && (
                        <iframe src={getLocation} className='map-g' title="myFrame" />
                    )
                    }

                    {!getLocation && activeStep === 0 && (
                        <h1>Debe seleccionar una sede</h1>
                    )}

                    {activeStep === 1 && (
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
                                                primary={getHeadquarters?.headquarter}
                                                secondary={
                                                    <React.Fragment>

                                                        {getHeadquarters?.direction}
                                                        <div></div>
                                                        <Typography
                                                            sx={{ display: 'inline' }}
                                                            component="span"
                                                            variant="body2"
                                                            color="text.primary"
                                                        >
                                                            Horario:
                                                        </Typography>

                                                        {` ${getHeadquarters?.appointment} - ${getHeadquarters?.appointmentTime}`}
                                                    </React.Fragment>
                                                }
                                            />
                                        </ListItem>
                                    </List>

                                    <div className='center-btn-sig'>
                                        <Button className="btn-solicitud" onClick={crearTurno}>Siguiente</Button>
                                    </div>


                                </Grid>
                                <Grid item xs={0} md={1} sm={1}></Grid>
                                <Grid item xs={12} md={5} sm={5}>
                                    <img src={imgDatosFom} alt="" width="100%" />
                                </Grid></Grid>

                        </>
                    )}


                    {activeStep === 2 && getDatosP.documento && (
                        <>
                            <EntregaTurno datosTurno={getDatosP} />
                        </>
                    )}
                </Box>
            </Box>

            {activeStep === steps.length ?? (
                <React.Fragment>

                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Terminar</Button>
                    </Box>
                </React.Fragment>
            )}

        </>
    )
}




