import { MovePage } from "../event/movePage";
import { Container, FooterButton } from "./Footer.styles";

export default function Footer(): JSX.Element {
  const { onClickMovePage, isMain } = MovePage();
  return (
    <Container>
      <FooterButton
        className="footer-button"
        onClick={onClickMovePage}
        isMain={isMain}
      >
        {isMain ? "+" : "-"}
      </FooterButton>
    </Container>
  );
}
