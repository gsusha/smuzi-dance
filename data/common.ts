import type { LngLat } from '@yandex/ymaps3-types'

export const links = {
  telegram: 'https://t.me/smuzidance',
  yandex: 'https://yandex.ru/maps/-/CLf3E019',
  google: 'https://share.google/6fThhlywWVgD5s3jQ',
  twogis: 'https://go.2gis.com/WJpjj',
  map: 'https://yandex.ru/maps/-/CLfRU-M0'
}

export const CTA_BUTTON = {
  text: 'Записаться',
  icon: 'mingcute:telegram-fill',
  link: links.telegram,
}

export const phoneNumber = '+79167359116'

export const coordinates = [37.771067, 55.75862] as LngLat

export const address = 'Дом культуры «Прожектор» — 1-я Владимирская ул., 10Б стр.3'

export const MENU_ITEMS = [
  {
    id: 'about',
    name: 'О нас',
    slug: '#why',
  },
  {
    id: 'programs',
    name: 'Программы',
    slug: '#programs',
  },
  {
    id: 'feedback',
    name: 'Отзывы',
    slug: '#feedback',
  },
  {
    id: 'contacts',
    name: 'Контакты',
    slug: '#contacts',
  },
]