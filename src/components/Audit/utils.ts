interface QueryStringParams {
  count?: number;
  offset?: number;
  eventTypes: string[];
}

export const buildQueryString = (queryStringParams: QueryStringParams) => {
  const { count, offset, eventTypes } = queryStringParams;

  let queryStringArray = []

  if(count) {
    queryStringArray.push(`count=${count}`);
  }

  if(offset !== undefined) {
    queryStringArray.push(`offset=${offset}`);
  }

  if(eventTypes.length > 0) {
    const key = 'event_type';
    let value = '';
    eventTypes.forEach((eventType, index) => {
      if(index > 0) {
        value += '__';
      }

      value += eventType;
    });
    queryStringArray.push(`${key}=${value}`);
  }

  return queryStringArray.join('&');
}