"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface PaginationProps {
  current: number;
  total: number;
  pageSize: number;
}

const paginationContext = createContext<{
  pagination: PaginationProps;
  setPagination: Dispatch<SetStateAction<PaginationProps>>;
  setPage: (newPage: number) => void;  // Add setPage function to the context
} | null>(null);

export default function PaginationContext({ children }: { children: ReactNode }) {
  const [pagination, setPagination] = useState<PaginationProps>({
    current: 1,
    pageSize: 21,
    total: 3,
  });

  const setPage = (newPage: number) => {
    if (newPage >= 1 && newPage <= pagination.total) {
      setPagination((prev) => ({ ...prev, current: newPage }));
    }
  };

  useEffect(()=>{
   console.log(pagination)
  },[pagination])

  return (
    <paginationContext.Provider value={{ pagination, setPagination, setPage }}>
      {children}
    </paginationContext.Provider>
  );
}

export function usePagination() {
  const context = useContext(paginationContext);
  if (!context) {
    throw new Error("usePagination must be used within a PaginationContext");
  }
  return context;
}
