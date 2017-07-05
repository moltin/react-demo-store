// import ability to create a browser history for our router to use
import { createBrowserHistory } from 'history'

// Create a history of your choosing (we're using a browser history in this case)
const history = createBrowserHistory({basename: '/'});

export default history;
