/* 
Calling code of a Model's business logic can request the depth of the data of interest, controlling how much of the component instances 
to return from the back-end's object manager, Mongoose.

Depth-varying properties are documented as 'expandable' properties.

By default, the properties are curtailed, or more simply, not expanded; curtailed properties solely return the ID of the containing objects.
*/

export enum Topic {
    SPORTS = "SPORTS",
    ARTS = "ARTS",
    MUSIC = "MUSIC",
    GENERATIVE_ART = "GENERATIVE_ART",
    BASKETBALL = "BASEBALL",
}

export enum Motive {
    VOLUNTEER = "VOLUNTEER",
    INITIATER = "INITIATER",
    ORGANIZER = "ORGANIZER",
    SPECTATER = "SPECTATER",
}

export type Location = {
    lat: number;
    lng: number;
}

export type Image = {
    // Mime type of Image as defined by IANA
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
    contentType: String;
    path: String;
}

export type Skill = {
    skillName: String;
    skillLevel: String;
}

export type Badge = {
    badgeName: String
    badgeDescription: String
}

export type Recommendations = {
    name: String
    comment: String
}
