
import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Vorynthia } from "../pages/Vorynthia";
import { Caelundra } from "../pages/Caelundra";
import { Seraphex } from "../pages/Seraphex";
import { Thalomire } from "../pages/Thalomire";
import { Zyventus } from "../pages/Zyventus";
import { Ecliphra } from "../pages/Ecliphra";
import { Morrindael } from "../pages/Morrindael";
import { Lucenthos } from "../pages/Lucenthos";
import { Vesperix } from "../pages/Vesperix";
import { Arunveil } from "../pages/Arunveil";
import { Nyxalor } from "../pages/Nyxalor";
import { Quelindra } from "../pages/Quelindra";
import { Dravethon } from "../pages/Dravethon";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/vorynthia',
        element: <Vorynthia />
    },
    {
        path: '/caelundra',
        element: <Caelundra />
    },
    {
        path: '/seraphex',
        element: <Seraphex />
    },
    {
        path: '/thalomire',
        element: <Thalomire />
    },
    {
        path: '/zyventus',
        element: <Zyventus />
    },
    {
        path: '/ecliphra',
        element: <Ecliphra />
    },
    {
        path: '/morrindael',
        element: <Morrindael />
    },
    {
        path: '/lucenthos',
        element: <Lucenthos />
    },
    {
        path: '/vesperix',
        element: <Vesperix />
    },
    {
        path: '/arunveil',
        element: <Arunveil />
    },
    {
        path: '/nyxalor',
        element: <Nyxalor />
    },
    {
        path: '/quelindra',
        element: <Quelindra />
    },
    {
        path: '/dravethon',
        element: <Dravethon />
    }
])