import faker from 'faker';
// utils
import { mockImgCover } from '../utils/mockImages';

// ----------------------------------------------------------------------

const POST_TITLES = [
  'Google Pipeline Integration',
  'Facebook ReactJS Issue #312',
  'Facebook ReactJS Issue #4122',
  'Twitter Docs Issue #5412',
  'Google Pipeline Integration',
  'Facebook ReactJS Issue #312',
  'Facebook ReactJS Issue #4122',
  'Google Docs Issue #5412',
  'Google Pipeline Integration',
  'Facebook ReactJS Issue #312',
  'Facebook ReactJS Issue #4122',
  'Google Docs Issue #5412',
  'Google Pipeline Integration',
  'Facebook ReactJS Issue #312',
  'Facebook ReactJS Issue #4122',
  'Google Docs Issue #5412',
];

const posts = [...Array(23)].map((_, index) => ({
  id: faker.datatype.uuid(),
  cover: mockImgCover(index + 1),
  title: POST_TITLES[index + 1],
  createdAt: faker.date.past(),
  view: faker.datatype.number(),
  comment: faker.datatype.number(),
  share: faker.datatype.number(),
  favorite: faker.datatype.number(),
  author: {
    name: faker.name.findName(),
    avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`
  }
}));

export default posts;
