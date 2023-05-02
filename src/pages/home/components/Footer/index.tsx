import { FooterDivStyle } from "./style";

export default function Footer() {
  return (
    <FooterDivStyle>
      <div className="nav_div_1">
        <h2>Motors</h2>
        <p>shop</p>
      </div>
      <span>© 2022 - Todos os direitos reservados.</span>
      <a href="">
        <div className="anchor_main">^</div>
      </a>
    </FooterDivStyle>
  );
}
