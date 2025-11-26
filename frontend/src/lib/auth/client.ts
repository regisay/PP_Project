'use client';

import type { User } from '@/types/user';

function generateToken(): string {
  const arr = new Uint8Array(12);
  globalThis.crypto.getRandomValues(arr);
  return Array.from(arr, (v) => v.toString(16).padStart(2, '0')).join('');
}

const user = {
  id: 'USR-000',
  avatar: '/assets/avatar.png',
  firstName: 'Sofia',
  lastName: 'Rivers',
  email: 'sofia@devias.io',
} satisfies User;

export interface SignUpParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface SignInWithOAuthParams {
  provider: 'google' | 'discord';
}

export interface SignInWithPasswordParams {
  email: string;
  password: string;
}

export interface ResetPasswordParams {
  email: string;
}

class AuthClient {
  private token: string | null = null;

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('custom-auth-token', token);
  }

  async signUp(params: SignUpParams): Promise<{ error?: string }> {
    const token = generateToken();
    this.setToken(token);
    return {};
  }

  async signInWithPassword(params: SignInWithPasswordParams): Promise<{ error?: string }> {
    const { email, password } = params;
    if (email !== 'sofia@devias.io' || password !== 'Secret1') {
      return { error: 'Invalid credentials' };
    }
    const token = generateToken();
    this.setToken(token);
    return {};
  }

  async getUser(): Promise<{ data?: User | null; error?: string }> {
    const token = this.token ?? localStorage.getItem('custom-auth-token');
    if (!token) return { data: null };
    return { data: user };
  }

  async signOut(): Promise<{ error?: string }> {
    this.token = null;
    localStorage.removeItem('custom-auth-token');
    return {};
  }
}

export const authClient = new AuthClient();

