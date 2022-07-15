import { CellsPage } from '@cells/cells-page';
import { BbvaCoreIntlMixin } from '@bbva-web-components/bbva-core-intl-mixin';
import { html, css } from 'lit-element';

import '@cells-components/cells-template-paper-drawer-panel';
import '@bbva-web-components/bbva-header-main';
import '@boomovie/bbva-navbar-bs/bbva-navbar-bs';
import '@boomovie/bbva-list-discovery-card/bbva-list-discovery-card';
import '@boomovie/bbva-movie-detail-bs/bbva-movie-detail-bs'

import { GetDiscovery, GetMovie } from '../../elements/movieapi-dm.js';


class MoviePage extends BbvaCoreIntlMixin(CellsPage) {
  static get is() {
    return 'movie-page';
  }

  static get properties() {
    return {
      Movie: { type: Object },
    };
  }
  constructor() {
    super();
    this.Movie = {};
  }

  _routeEvent(e){
    console.log(e);
    this.navigate(e);
  }

  render() {
    return html`
      <cells-template-paper-drawer-panel mode="seamed">
        <div slot="app__header">
          <bbva-navbar-bs @route-menu-event=${(e) => this._routeEvent(e.detail)}></bbva-navbar-bs>
        </div>

        <div slot="app__main" class="container">
          <bbva-movie-detail-bs .movie=${this.Movie} ></bbva-movie-detail-bs>
        </div>
     </cells-template-paper-drawer-panel>`;
  }

  onPageEnter() {
    if (this.Movie) {
      GetMovie(this.params.id).then((movie) => {
        this.Movie = movie;
      });
    }
  }

  onPageLeave() {
    this.movie = {}
  }
}

window.customElements.define(MoviePage.is, MoviePage);
