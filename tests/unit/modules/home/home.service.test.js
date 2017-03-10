const chai            = require('chai');
const expect          = chai.expect;
const sinon           = require('sinon');
const Promise         = require('bluebird');
require('sinon-as-promised')(Promise); // "## findAl", "## findOne" and "## create"
const UsersModel      = require('./../../../../server/modules/users/models/users.model');
const UsersService    = require('./../../../../server/modules/users/services/users.service');
const spec            = require('./specs/users.spec.test');

describe('# UsersService', function() {
  describe('## findAll', function() {
    let stubUsersModel = {};
    beforeEach(function () {
      stubUsersModel = {
        find: sinon.stub().resolves(spec.users)
      };
    });

    it('must return a list of users', function () {
      let usersService = new UsersService(stubUsersModel);

      return usersService.findAll()
        .then(users => {
          expect(users).to.be.deep.equal(spec.users);
        })
        .catch(err => {
          throw(err);
        });
    });
  });

  describe('## findOne', function() {
    let stubUsersModel = {};
    beforeEach(function() {
      stubUsersModel = {
        findOne: sinon.stub().resolves(spec.user)
      };
    });

    it('must return a single user', function() {
      let usersService = new UsersService(stubUsersModel);

      return usersService.findOne(spec._id)
        .then(user => {
          expect(user).to.be.deep.equal(spec.user);
        })
        .catch(err => {
          throw(err);
        });
    });
  });

  describe('## create', function() {
    describe('must return the created user with', function () {
      let usersService = {};
      let stubUser = {};
      before(function () {
        usersService = new UsersService(UsersModel);

        /**
         * Creates a "User" with the Mongoose Model and then
         * stub it's save method to return the "spec.createdUser"
         */
        stubUser = new UsersModel(spec.userToBeCreated); // Not stubbed yet
        sinon.stub(stubUser, 'save').resolves(spec.createdUser); // Now it's stubbed
      });

      it('_id', function () {
        usersService.create(stubUser)
        .then(createdUser => {
          expect(createdUser).to.have.property('_id', '57d03a5684cbbf3ae2450f0e');
        })
        .catch(err => {
          throw err;
        });
      });

      it('name', function () {
        usersService.create(stubUser)
        .then(createdUser => {
          expect(createdUser).to.have.property('name', 'Marcio Barbosa');
        })
        .catch(err => {
          throw err;
        });
      });

      it('created_at', function () {
        usersService.create(stubUser)
        .then(createdUser => {
          expect(createdUser).to.have.property('created_at', '2016-09-07T16:03:34.677Z');
        })
        .catch(err => {
          throw err;
        });
      });
    });
  });

  // TODO
  describe('## update', function () {
    describe('must throw a exception if', function () {
      it('userParams is empty', function () {

      });

      it('no user was found with the given "_id"', function () {

      });
    });

    it('must update only the given attributes on userParams', function () {

    });

    it('must return the entire updated user model', function () {

    });
  });
});
