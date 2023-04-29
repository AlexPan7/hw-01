import styled from 'styled-components'

const Button = styled.button`
  border: 0;
  background: #25AB75;
  border-radius: 10px;
  display: inline-flex;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.375;
  letter-spacing: 1px;
  color: #FFFFFF;
  padding: 1.33em 2.223em;
  cursor: pointer;
  transition: all .3s ease;

  &:hover {
    background: #fff;
    color: #25AB75;
  }

  @media (min-width: 640px) {
    font-size: 18px;
  }

  ${props => props.$primary &&`
    background: rgba(255,255,255,0.1);
  `}
`
export default Button