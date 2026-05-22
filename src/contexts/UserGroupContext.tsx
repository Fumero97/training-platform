import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type UserGroup = 'A' | 'B' | 'C';

const STORAGE_KEY_GROUP = 'userGroup';

interface UserGroupContextValue {
  group: UserGroup | null;
  setGroup: (group: UserGroup) => void;
  clearGroup: () => void;
}

const UserGroupContext = createContext<UserGroupContextValue | null>(null);

export const UserGroupProvider = ({ children }: { children: ReactNode }) => {
  const [group, setGroupState] = useState<UserGroup | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY_GROUP) as UserGroup | null;
    if (saved && ['A', 'B', 'C'].includes(saved)) {
      setGroupState(saved);
    }
  }, []);

  const setGroup = (g: UserGroup) => {
    localStorage.setItem(STORAGE_KEY_GROUP, g);
    setGroupState(g);
  };

  const clearGroup = () => {
    localStorage.removeItem(STORAGE_KEY_GROUP);
    setGroupState(null);
  };

  return (
    <UserGroupContext.Provider value={{ group, setGroup, clearGroup }}>
      {children}
    </UserGroupContext.Provider>
  );
};

export const useUserGroup = (): UserGroupContextValue => {
  const ctx = useContext(UserGroupContext);
  if (!ctx) throw new Error('useUserGroup must be used inside UserGroupProvider');
  return ctx;
};
