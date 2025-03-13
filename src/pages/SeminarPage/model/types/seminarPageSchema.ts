import type { Seminar } from '@/entities/Seminars';
import { EntityState } from '@reduxjs/toolkit';

export interface SeminarsPageSchema extends EntityState<Seminar, string> {
   isLoading?: boolean;
   error?: string;

   // pagination
   page: number;
   limit: number;
   hasMore: boolean;

   _inited: boolean;
}
