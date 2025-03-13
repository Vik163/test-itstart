import { StateSchema } from '@/app/providers/StoreProvider';

export const getSeminarsPageIsLoading = (state: StateSchema) =>
   state.seminars?.isLoading || false;
export const getSeminarsPageError = (state: StateSchema) =>
   state.seminars?.error;
export const getSeminarsPageNum = (state: StateSchema) =>
   state.seminars?.page || 1;
export const getSeminarsPageLimit = (state: StateSchema) =>
   state.seminars?.limit || 3;
export const getSeminarsPageHasMore = (state: StateSchema) =>
   state.seminars?.hasMore;
export const getSeminarsPageInited = (state: StateSchema) =>
   state.seminars?._inited;
