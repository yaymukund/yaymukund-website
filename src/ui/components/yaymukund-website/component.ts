import Component, { tracked } from '@glimmer/component';
import Navigo from 'navigo';
import { IMAGES_DIR, } from '../../../utils/constants';
import Art, { Store }from '../../../utils/art';

// https://github.com/krasimir/navigo/issues/138
const router = new Navigo(location.origin);

export default class YaymukundWebsite extends Component {
  @tracked displayedArtCount: number = 50;
  @tracked currentArt: Art;
  avatarUrl: string = `${IMAGES_DIR}/hair-up-mukund.png`;

  constructor(options) {
    super(options);
    Store.loadData();

    router.on({
      '/art/:name': params => {
        let currentArt = Store.find(params.name);

        if (!currentArt) {
          this.navigateHome();
        } else {
          this.currentArt = currentArt;
        }
      }
    }).resolve();
  }

  @tracked('displayedArtCount')
  get displayedArts(): Art[] {
    return Store.limit(this.displayedArtCount);
  }

  navigateTo(art: Art): void {
    router.navigate(`/art/${art.name}`);
  }

  navigateHome(): void {
    router.navigate('/');
  }
}
