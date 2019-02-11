import { Component, OnInit } from '@angular/core';

import { FooterLink } from '../footer-link.model';
import { FooterSocialLink } from '../footer-social-link.model';

@Component({
  selector: 'nshmp-template-footer-bottom-navbar',
  templateUrl: './footer-bottom-navbar.component.html',
  styleUrls: ['./footer-bottom-navbar.component.scss']
})
export class FooterBottomNavbarComponent implements OnInit {

  governmentLinks: FooterLink[] = [
    {
      display: 'U.S. Department of the Interior',
      href: 'https://www.doi.gov/'
    },
    {
      display: 'DOI Inspector General',
      href: 'https://www.doioig.gov/'
    },
    {
      display: 'White House',
      href: 'https://www.whitehouse.gov/'
    },
    {
      display: 'E-gov',
      href: 'https://www.whitehouse.gov/omb/management/egov/'
    },
    {
      display: 'No Fear Act',
      href: 'https://www.doi.gov/pmb/eeo/no-fear-act'
    },
    {
      display: 'FOIA',
      href: 'https://www2.usgs.gov/foia'
    }
  ];

  socialLinks: FooterSocialLink[] = [
    {
      iconClass: 'fa-twitter-square',
      href: 'https://twitter.com/usgs',
      tooltipText: 'USGS Twitter'
    },
    {
      iconClass: 'fa-facebook-square',
      href: 'https://facebook.com/usgeologicalsurvey',
      tooltipText: 'USGS Facebook'
    },
    {
      iconClass: 'fa-github',
      href: 'https://github.com/usgs',
      tooltipText: 'USGS GitHub'
    },
    {
      iconClass: 'fa-flickr',
      href: 'https://flickr.com/usgeologicalsurvey',
      tooltipText: 'USGS Flickr'
    },
    {
      iconClass: 'fa-youtube',
      href: 'http://youtube.com/usgs',
      tooltipText: 'USGS YouTube'
    },
    {
      iconClass: 'fa-instagram',
      href: 'https://instagram.com/usgs',
      tooltipText: 'USGS Instagram'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

