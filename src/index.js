import { getGlobal } from 'meteor-globals';

const Mongo = getGlobal('mongo', 'Mongo');
export default new Mongo.Collection('posts');
