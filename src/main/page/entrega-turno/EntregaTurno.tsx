import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { DatosPersonalesType } from '../../entities/types/types-datos-personales/DatosPersonalesType';
import { logo } from '../../shared/images/Images';
import { useNavigate } from 'react-router-dom';

import PdfContainer from '../descargar-pdf/DescargarPdf';
import Doc from '../descargar-pdf/DocService';

import DownloadingIcon from '@mui/icons-material/Downloading';

export const EntregaTurno: React.FC<{ datosTurno: DatosPersonalesType }> = (props) => {

    const navigate = useNavigate();

    const { datosTurno } = props;

    const [open, setOpen] = React.useState(false);
    const [getEstado, setEstado] = React.useState(false);

    const descargarPdf = () => {
        setEstado(true);
        setTimeout(() => {
            setEstado(false);
        }, 1000);
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    if (datosTurno.documento) {
        setTimeout(() => {
            handleClickOpen();
        }, 500);
    }

    const createPdf2 = (html: any) => Doc.createPdf(html);

    return (
        <> 
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogContent>

                    <div className="content-dialog center-logo">
                        <PdfContainer createPdf={createPdf2} estado={getEstado}>
                            <br />
                            <img src={logo} alt="" />

                            <DialogContentText id="alert-dialog-description">
                                <br />
                                <div className='title-dialog'>¡Has solicitado</div>
                                <div className='title-dialog'> tu turno con éxito!</div>
                                <br /> 

                                <div>Nombre:</div>
                                <div><b>{datosTurno.primNombre} {datosTurno.segNombre} {datosTurno.primApellido} {datosTurno.segApellido}</b></div>
                                <br />

                                <div>Sede:</div>
                                <div><b>{datosTurno.sedes.headquarter} - {datosTurno.sedes.direction}</b></div>
                                <br />

                                <div>Servicio:</div>
                                <div><b>Consulta externa</b></div>
                                <br />

                                <div>Día:</div>
                                <div><b>{datosTurno.sedes.appointment}</b></div>
                                <br />

                                <div>Hora:</div>
                                <div><b>{datosTurno.sedes.appointment}</b></div>
                                <br />
                            </DialogContentText>
                        </PdfContainer>

                        <DialogContentText id="alert-dialog-description">
                            <Button variant="outlined" className='btn-solicitud-dialog' onClick={() => { navigate(`/index-solicitud`); }}>
                                Solicitar nuevo turno
                            </Button>
                            <p></p>

                            <Button variant="outlined" className='btn-solicitud-dialog-azul' onClick={() => descargarPdf()}>
                              <DownloadingIcon sx={{mr:2}}/> Descargar turno
                            </Button>
                        </DialogContentText>

                    </div>
                </DialogContent>
                <br />

            </Dialog>







        </>
    );
}
