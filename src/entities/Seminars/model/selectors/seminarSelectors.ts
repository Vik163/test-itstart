import { StateSchema } from '@/app/providers/StoreProvider';

export const getSeminarsIsLoading = (state: StateSchema) =>
   state.seminars?.isLoading || false;
export const getSeminarsIsLoadingModal = (state: StateSchema) =>
   state.seminars?.isLoadingModal || false;
export const getSeminarsError = (state: StateSchema) => state.seminars?.error;
export const getSeminarsNum = (state: StateSchema) => state.seminars?.page || 1;
export const getSeminarsLimit = (state: StateSchema) =>
   state.seminars?.limit || 3;
export const getSeminarsHasMore = (state: StateSchema) =>
   state.seminars?.hasMore;
export const getSeminarsInited = (state: StateSchema) =>
   state.seminars?._inited;
