import Posts from 'meteor-npm-package'

describe('meteor tests for npm', function () {
  it('should create a post', function () {
    const _id = Posts.insert({ title: 'test' })
    Posts.remove({ _id })
  })
})
