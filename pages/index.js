import {Component} from 'react';
import Page from '../layouts/pages';
import Avatar from '../components/Avatar';

// Init of the layout

class Home extends Component {
  render () {
    return (
      <Page>
        <div>
          <Avatar
            url="https://avatars0.githubusercontent.com/u/2914170?s=460&v=4"
            alt="Raí Siqueira"
          />
          <h1>Raí Siqueira</h1>
          <h2>front-end engineer and beer lover.</h2>
          <footer>
            <ul>
              <li><a href="https://twitter.com/rai_siqueira">Twitter</a> - </li>
              <li><a href="https://github.com/raisiqueira">Github</a> - </li>
              <li>
                <a href="https://instagram.com/rai_siqueira">Instagram</a>
              </li>
            </ul>
          </footer>
          <style jsx>
            {`
              div {
                padding: 100px;
                min-height: 100vh;
                display: flex;
                justify-content: flex-end;
                flex-direction: column;
              }
              h2 {
                color: #ababab;
                line-height: 30px;
              }
              ul {
                display: flex;
                margin-top: 25px;
              }
              li {
                font-size: 13px;
                color: #ababab;
                padding-right: 5px;
              }
              a,
              span {
                color: #ababab;
                margin-right: 5px;
                cursor: pointer;
              }
              a:hover,
              span:hover {
                color: #000;
              }
              h3 {
                font-weight: 400;
                font-size: 14px;
                color: #ababab;
                margin-top: 16px;
              }
              h3 a {
                font-weight: 700;
                color: #000;
                margin-right: 0;
              }
              h3 a:hover {
                text-decoration: underline;
              }
              @media (max-width: 500px) {
                div {
                  padding: 45px;
                }
              }
            `}
          </style>
        </div>
      </Page>
    );
  }
}

export default Home;
