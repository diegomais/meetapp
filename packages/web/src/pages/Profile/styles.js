import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    input {
      height: 50px;
      margin-top: 10px;
      padding: 0 15px;
      border: 0;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.1);
      color: #fff;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    input + span {
      align-self: flex-start;
      margin: 5px 15px 0;
      font-weight: bold;
      color: #fb6f91;
    }

    hr {
      border: 0;
      margin: 20px 0 10px;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
    }

    button {
      align-self: flex-end;
      width: 162px;
      height: 42px;
      margin-top: 20px;
      border: 0;
      border-radius: 4px;
      background: #f94d6a;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#f94d6a')};
      }
    }
`;
