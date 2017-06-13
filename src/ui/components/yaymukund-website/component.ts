import Component, { tracked } from "@glimmer/component";

interface ArtMetadata {
  filename: string,
  caption: string,
}

export default class YaymukundWebsite extends Component {
  @tracked images: ArtMetadata[] = [];
  @tracked displayedImageCount: number = 5;

  @tracked('images', 'displayedImageCount')
  get displayedImages(): ArtMetadata[] {
    return this.images.slice(0, this.displayedImageCount);
  }

  async fetchImages() {
    let response: Response = await fetch('art.json');
    this.images = await response.json();
  }

  constructor(options) {
    super(options);
    this.fetchImages();
  }
}
