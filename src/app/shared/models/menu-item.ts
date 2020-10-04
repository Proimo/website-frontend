export interface MenuItem {
    title: string;
    children?: MenuItem[];
    link?: string;
    type?: MenuItemTypes;
}

export enum MenuItemTypes {
    ExternalLink = 'ExternalLink',
    InternalLink = 'InternalLink',
    Button = 'Button'
}
