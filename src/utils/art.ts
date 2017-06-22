import { ART_DIR } from './constants';
import artMetadata from './art-metadata';
import preloadImage from './preload-image';

interface ArtMetadata {
  name: string,
  ext: string,
  caption: string,
  width: number,
  height: number,
}

export class Store {
  static data: Art[] = [];
  static loaded: boolean = false;

  static find(name: string): Art {
    return this.data.find(art => art.name === name);
  }

  static loadData(): void {
    this.loaded = true;
    artMetadata.map(art => new Art(art));
  }

  static add(art: Art): void {
    this.data.push(art);
  }

  static limit(count: number): Art[] {
    return this.data.slice(0, count);
  }
}

export default class Art {
  meta: ArtMetadata;
  buffered: boolean = false;
  bufferingPromise: Promise<void>;

  constructor(meta: ArtMetadata) {
    this.meta = meta;
    Store.add(this);
  }

  getUrl(suffix: string = ''): string {
    let { name, ext } = this.meta;
    return `${ART_DIR}/${name}${suffix}.${ext}`;
  }

  buffer(): Promise<void> {
    if (this.bufferingPromise) {
      return this.bufferingPromise;
    }

    this.bufferingPromise = preloadImage(this.largeUrl);

    return this.bufferingPromise.then(() => {
      this.buffered = true;
    });
  }

  get name(): string {
    return this.meta.name;
  }

  get caption(): string {
    return this.meta.caption;
  }

  get width(): number {
    if (this.meta.height < 500) {
      return this.meta.width;
    } else {
      return (this.height / this.meta.height) * this.meta.width;
    }
  }

  get height(): number {
    return Math.min(this.meta.height, 500);;
  }

  get thumbnailUrl(): string {
    return this.getUrl('-th');
  }

  get largeUrl(): string {
    return this.getUrl('-large');
  }

  get fullUrl(): string {
    return this.getUrl();
  }
}
