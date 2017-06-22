export default function preloadImage(src: string): Promise<void> {
  let img = new Image();

  return new Promise(resolve => {
    img.onload = () => resolve();
    img.src = src;
  });
}
