import Component, { tracked } from "@glimmer/component";
import art, { ArtMetadata } from './-utils/art';

export default class YaymukundWebsite extends Component {
  @tracked art: ArtMetadata[] = art;
  @tracked displayedImageCount: number = 5;

  @tracked('art', 'displayedImageCount')
  get displayedImages(): ArtMetadata[] {
    return this.art.slice(0, this.displayedImageCount);
  }
}
