
import axios from 'axios';
import { DatosPersonalesType } from '../../../entities/types/types-datos-personales/DatosPersonalesType';




export const crearTurnoS = async (datos: DatosPersonalesType) => {
    try {
        const { data } = await axios.post<DatosPersonalesType>(
            'https://62b2448ec7e53744afca3372.mockapi.io/api/turnos', datos,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            },
        );
        console.log('-------->', JSON.stringify(data, null, 4));
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}


