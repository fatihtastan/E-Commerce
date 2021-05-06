import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('12345678', 10),
    isAdmin: true,
  },
  {
    name: 'Fatih Tastan',
    email: 'admin1@example.com',
    password: bcrypt.hashSync('12345678', 10),
  },
  {
    name: 'Fatih Tastan',
    email: 'admin2@example.com',
    password: bcrypt.hashSync('12345678', 10),
  },
];

export default users;
