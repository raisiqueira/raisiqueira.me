import React from "react";

const Nav = () => (
  <nav>
    <ul>
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
    </ul>
    <style jsx>{`
      li {
        display: inline-block;
      }
      a {
        display: inline-block;
        color: var(--secondary-text-color);
        margin: 15px;
        padding-bottom: 4px;
        letter-spacing: 2px;
        position: relative;
        opacity: 0.5;
        transition: all 0.25s ease;
      }
      a:first-child {
        margin-left: 0;
      }
      a:before {
        content: "";
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
    `}</style>
  </nav>
);

export default Nav;
