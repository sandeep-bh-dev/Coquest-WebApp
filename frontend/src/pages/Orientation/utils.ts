import Bio from "./Pages/Bio";
import Purpose from "./Pages/Purpose";
import Interests from "./Pages/Interests";
import Communities from "./Pages/Communities";
import RelativeLocation from "./Pages/RelativeLocation";
import { userModel } from "../../models/userobserver";
import { Motive, Topic, Location } from "../../models/common";

// Represents the metadata of a particular step in the registration process. 
type RegistrationPage = {
    title: string;
    view: React.ElementType;
    dataSetter: any;
}

export const RegistrationPages: RegistrationPage[] = [
    {
        title: "Bio",
        view: Bio,
        dataSetter: (bio: string) => {userModel.biography = bio},
    },
    {
        title: "Purpose",
        view: Purpose,
        dataSetter: (motives: Motive[]) => {userModel.motives = motives},
    },
    {
        title: "Interests",
        view: Interests,
        dataSetter: (topics: Topic[]) => {userModel.topics = topics},
    },
    {
        title: "Relative location",
        view: RelativeLocation,
        dataSetter: (location: Location) => {userModel.location = location},
    },
    {
        title: "Layers",
        view: Communities,
        dataSetter: null,
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
