import { GitHub } from '../components/icons'
import { IconButton } from '@slup/buttons'
import MenuIcon from '../../../Icons/icons/navigation/menu'
import { Navbar } from '../../../Navbar/src/index'
import { Tooltip } from '../../../Tooltip/src/index'
import { Typography } from '@slup/typography'
import { generateTitle } from '../utils/title'
import styled from '@slup/theming'

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  padding: 0 24px;

  @media (max-width: 960px) {
    padding: 0 16px;
  }
`

/** Title element with a custom margin */
const Title = styled(Typography) `
  margin-left: 16px;
  flex: 1;
  align-self: center;
`

/** Redirect helper */
const redirect = () => window.open('https://github.com/slupjs/slup', '_blank')


export const Header = ({ onOpen, ...props }, { router }) => {
  return(
    <Navbar primary {...props}>
      <Wrapper>
        <Tooltip text='Open Menu'>
          <IconButton onClick={onOpen}>
            <MenuIcon />
          </IconButton>
        </Tooltip>

        <Title title>{generateTitle(router.route.location)}</Title>

        <Tooltip text='Github'>
          <IconButton onClick={redirect}>
            <GitHub />
          </IconButton>
        </Tooltip>
      </Wrapper>
    </Navbar>
  )
}