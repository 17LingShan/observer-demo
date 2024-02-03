import { addBoxItem } from "./actions";

export const imgObserver = new IntersectionObserver(
  (entries) => {
    for (let entry of entries) {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.src =
          img.dataset.src ||
          "https://i.pximg.net/img-original/img/2023/12/02/00/09/13/113872654_p0.jpg";
        imgObserver.unobserve(img);
      }
    }
  },
  {
    threshold: 0.9,
  }
);

export const loadingObserver = new IntersectionObserver(
  (entries) => {
    for (let entry of entries) {
      if (entry.isIntersecting) {
        setTimeout(() => {
          addBoxItem(20);
        }, 500);
      }
    }
  },
  {
    threshold: 0.5,
  }
);
