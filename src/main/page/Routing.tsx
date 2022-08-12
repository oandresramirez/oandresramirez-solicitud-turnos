import { Route, Routes, Navigate } from "react-router-dom";
import { IndexSolicitud } from "./index-solicitud/IndexSolicitud";
import { SolicitudTurno } from "./solicitud/SolicitudTurno";

export const Routing: React.FC = () => {

    return (
        <Routes>
            <Route path={"/index-solicitud"} element={<IndexSolicitud />} />
            <Route path={"/solicitud"} element={<SolicitudTurno />} />
            <Route path="*" element={<Navigate replace to="/index-solicitud" />} />
        </Routes>
    );
};
