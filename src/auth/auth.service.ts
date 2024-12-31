import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(email: string, password: string, role: string): Promise<any> {
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.userService.create({ email, password: hashedPassword, role });
  }

  async login(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      const payload = { email: user.email, role: user.role };
      const token = this.jwtService.sign(payload);
      return { access_token: token };
    }
    throw new Error('Invalid credentials');
  }
}
