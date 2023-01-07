import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import store from './store';
import { Provider } from 'react-redux'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
