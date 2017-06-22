import Component, { tracked } from '@glimmer/component';

export default class ImagePost extends Component {
  @tracked('args')
  get class(): string {
    return `image-thumbnail ${this.args.selected ? 'selected' : ''}`;
  }
};
