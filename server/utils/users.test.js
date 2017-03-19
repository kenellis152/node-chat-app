const {Users} = require('./Users')
const expect = require('expect');

describe('Users Class', () => {

  var users;
  beforeEach( () => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    },
    {
      id: '2',
      name: 'Jen',
      room: 'React Course'
    },
    {
      id: '3',
      name: 'Julie',
      room: 'Node Course'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Ken',
      room: 'The Office Fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  // For removeUser
  it('should remove a user', () => {
    var result = users.removeUser('2');
    expect(result.name).toBe('Jen');
    expect(users.users.length).toBe(2);
  });
  it('should not remove user', () => {
    var result = users.removeUser('20');
    expect(result).toBe(undefined);
    expect(users.users.length).toBe(3);
  });

  // For getUser
  it('should find user', () => {
    var result = users.getUser('2');
    expect(result.name).toEqual('Jen');
  });
  it('should return undefined', () => {
    var result = users.getUser('20');
    expect(result).toBe(undefined);
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('Node Course');
    expect(userList).toEqual(['Mike', 'Julie']);
  });
  it('should return names for react course', () => {
    var userList = users.getUserList('React Course');
    expect(userList).toEqual(['Jen']);
  });

})
