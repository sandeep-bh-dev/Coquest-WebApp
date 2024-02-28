import Bio from "./Pages/Bio";
import Purpose from "./Pages/Purpose";
import Interests from "./Pages/Interests";
import Layers from "./Pages/Layers";
import RelativeLocation from "./Pages/RelativeLocation";

// Represents the metadata of a particular step in the registration process. 
type RegistrationPage = {
    title: string;
    view: React.ElementType;
}

export const RegistrationPages: RegistrationPage[] = [
    {
        title: "Bio",
        view: Bio,
    },
    {
        title: "Purpose",
        view: Purpose,
    },
    {
        title: "Interests",
        view: Interests,
    },
    {
        title: "Relative location",
        view: RelativeLocation,
    },
    {
        title: "Layers",
        view: Layers,
    },
];

const NUMPAGES = RegistrationPages.length;

export function sanitizePage(page: number) {    
    if(page <= 1) {
        return 1;
    } else if(page > NUMPAGES) {
        return NUMPAGES;
    } else {
        return page
    }
}
