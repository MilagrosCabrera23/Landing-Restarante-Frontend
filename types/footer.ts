export interface SocialLinkProps {
  href: string;
  icon: 'instagram' | 'facebook' | 'whatsapp' | 'googleMaps';
}

export interface FooterData {
    logo: string;
    copyright: string;
    redesSociales: {
        plataforma: 'instagram' | 'facebook' | 'whatsapp' | 'googleMaps';
        url: string;
    }[];
}