import Navigo from 'navigo';

interface PageState {
  selectedArt?: string;
  function select(art: string): void;
};

let pageState: PageState = {};

let router: Navigo = new Navigo();

router.on('art/:selectedArt', function(params) {
  pageState.selectedArt = params.selectedArt;
}).resolve();

function navigate(): void {
  router.navigate(...arguments);
};

export default {
  navigate,
  pageState,
};

export {
  navigate,
  pageState
};
