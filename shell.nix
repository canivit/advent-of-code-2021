with import <nixpkgs> {};

stdenv.mkDerivation {
  name = "node";
  buildInputs = [
    nodejs-16_x
    yarn
  ];
  shellHook = ''
    yarn add --dev jest
  '';
}
