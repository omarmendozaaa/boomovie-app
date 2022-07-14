import { CellsPage } from '@cells/cells-page';
import { BbvaCoreIntlMixin } from '@bbva-web-components/bbva-core-intl-mixin';
import { html, css } from 'lit-element';

import '@cells-components/cells-template-paper-drawer-panel';
import '@bbva-web-components/bbva-header-main';

class HomePage extends BbvaCoreIntlMixin(CellsPage) {
  static get is() {
    return 'home-page';
  }

  render() {
    return html`
      <cells-template-paper-drawer-panel mode="seamed">
        <div slot="app__header">
          <bbva-header-main
            text="BBVA">
          </bbva-header-main>
        </div>

        <div slot="app__main" class="container">

        </div>
     </cells-template-paper-drawer-panel>`;
  }
  onPageEnter() {
    // Cada vez que accedamos al login, simulamos una limpieza de los datos almacenados en memoria.
  }

  onPageLeave() {
    // Cada vez que salgamos del login, limpiamos las cajas de texto.
  }

}

window.customElements.define(HomePage.is, HomePage);
