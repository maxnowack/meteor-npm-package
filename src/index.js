import getMeteorGlobal from 'meteor-globals';

const Mongo = getMeteorGlobal('mongo', 'Mongo');
export default new Mongo.Collection('posts');
