import { Message } from './Notification.styled';

function Notification({ message }) {
  return (
    <div>
      <Message>{message}!</Message>
    </div>
  );
}

export default Notification;
