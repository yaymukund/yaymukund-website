import Component, { tracked } from '@glimmer/component';

export default class ImagePost extends Component {
  @tracked
  isBuffered: boolean;

  didInsertElement(): void {
    this.buffer();
  }

  didUpdate(): void {
    this.buffer();
  }

  buffer() {
    if (this.args.art.buffered) {
      return;
    }

    this.isBuffered = false;
    this.args.art.buffer().then(() => {
      this.isBuffered = true;
    });
  }
};
