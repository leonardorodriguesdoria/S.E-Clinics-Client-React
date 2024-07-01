import { Navbar, TextInput, Button, Dropdown } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import React, { useEffect, useState } from "react";

function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          S.E CLINICS
        </span>
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Pesquisar...."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Link to="/login">
          <Button gradientDuoTone="purpleToBlue">Login</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/clinicas"} as={"div"}>
          <Link to="/clinicas">Clínicas</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/medicos"} as={"div"}>
          <Link to="/medicos">Médicos</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/sobre"} as={"div"}>
          <Link to="/sobre">Sobre</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
