import { CellsPage } from '@cells/cells-page';
import { BbvaCoreIntlMixin } from '@bbva-web-components/bbva-core-intl-mixin';
import { html, css } from 'lit-element';

import '@cells-components/cells-template-paper-drawer-panel';
import '@bbva-web-components/bbva-header-main';
import '@boomovie/bbva-navbar-bs/bbva-navbar-bs';
import '@boomovie/bbva-list-discovery-card/bbva-list-discovery-card';

import styles from './home-page-styles.js';
import { GetDiscovery } from '../../elements/movieapi-dm.js';


class HomePage extends BbvaCoreIntlMixin(CellsPage) {
  static get is() {
    return 'home-page';
  }

  static get properties() {
    return {
      Movies: { type: Array },
    };
  }
  constructor() {
    super();
    this.Movies = [];
  }

  _routeEvent(e){
    console.log(e);
    this.navigate(e.detail);
  }

  render() {
    return html`
      <cells-template-paper-drawer-panel mode="seamed">
        <div slot="app__header">
          <bbva-navbar-bs @route-menu-event=${(e) => this._routeEvent(e)}></bbva-navbar-bs>
        </div>

        <div slot="app__main" class="container">
          <bbva-list-discovery-card .discoveryList=${this.Movies}></bbva-list-discovery-card>
        </div>
     </cells-template-paper-drawer-panel>`;
  }

  onPageEnter() {
    if (!this.Movies.length) {
      GetDiscovery().then((movies) => {
        this.Movies = movies;
      });
    }
  }

  onPageLeave() {
    this.Movies = []
  }
  static get styles() {
    return [ styles ];
  }
}

window.customElements.define(HomePage.is, HomePage);
