export interface ArtMetadata {
  name: string,
  ext: string,
  caption: string,
}

const art: ArtMetadata[] = [{
  name: "p-model",
  ext: "png",
  caption: "watercolor of the band p-model. from left to right: sadatoshi tainaka, susumu hirasawa, katsuhiko akiyama, yasumi tanaka"
}, {
  name: "kitty",
  ext: "png",
  caption: "watercolor sketch of kate's kitty"
}, {
  name: "animal-family",
  ext: "jpg",
  caption: "drawing of animal family portrait with an african fox, massive elk, macaque, and cute doggie"
}, {
  name: "folasade",
  ext: "jpg",
  caption: "drawing of three people with stretched faces. the biggest portrait is my friend folasade"
}, {
  name: "water-buffalo",
  ext: "jpg",
  caption: "ballpoint portrait of ancient-looking wild water buffalo"
}, {
  name: "jelani",
  ext: "jpg",
  caption: "ballpoint portrait of journalist and historian jelani cobb"
}, {
  name: "sinthujan",
  ext: "jpg",
  caption: "Sinthujan Varatharajah hugging his knees sitting on rocks but the rocks aren't in the drawing"
}, {
  name: "self-portrait",
  ext: "jpg",
  caption: "ballpoint+nail polish drawing of holding my cheeks and rolling my eyes until you can only see the whites"
}, {
  name: "bernese",
  ext: "jpg",
  caption: "pen portrait of a bernese mountain dog (we think)"
}, {
  name: "theriot",
  ext: "jpg",
  caption: "ballpoint drawing of Bayanihan's cute pup theriot looking up"
}, {
  name: "stranger",
  ext: "jpg",
  caption: "ballpoint drawing of a backlit figure walking towards the viewer, their shadow disappearing into a scribble"
}, {
  name: "birds",
  ext: "jpg",
  caption: "ballpoint of a kingfisher and a robin"
}, {
  name: "vanessa-butanna",
  ext: "jpg",
  caption: "ballpoint portrait of my friend Vanessa of BUTANNA holding up a mic at a concert"
}, {
  name: "onyx",
  ext: "jpg",
  caption: "image of ballpoint drawing of Caroh's cat onyx"
}, {
  name: "eli",
  ext: "jpg",
  caption: "ballpoint drawing of Eli standing on one leg"
}, {
  name: "dax-n-friends",
  ext: "jpg",
  caption: "pen drawings of a sad doggie, bird, and dax"
}, {
  name: "goats",
  ext: "jpg",
  caption: "ballpoint sketches of goats mapped to emoji"
}, {
  name: "tiger-fighting",
  ext: "jpg",
  caption: "digital painting of a person in a suit with the head of a tiger, fists up in a confrontational stance"
}, {
  name: "actor",
  ext: "jpg",
  caption: "painting of some famous actor"
}]

export function findArtByName(name: string): ArtMetadata {
  return art.find(art => art.name === name);
}

export default art;
