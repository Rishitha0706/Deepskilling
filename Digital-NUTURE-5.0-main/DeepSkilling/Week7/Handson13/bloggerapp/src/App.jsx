import './App.css';

import BlogDetails from './BlogDetails';
import BookDetails from './BookDetails';
import CourseDetails from './CourseDetails';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <CourseDetails />
      <BookDetails />
      <BlogDetails />
    </div>
  );
}

export default App;