export interface HeaderLinks {
    href: string;
    label: string;
}

export interface HeaderData {   
    logo: string;
    links: HeaderLinks[];
    cta:HeaderLinks;
}