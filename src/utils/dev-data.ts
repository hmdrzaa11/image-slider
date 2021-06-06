import image1 from "../images/dylan-shaw-5xO4vH_Mt0E-unsplash.jpg";
import image2 from "../images/nicolas-hans-exK3gUWyN9g-unsplash.jpg";
import image3 from "../images/paul-gilmore-oc-PqSYz7UU-unsplash (1).jpg";
import image4 from "../images/yelena-vakker-6VMXAUuoRQ4-unsplash.jpg";

export interface Image {
  url: string;
}

export let images: Image[] = [
  {
    url: image1,
  },
  {
    url: image2,
  },
  {
    url: image3,
  },
  {
    url: image4,
  },
];
