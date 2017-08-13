export const RIGHT_ARROW = 39;
export const LEFT_ARROW = 37;

const ROOT = document.querySelector('body');

export function onKeydown(key: number, fn: Function) {
  ROOT.addEventListener('keydown', e => {
    if (e.which === key) {
      fn();
    }
  });
}
