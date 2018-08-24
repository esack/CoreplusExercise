import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from './input';
import Textarea from './textarea';
import Button from './button';

export const EmailForm = ({ className }) => (
  <div className={className}>
    <form
      className="form"
      action="https://formspree.io/aeweinraub@gmail.com"
      method="POST"
    >
      <div className="top">
        <Input placeholder="Name" type="text" name="name" />
        <Input placeholder="Email" type="email" name="replyto" />
      </div>
      <Textarea name="message" placeholder="Message" />
      <Button type="submit" value="CONTACT" />
    </form>
  </div>
);

EmailForm.propTypes = {
  className: PropTypes.string
};

export default styled(EmailForm)`
  width: 40%;
  transition: all 0.5s ease;
  @media (max-width: 700px) {
    width: 100%;
  }

  .form {
    display: flex;
    flex-direction: column;
  }
  .top {
    display: flex;
    justify-content: space-between;
  }
`;
