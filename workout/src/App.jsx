import { useState } from 'react';
import Header from "./components/Header"
import Hero from "./components/Hero"
import {PostList, PostItem} from "./components/Post"
import {SectionItem, SectionHeading, SectionTitle, SectionMoreLink} from "./components/Section"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import Wrapper from "./components/Wrapper/Wrapper"
import data from './data.json';

function App() {
  const [posts] = useState(data);

  return (
    <Wrapper>
      <Header />
      <main>
        <Hero />
        <SectionItem>
          <SectionHeading>
            <SectionTitle>Popular Exercises</SectionTitle>
            <SectionMoreLink>SEE MORE EXERCISES</SectionMoreLink>
          </SectionHeading>
          <PostList>
            {posts.map((post, postID) => (
              <PostItem key={postID} post={post} />
            ))}
          </PostList>
        </SectionItem>
        <CTA />
      </main>
      <Footer />
    </Wrapper>
  )
}

export default App
