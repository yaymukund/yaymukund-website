import Component, { tracked } from '@glimmer/component';

import { ART_DIR } from '../../../utils/constants';

export default class ImagePost extends Component {
  @tracked('args')
  get thumbnailUrl(): string {
    let { name, ext } = this.args.image;
    return `${ART_DIR}/${name}-th.${ext}`;
  }

  @tracked('args')
  get class(): string {
    return `image-thumbnail ${this.args.selected ? 'selected' : ''}`;
  }

};
