import React, { useEffect } from 'react';
import { useGetMessagesQuery } from '../store/Streaming';

const MessageComponent = ({ channel }) => {
  const { data, error, isLoading } = useGetMessagesQuery(channel);

  useEffect(() => {
    // Optional: You can do something here if needed when the data, error, or loading state changes.
    // For example, you could update your UI or show loading/error messages.
    console.log('Data:', data);
    console.log('Error:', error);
    console.log('Loading:', isLoading);

    return () => {
      // Optional: You can do cleanup here when the component is unmounted.
      // For example, you could unsubscribe from event listeners or cancel pending requests.
    };
  }, [data, error, isLoading]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Messages for Channel: {channel}</h2>
      <ul>
        {data.map((message) => (
          <li key={message.id}>{message.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default MessageComponent;
