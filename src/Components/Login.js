import styled from "styled-components";

const Login = (props) => {
  return <Container>
    <Content>
      <CTA>
        <CTALogoOne src="https://firebasestorage.googleapis.com/v0/b/disney-clone-907c9.appspot.com/o/Disney%2FImages%2Fcta-logo-one.svg?alt=media&token=19d0ca72-e849-4c3b-938f-45f55e716f5a" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+
          and The Disney Bundle will increase by $1.
        </Description>
        <CTALogoTwo src="https://firebasestorage.googleapis.com/v0/b/disney-clone-907c9.appspot.com/o/Disney%2FImages%2Fcta-logo-two.png?alt=media&token=25477062-8057-4d97-a4d0-43ea175d78c6" alt="" />
      </CTA>
      <BgImage />
    </Content>
  </Container>;
}


const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/disney-clone-907c9.appspot.com/o/Disney%2FImages%2Flogin-background.jpg?alt=media&token=74f723fe-89f7-4b3f-bd9d-419e5a8949f5");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;
const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: bold;
  margin-bottom: 12px;
  padding: 16px 0;
  color: #f9f9f9;
  background-color: #0063e5;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

export default Login;