import { Headquarters } from "../../entities/types/types-sedes/SedeType";

export const sedes = () => {
    const result: Headquarters[] =
        [{
            headquarter: "Farmacia Cruz Verde",
            direction: "Dg. 65 #25-50",
            appointment: "10/08/2022",
            appointmentTime: "08:02 am",
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7965.626815320219!2d-76.52300007585777!3d3.3956740401130965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a17fdd9a7669%3A0x5b8456516a1eb50d!2sFarmacia%20Cruz%20Verde!5e0!3m2!1ses-419!2sco!4v1660189676846!5m2!1ses-419!2sco"
        },
        {
            headquarter: "Cruz Verde",
            direction: "Cra. 56 #15-2",
            appointment: "10/08/2021",
            appointmentTime: "10:02 am",
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15931.224376943475!2d-76.53013127322369!3d3.397446710431583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a163df36cddf%3A0x215d0e5dde8e39be!2sCruz%20Verde!5e0!3m2!1ses-419!2sco!4v1660192014054!5m2!1ses-419!2sco"

        },
        {
            headquarter: "Farmacia Cruz Verde Tequendama",
            direction: "Cra. 44 #8 A 09 Local 2",
            appointment: "10/08/2022",
            appointmentTime: "08:02 am",
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31862.38271733829!2d-76.54856888258166!3d3.3994463916320417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6a6c713ca1b%3A0x72f06a6021856378!2sFarmacia%20Cruz%20Verde%20Tequendama!5e0!3m2!1ses-419!2sco!4v1660233008289!5m2!1ses-419!2sco"
        }];
    return result;
};