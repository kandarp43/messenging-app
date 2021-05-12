import { Avatar, Button, IconButton } from '@material-ui/core'
import { Chat, MoreVert, Search } from '@material-ui/icons'
import styled from 'styled-components'
import * as EmailValidator from 'email-validator'

function Sidebar() {
  const createChat = () => {
    const input = prompt('please enter email address')
    if (!input) return
    if (EmailValidator.validate(input)) {
      //
    }
  }

  return (
    <Container>
      <Header>
        <UserIcon />
        <IconContainer>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </IconContainer>
      </Header>

      <SearchBox>
        <Search />
        <SearchInput placeholder='search chats' />
      </SearchBox>

      <SidebarButton onClick={createChat}> start new chat</SidebarButton>
    </Container>
  )
}

export default Sidebar

const Container = styled.div``

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid #f5f5f5;
`

const UserIcon = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.6;
  }
`

const IconContainer = styled.div``

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`

const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
`

const SidebarButton = styled(Button)`
  width: 100%;
  &&& {
    border-top: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
  }
`
