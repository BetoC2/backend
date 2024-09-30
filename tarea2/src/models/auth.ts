import bcrypt from 'bcrypt';
import User from './user';
import { IUser } from '../types/user';

const SALT_ROUNDS = 10;

class Auth {
  registerUser = async (name: string, email: string, password: string, role: string) => {
    const user = await User.findOne({ email });
    if (user) {
      throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });

    await newUser.save();
    return newUser;
  }

  loginUser = async (email: string, password: string) => {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('Invalid email or password');
    }

    if (user.status === 'inactive' || user.status === 'blocked') {
      throw new Error('Inactive email or password');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid email or password');
    }

    return user;
  }
}

const auth = new Auth();
export default auth;