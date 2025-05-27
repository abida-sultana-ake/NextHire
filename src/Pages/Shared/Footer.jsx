import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsThreadsFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <footer className="px-4 divide-y bg-gray-800 dark:text-white">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <a
              href="/"
              className="flex justify-center space-x-3 lg:justify-start"
              aria-label="Homepage"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-50"
                >
                  <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
                </svg>
              </div>
              <span className="self-center text-2xl font-semibold">
                NextHire
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase dark:text-gray-400">
                Product
              </h3>
              <ul className="space-y-1">
                <li>
                  <a href="/features">Features</a>
                </li>
                <li>
                  <a href="/integrations">Integrations</a>
                </li>
                <li>
                  <a href="/pricing">Pricing</a>
                </li>
                <li>
                  <a href="/faq">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase dark:text-gray-400">
                Company
              </h3>
              <ul className="space-y-1">
                <li>
                  <a href="/privacy">Privacy</a>
                </li>
                <li>
                  <a href="/terms">Terms of Service</a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="uppercase dark:text-gray-400">Developers</h3>
              <ul className="space-y-1">
                <li>
                  <a href="/api">Public API</a>
                </li>
                <li>
                  <a href="/docs">Documentation</a>
                </li>
                <li>
                  <a href="/guides">Guides</a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="uppercase dark:text-gray-400">Social media</div>
              <div className="flex justify-start space-x-3">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  title="Facebook"
                  className="flex items-center p-2"
                >
                  <FaFacebook className="size-6" />
                </a>
                <a
                  href="https://www.threads.com/@__abii_daaa__?xmt=AQF0QV_7I1cxYrgmh-wO_xRrRkJKChUc97azJQQgEI6Byno"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Threads"
                  title="Threads"
                  className="flex items-center p-2"
                >
                  <BsThreadsFill className="size-6" />
                </a>
                <a
                  href="https://www.instagram.com/__abii_daaa__/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                  className="flex items-center p-2"
                >
                  <FaInstagram className="size-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center dark:text-gray-300">
          © 2025 NextHire. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
