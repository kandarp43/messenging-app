import { Avatar, IconButton } from '@material-ui/core'
import { Chat, MoreVert } from '@material-ui/icons'
import styled from 'styled-components'

function Sidebar() {
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

const UserIcon = styled(Avatar)``

const IconContainer = styled.div``
