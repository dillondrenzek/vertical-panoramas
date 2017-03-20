export interface Pano {
  label: string,
  image: {
    height: number,
    width: number,
    src: string
  },
  location: {
    label?: string,
    latitude?: {
      value: number,
      direction: string
    },
    longitude?: {
      value: number,
      direction: string
    }
  } | string
}
