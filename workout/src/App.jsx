import Header from "./components/Header"
import Hero from "./components/Hero"
import {PostList, PostItem} from "./components/Post"
import {SectionItem, SectionHeading, SectionTitle, SectionMoreLink} from "./components/Section"
import Cta from "./components/Cta"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Hero />
        <SectionItem>
          <SectionHeading>
            <SectionTitle>Popular Exercises</SectionTitle>
            <SectionMoreLink>SEE MORE EXERCISES</SectionMoreLink>
          </SectionHeading>
          <PostList>
            <PostItem>aa</PostItem>
          </PostList>
        </SectionItem>
        <Cta />
      </main>
      <Footer />
    </div>
  )
}

export default App
