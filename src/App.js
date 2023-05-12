import LoginSection from "./Components/LoginSection";
import HomeSection from "./Components/HomeSection";
import YearsSection from "./Components/YearsSection";
import ModuleSection from "./Components/ModuleSection";
import Header from "./Components/Header";
import { OuterLayout } from './styles/Layouts';
import styled from 'styled-components';
import MessagingSection from "./Components/MessagingSection";
import RaccourciSection from "./Components/RaccourciSection";
import FAQSection from "./Components/FAQSection";
import Footer from "./Components/Footer";
// import { Fade } from "react-reveal";

function App() {
  return (
    <div className="App">
      <Header />
      <OuterLayout>
        <MainStyled>
          {/* <Fade left> */}
          <LoginSection />
          {/* </Fade> */}
          {/* <Fade right> */}
          <HomeSection />
          {/* </Fade> */}
          {/* <Fade left> */}
          <YearsSection />
          {/* </Fade> */}
          {/* <Fade right> */}
          <ModuleSection />
          {/* </Fade> */}
          {/* <Fade left> */}
          <MessagingSection />
          {/* </Fade> */}
          {/* <Fade right> */}
          <RaccourciSection />
          {/* </Fade> */}
          {/* <Fade left> */}
          <FAQSection />
          {/* </Fade> */}

        </MainStyled>
      </OuterLayout>
      {/* <Fade bottom> */}
      <Footer />
      {/* </Fade> */}
    </div>
  );
}

const MainStyled = styled.main`


`;

export default App;
