import {
  GetTopicSearchDto,
  useTopicsControllerGetTopicsHistoryById
} from '@dsb-client-gateway/dsb-client-gateway-api-client';

export const useTopicVersionHistory = (id: string) => {
  const { data, isLoading, isSuccess, isError } = useTopicsControllerGetTopicsHistoryById(id);
  const topicHistory: GetTopicSearchDto[] = data?.records ?? [];
  const topicHistoryLoaded = isSuccess && data !== undefined && !isError;

  return {
    topicHistory,
    isLoading,
    topicHistoryLoaded
  };
}
