import React, {createContext, useState} from 'react';
import * as auth from '../services/auth';

interface AuthContextData {
  signed: boolean;
  user: object | null;
  signIn(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<object | null>(null);

  async function signIn() {
    const response = await auth.SignInInfo();
    setUser(response.user);
    console.log(user, 'user');
  }
  return (
    <AuthContext.Provider value={{signed: !!user, user, signIn}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
