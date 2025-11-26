'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';

import type { User } from '@/types/user';
import { authClient } from '@/lib/auth/client';
import { logger } from '@/lib/default-logger';

export interface UserContextValue {
  user: User | null;
  error: string | null;
  isLoading: boolean;
  checkSession?: () => Promise<void>;
}

export const UserContext = React.createContext<UserContextValue | undefined>(undefined);

export interface UserProviderProps {
  children: React.ReactNode;
  requireAuth?: boolean; // 로그인 필수 여부
}

export function UserProvider({ children, requireAuth = false }: UserProviderProps): React.JSX.Element {
  const router = useRouter();

  const [state, setState] = React.useState<{ user: User | null; error: string | null; isLoading: boolean }>({
    user: null,
    error: null,
    isLoading: true,
  });

  const checkSession = React.useCallback(async (): Promise<void> => {
    try {
      const { data, error } = await authClient.getUser();

      if (error) {
        logger.error(error);
        setState({ user: null, error: 'Something went wrong', isLoading: false });
        return;
      }

      setState({ user: data ?? null, error: null, isLoading: false });
    } catch (error) {
      logger.error(error);
      setState({ user: null, error: 'Something went wrong', isLoading: false });
    }
  }, []);

  // 초기 세션 체크
React.useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      authClient.setToken(token); // authClient에 토큰 등록 ß
      checkSession().catch(logger.error); 
    } else {
      setState({ user: null, error: null, isLoading: false });
    }
  }, [checkSession]);

  // 로그인 필수 페이지에서 미인증 시 리다이렉트
  React.useEffect(() => {
    if (!state.isLoading && requireAuth && !state.user) {
      router.push('/auth/sign-in');
    }
  }, [state.isLoading, state.user, requireAuth, router]);

  // 로딩 중이면 아무것도 렌더링하지 않거나 스피너 표시
  if (state.isLoading && requireAuth) {
    return <div>Loading...</div>;
  }

  return <UserContext.Provider value={{ ...state, checkSession }}>{children}</UserContext.Provider>;
}

export const UserConsumer = UserContext.Consumer;
