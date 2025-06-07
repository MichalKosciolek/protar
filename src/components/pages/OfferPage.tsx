import { Box, Typography, Stack } from "@mui/material";

import OfferSection from "./OfferSection";

import GeneralImg from "../../assets/tmp.png";
import ElectroImg from "../../assets/tmp.png";
import SteelImg from "../../assets/tmp.png";
import TransportImg from "../../assets/tmp.png";

const sections = [
    {
        title: "Budownictwo ogólne",
        image: GeneralImg,
        points: [
            "Budynki wielorodzinne",
            "Domy jednorodzinne",
            "Różnego typu obiekty przemysłowe",
            "Roboty wykończeniowe",
            "Roboty instalacyjne",
            "Rozbudowa, przebudowa, adaptacja istniejących obiektów",
            "Place, parkingi, drogi dojazdowe",
        ],
    },
    {
        title: "Usługi w elektroenergetyce",
        image: ElectroImg,
        points: [
            "Montaż linii kablowych i napowietrznych nN i SN",
            "Instalacje elektryczne",
            "Instalacje odgromowe",
            "Pomiary elektryczne",
            "Budowa oświetlenia drogowego",
            "Iluminacje obiektów",
            "Projektowanie branży elektrycznej i elektroenergetycznej",
            "Kosztorysowanie branży elektrycznej",
        ],
    },
    {
        title: "Obróbka stali",
        image: SteelImg,
        points: [
            "Konstrukcje stalowe",
            "Ogrodzenia",
            "Schody, balustrady",
            "Manufaktura stalowa (elementy na zamówienie)",
        ],
    },
    {
        title: "Usługi sprzętowo-transportowe",
        image: TransportImg,
        points: [
            "Transport HDS",
            "Usługi koparkami",
            "Usługi koparko-ładowarkami",
            "Transport materiałów sypkich",
            "Transport naczepą niskopodwoziową",
            "Transport lawetą (pomoc drogowa 9 ton)",
            "Usługi dźwigowe (18 ton)",
        ],
    },
];

function OfferPage() {
    return (
        <Box sx={{ padding: { xs: 2, md: 6 }, marginTop: "80px" }}>
            <Stack spacing={4}>
                {sections.map((section, idx) => (
                    <OfferSection key={idx} {...section} />
                ))}
            </Stack>
        </Box>
    );
}

export default OfferPage;
