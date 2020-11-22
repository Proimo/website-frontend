import { AfterViewInit, Component, HostListener } from '@angular/core';
import { MenuItem, MenuItemTypes } from '../../models/menu-item';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterViewInit {
    isExpanded = false;
    buttonItem: MenuItem;
    menuItems: MenuItem[] = [
        {
            title: 'Oferte',
            link: '/oferte',
            type: MenuItemTypes.InternalLink
        },
        {
            title: 'Blog',
            link: 'https://google.com',
            type: MenuItemTypes.ExternalLink,
        },
        {
            title: 'Servicii',
            children: [
                {
                    title: 'Servicii children 1',
                    link: 'https://google.com',
                    type: MenuItemTypes.ExternalLink,
                },
                {
                    title: 'Servicii children 2',
                    link: 'https://google.com',
                    type: MenuItemTypes.ExternalLink,
                }
            ]
        },
        {
            title: 'Vreau să vând',
            link: 'https://google.com',
            type: MenuItemTypes.Button,
        },
    ];

    constructor() {
        this.buttonItem = this.menuItems.find(item => item.type === MenuItemTypes.Button);
        this.menuItems = this.menuItems.filter(item => item.type !== MenuItemTypes.Button);
    }

    ngAfterViewInit() {
        // Add event to cross icon click
        const menuItems = document.getElementById('content');
        menuItems.addEventListener('hidden.bs.collapse', () => {
            this.isExpanded = !this.isExpanded;
        });
    }

    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
        let element = document.querySelector('.fixed-top');
        if (window.pageYOffset > element.clientHeight) {
            element.classList.add('navbar-inverse');
        } else {
            element.classList.remove('navbar-inverse');
        }

        element = document.getElementById('hamburger');
        if (window.pageYOffset > element.clientHeight) {
            element.classList.add('hamburger-black');
        } else {
            element.classList.remove('hamburger-black');
        }
    }
}
