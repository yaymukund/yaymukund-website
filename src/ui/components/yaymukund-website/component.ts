import Component, { tracked } from '@glimmer/component';
import Navigo from 'navigo';
import { IMAGES_DIR, } from '../../../utils/constants';
import Art, { Store }from '../../../utils/art';
import {
  onKeydown,
  RIGHT_ARROW,
  LEFT_ARROW
} from '../../../utils/keyboard';

// https://github.com/krasimir/navigo/issues/138
const router = new Navigo(location.origin);

export default class YaymukundWebsite extends Component {
  @tracked displayedArtCount: number = 50;
  @tracked currentArt: Art;
  avatarUrl: string = `${IMAGES_DIR}/hair-up-mukund.png`;

  constructor(options) {
    super(options);
    Store.loadData();

    onKeydown(LEFT_ARROW, () => {
      let art: Art = Store.before(this.currentArt);
      this.navigateTo(art);
    });

    onKeydown(RIGHT_ARROW, () => {
      let art: Art = Store.after(this.currentArt);
      this.navigateTo(art);
    });

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
