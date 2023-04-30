import Link from 'next/link';
import React from 'react';

const Popup = ({ item, index,closeMenu }) => {
    
    return (
        <>
        <a
          href="#"
          className="nav-link fs-4"
          data-bs-toggle="modal"
          data-bs-target={`#modal${index}`}
          onClick={closeMenu}
        >
          {item.title} {"->"}
        </a>
        <div
          className="modal fade"
          id={`modal${index}`}
          tabIndex="-1"
          aria-labelledby={`modalLabel${index}`}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content border border-primary-light border-2 bg-black text-start">
              <div className="modal-header border-0">
                <h1 className="modal-title fs-5 text-light" id={`modalLabel${index}`}>
                  <Link className="nav-link fs-4" href={item.route} onClick={closeMenu}>
                    {item.title}
                  </Link>
                </h1>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <ul className="row list-unstyled">
                  {item.subItems.map((si, i2) => (
                    <li className={"col-12 col-lg-4 pt-3"} key={`${index}${i2}`}>
                      <Link
                        href={si.route}
                        key={`${index}${i2}`}
                        className={`text-decoration-none ${si.children ? "fw-bold" : "link-light"}`}
                      >
                        {si.title}
                      </Link>

                      {si.children && (
                        <ul className="list-unstyled p-3">
                          {si.children.map((child, i3,keyIndex) => (
                            <li key={keyIndex} className="ps-2">
                              <Link
                                href={child.route}
                                className="text-decoration-none link-light"
                                key={`${index}${i2}${i3}`}
                              >
                                {child.title}
                              </Link>
                            </li>
                          ))}
                          <hr className="d-lg-none" />
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Popup;