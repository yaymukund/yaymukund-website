import Component, { tracked } from '@glimmer/component';

const ART_DIR: string = '/art';

export default class ImagePost extends Component {
  @tracked('args')
  get thumbnailUrl(): string {
    let { name, ext } = this.args.image;
    return `${ART_DIR}/${name}-th.${ext}`;
  }
};
