import { CellsPage } from '@cells/cells-page';
import { BbvaCoreIntlMixin } from '@bbva-web-components/bbva-core-intl-mixin';
import { html, css } from 'lit-element';

import '@cells-components/cells-template-paper-drawer-panel';
import '@bbva-web-components/bbva-header-main';
import '@boomovie/bbva-navbar-bs/bbva-navbar-bs';
import '@boomovie/bbva-list-movie-card/bbva-list-movie-card';

import { GetDiscovery } from '../../elements/movieapi-dm.js';


class MoviesPage extends BbvaCoreIntlMixin(CellsPage) {
  static get is() {
    return 'movies-page';
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
          <bbva-list-movie-card .movieList=${this.Movies}></bbva-list-movie-card>
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

}

window.customElements.define(MoviesPage.is, MoviesPage);
