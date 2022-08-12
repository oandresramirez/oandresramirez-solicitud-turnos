import { logo, imgIndexSolicitud } from "../../shared/images/Images"
import { Button, Grid } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export const IndexSolicitud: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="center-logo disenio-icon-index">
                <img src={logo} alt="" />
            </div>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 3, md: 0 }}>
                <Grid item xs={2} md={2} sm={2}></Grid>
                <Grid item xs={10} md={4} sm={4} mb={4}>
                    <div className="content-index">
                        <div className="text-t-1">Solicita tu turno virtual</div>
                        <div className="text-t-2">y realiza todos tus trámites sin filas.</div>


                        <br />
                        <br />
                        <div className="text-t-3">Como solicitar tu turno</div>
                        <br />
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 3, md: 0 }}>
                            <Grid item xs={2} md={1} sm={1}><div className="text-t-4"><div>1</div></div></Grid>
                            <Grid item xs={10} md={11} sm={11}>Selecciona la oficina mas cercana.</Grid>

                            <Grid item xs={12} md={12} sm={12} mb={1}></Grid>

                            <Grid item xs={2} md={1} sm={1} ><div className="text-t-4"><div>2</div></div></Grid>
                            <Grid item xs={10} md={11} sm={11}>Ingresa tus datos.</Grid>

                            <Grid item xs={12} md={12} sm={12} mb={1}></Grid>

                            <Grid item xs={2} md={1} sm={1} ><div className="text-t-4"><div>3</div></div></Grid>
                            <Grid item xs={10} md={11} sm={11}>Selecciona el servicio</Grid>

                            <Grid item xs={12} md={12} sm={12} mb={1}></Grid>

                            <Grid item xs={2} md={1} sm={1} ><div className="text-t-4"><div>4</div></div></Grid>
                            <Grid item xs={10} md={11} sm={11}>Verifica tu información.</Grid>
                        </Grid>

                        <Button className="btn-solicitud" onClick={() => { navigate(`/solicitud`); }}>Solicitar turno</Button>
                    </div>

                </Grid>
                <Grid item xs={12} md={6} sm={6} >
                    <img src={imgIndexSolicitud} alt="" width="100%" />
                </Grid>
            </Grid>


        </>
    )

}