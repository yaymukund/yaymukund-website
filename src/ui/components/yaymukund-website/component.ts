import Component, { tracked } from '@glimmer/component';
import art, {
  findArtByName,
  ArtMetadata
} from './-utils/art';
import Navigo from 'navigo';
import { IMAGES_DIR, } from '../../../utils/constants';

// https://github.com/krasimir/navigo/issues/138
const router = new Navigo(location.origin);

export default class YaymukundWebsite extends Component {
  @tracked art: ArtMetadata[] = art;
  @tracked displayedImageCount: number = 50;
  @tracked currentArt: ArtMetadata;
  avatarUrl: string = `${IMAGES_DIR}/hair-up-mukund.png`;

  constructor(options) {
    super(options);

    router.on({
      '/art/:name': params => {
        let currentArt = findArtByName(params.name);

        if (!currentArt) {
          this.navigateHome();
        } else {
          this.currentArt = currentArt;
        }
      }
    }).resolve();
  }

  @tracked('art', 'displayedImageCount')
  get displayedImages(): ArtMetadata[] {
    return this.art.slice(0, this.displayedImageCount);
  }

  navigateTo(art: ArtMetadata): void {
    router.navigate(`/art/${art.name}`);
  }

  navigateHome(): void {
    router.navigate('/');
  }
}
