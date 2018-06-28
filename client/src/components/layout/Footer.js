import React from "react";

export default () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      Copyright &copy; {new Date().getFullYear()} Pkm Trading Card Network
      <div>
        This website is not produced, endorsed, supported, or affiliated with
        Nintendo or The Pokémon Company.
      </div>
    </footer>
  );
};
