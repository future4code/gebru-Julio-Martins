import React from "react";
import styled from "styled-components";



const MessagesContainer = styled.div`
  background-size: cover;
  background-image:url(https://wallpapercave.com/wp/wp5032082.jpg);
  width: 30vw;
  height: 90vh;
  margin-top: 30px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column-reverse;
  border-radius: 10px;
  border: 1px solid lightgray;
  

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    width: 100vw;
    height: 95vh;
    margin-top: 0px;
    margin-bottom: 0px;
  }

`;

const Message = styled.p`
  background-color: #9C9C9C  ;
  margin: 3px;
  width: 50%;
  padding: 12px 15px;
  border-radius: 6px;
  border: 1px solid lightgray;



`;
const MyMessage = styled.p`
  align-self: flex-end;
  background-color: #3C3C3C;
  margin: 3px;
  padding: 12px 15px;
  text-align: right;
  width: 50%;
  border-radius: 5px;
  border: 1px solid lightgray;
  color: white;

`;



class MessagesList extends React.Component {
  render() {
    return (
      <MessagesContainer>
        {this.props.messages &&
          this.props.messages.map((message, index) => {
            if (message.userValue.toLowerCase() === "eu") {
              return (
                <MyMessage
                  key={index}
                  onDoubleClick={() => this.props.onDoubleClick(index)}
                >
                  <strong>{message.userValue}: </strong>
                  {message.messageValue}
                </MyMessage>
              );
            } else {
              return (
                <Message
                  key={index}
                  onDoubleClick={() => this.props.onDoubleClick(index)}
                >
                  <strong>{message.userValue}: </strong>
                  {message.messageValue}
                </Message>
              );
            }
          })}
      </MessagesContainer>
    );
  }
}
export default MessagesList;
