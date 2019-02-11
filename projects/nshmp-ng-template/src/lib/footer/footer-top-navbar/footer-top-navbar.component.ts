import { Component, OnInit } from '@angular/core';
import { FooterLink } from '../footer-link.model';

@Component({
  selector: 'nshmp-template-footer-top-navbar',
  templateUrl: './footer-top-navbar.component.html',
  styleUrls: ['./footer-top-navbar.component.scss']
})
export class FooterTopNavbarComponent implements OnInit {

  footerLinks: FooterLink[] = [
    {
      display: 'DOI Privacy Policy',
      href: 'https://www.doi.gov/privacy'
    },
    {
      display: 'Legal',
      href: 'https://www.usgs.gov/laws/policies_notices.html'
    },
    {
      display: 'Accessibility',
      href: 'https://www2.usgs.gov/laws/accessibility.html'
    },
    {
      display: 'Contact USGS',
      href: 'https://answers.usgs.gov/'
    },
    {
      display: 'Site Map',
      href: 'https://www.usgs.gov/sitemap.html'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
