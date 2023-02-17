import React from "react";
import { NavLink, Link } from "react-router-dom";

export const Navbar = () => {
  const isAuth = false;

  return (
    <div className="flex py-4 justify-between items-center">
      <span
        className="flex justify-center items-center
       w-6 h-6 bg-gray-600 text-xs text-white rounded-sm"
      >
        E
      </span>
      {isAuth && (
        <ul className="flex gap-8">
          <li>
            <NavLink to="/" className="text-xl text-gray-400 hover:text-white">
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink to="/posts" className="text-xl text-gray-400 hover:text-white">
              Мои посты
            </NavLink>
          </li>
          <li>
            <NavLink to="/new" className="text-xl text-gray-400 hover:text-white">
              Добавить пост
            </NavLink>
          </li>
        </ul>
      )}
      <div className="flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm px-4 py-2">
        {isAuth ? <button>Выйти</button> : <Link to={"/login"}>Войти</Link>}
      </div>
    </div>
  );
};
