import React from "react";
import styled from "styled-components";
import MessagesList from "./MessagesList";

const Container = styled.div`
  width: 38vw;
  height: 2em;
  display: flex;
  color: red;
`;

const UserInput = styled.input`
  background-color: white;
  border-radius: 5px;
  border: 1px solid lightgray;
  margin: 3px 8px;
  width: 80px;
  font-weight: bold;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    width: 8em;
    margin: 0px 0px;
  }

`;

const MessageInput = styled.input`
  background-color: white;
  border-radius: 5px;
  border: 1px solid lightgray;
  margin: 3px 0px 3px 8px;
  flex-grow: 1;
  font-weight: bold;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    width: 110em;
    margin: 0px 0px 0px 0px;
    
}




`;

const SendMessage = styled.button`
  background-color: grey;
  border-radius: 5px;
  border: none;
  margin: 3px 150px 6px 4px;
  color: white;
  font-weight: bold;
  font-size: 16px;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    width: 20em;
    margin: 0px 0px 0px 0px;
    padding: 10px 19px 10px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    


}

`;

//--------------------------- Envio de msg------------------------------------
class CreateMessage extends React.Component {
  state = {
    user: "",
    message: "",
    messages: [],
  };
  // -----------------------Nome do Usuario------------------------------------
  onChangeUser = (event) => {
    this.setState({ user: event.target.value });
  };
  // -----------------------------Msg----------------------------------------
  onChangeMessage = (event) => {
    this.setState({ message: event.target.value });
  };

  onClickSendMessage = () => {
    if (this.state.user !== "" && this.state.message !== "") {
      const newMessage = {
        userValue: this.state.user,
        messageValue: this.state.message,
      };  
      const newArray = [newMessage, ...this.state.messages];
      this.setState({ messages: newArray });  
      this.setState({ message: "", user: "" }); //Zerar msg
    } else {
      alert("Preencha todos os campos!!!");
    }
  };
//-------------------------------------------Enviar com enter------------------------------
  enterSendMessage = (event) => {
    if (event.key === "Enter") {
      this.onClickSendMessage();
    }
  };

  //--------------------------------------------Deletar msg---------------------------------
  deleteMessage = (index) => {
    if (window.confirm("Deletar mensagem?")) {
      const deletedMessage = this.state.messages;
      deletedMessage.splice(index, 1);
      this.setState({ messages: deletedMessage });
    }
  };

  render() {
    return (
      <div>
{/* -----------------------------Chamando o MessagesList.js------------------------- */}
        <MessagesList
          messages={this.state.messages}
          user={this.state.user}
          message={this.state.message}
          onDoubleClick={this.deleteMessage}
        />
        <Container onKeyPress={this.enterSendMessage}>
{/*----------------------------------Campo de msg------------------------------------- */}
          <UserInput
            placeholder="Usuário"
            onChange={this.onChangeUser}
            value={this.state.user}
            required
          />
          <MessageInput
            placeholder="Mensagem"
            onChange={this.onChangeMessage}
            value={this.state.message}
            required
          />
          <SendMessage onClick={this.onClickSendMessage} type="submit">
            Enviar
          </SendMessage>
        </Container>
      </div>
    );
  }
}
export default CreateMessage;
