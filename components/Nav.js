import React from 'react';
import Link from 'next/link';
import { xs, sm } from '../utils/settings';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href={'blog'}>
          <a>
            Posts 📝
          </a>
        </Link>
      </li>
      <li>
        <a href="https://twitter.com/rai_siqueira" target="_blank">
          Twitter
        </a>
      </li>
      <li>
        <a href="https://github.com/raisiqueira" target="_blank">
          Github
        </a>
      </li>
      <li>
        <a href="https://linkedin.com/in/raisiqueira" target="_blank">
          LinkedIn
        </a>
      </li>
      <li>
        <a href="https://instagram.com/rai_siqueira" target="_blank">
          Instagram
        </a>
      </li>
      <li>
        <a
          href="https://gist.github.com/54317e0c18d990266a0b3079f84dfd45"
          target="_blank"
        >
          My GPG Key
        </a>
      </li>
    </ul>
    <style jsx>{`
      @media (prefers-color-scheme: dark) {
        a {
          color: var(--text-white);
        }
      }

      @media (prefers-color-scheme: light) {
        a {
          color: var(--text-dark);
        }
      }
      li {
        display: inline-block;
      }
      li:before {
        content: none !important;
        margin-right: 5px;
      }
      a {
        display: inline-block;
        margin: 15px;
        padding-bottom: 4px;
        letter-spacing: 2px;
        position: relative;
        opacity: 0.8;
        transition: all 0.25s ease;
      }
      a:first-child {
        margin-left: 0;
      }
      a:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: -5px;
        left: 0;
        background-color: var(--secondary-text-color);
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.25s ease;
      }
      a:hover {
        opacity: 1;
      }
      a:hover:before {
        visibility: visible;
        transform: scaleX(1);
      }

      @media ${xs} {
        a {
          margin: 5px;
          letter-spacing: 1px;
        }
        ul {
          display: flex;
          overflow-x: scroll;
        }
      }
      @media ${sm} {
        a {
          margin: 5px;
          letter-spacing: 1px;
        }
        ul {
          display: flex;
          overflow-x: scroll;
        }
      }
    `}</style>
  </nav>
);

export default Nav;
