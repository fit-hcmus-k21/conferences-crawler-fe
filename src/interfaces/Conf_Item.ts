export interface Speaker {
    name: string;
    major: string;
    bio_detail: string;
}

export interface Agenda_Day {
    day: string;
}

export interface Timeline {
    link_detail: string;
    agenda_days: Agenda_Day[];
}

export interface Track {
    track_title: string;
}

interface Conf_Item {
    id?: number;
    name: string;
    start_date: string;
    region: string;
    location: string;
    topic: string;
    url: string;
    speakers: Speaker[];
    timeline: Timeline;
    track: Track[];
    register_url: string;
}

export default Conf_Item;