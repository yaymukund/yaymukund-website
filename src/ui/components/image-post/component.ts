import Component, { tracked } from '@glimmer/component';
import { ART_DIR } from '../../../utils/constants';

export default class ImagePost extends Component {
  @tracked('args')
  get fullUrl(): string {
    let { name, ext } = this.args.image;
    return `${ART_DIR}/${name}.${ext}`;
  }

  @tracked('args')
  get largeUrl(): string {
    let { name, ext } = this.args.image;
    return `${ART_DIR}/${name}-large.${ext}`;
  }
};
