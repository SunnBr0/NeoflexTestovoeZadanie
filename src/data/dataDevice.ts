// import airpods from '../components/assets/S852.png'
const headPhones: any = [
  {
    id: 1,
    img: "./assets/S852.png",
    title: "Apple BYZ S852I",
    price: 3527,
    rate: 4.7,
    discountPrice: 2927,
  },
  {
    id: 2,
    img: "./assets/earpods1.png",
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
  {
    id: 3,
    img: "./assets/earpods2.png",
    title: "Apple EarPods",
    price: 2327,
    rate: 4.2,
  },
  {
    id: 4,
    img: "./assets/S852.png",
    title: "Apple BYZ S852I",
    price: 2927,
    rate: 4.7,
  },
  {
    id: 5,
    img: "./assets/earpods1.png",
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
  {
    id: 6,
    img: "./assets/earpods2.png",
    title: "Apple EarPods",
    price: 2327,
    rate: 4.2,
  },
];

const wirelessHeadPhone: any = [
  {
    id: 7,
    img: "./assets/earpodsLock.png",
    title: "Apple AirPods",
    price: 9527,
    rate: 4.7,
  },
  {
    id: 8,
    img: "./assets/proEarpods.png",
    title: "GERLAX GH-04",
    price: 6527,
    rate: 4.7,
  },
  {
    id: 9,
    img: "./assets/bigHeadPonse.png",
    title: "Apple EarPods",
    price: 7527,
    rate: 4.7,
  },
];
interface Device {
  id: number;
  img: string;
  title: string;
  price: number;
  rate: number;
  discountPrice?: number;
}
const devicesItems: { [key: string]: Array<Device> } = {
  Наушники: headPhones,
  "Беспроводные наушники": wirelessHeadPhone,
};
export { headPhones, wirelessHeadPhone, devicesItems };
